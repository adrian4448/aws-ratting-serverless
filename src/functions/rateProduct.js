const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

const RATE_TABLE_NAME = process.env.RATE_TABLE_NAME;
const SQS_RATE_URL = process.env.QUEUE_URL;

const rateDdb = new AWS.DynamoDB.DocumentClient();
const sqsRateQueue = new AWS.SQS();

module.exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  
  const rate = {
    pk: uuidv4(),
    sk: body.productName,
    origin: body.origin,
    user: body.user,
    note: body.note
  }

  try {
    await saveRate(rate);
    await sendRateMessage(rate);
    
    return {
      statusCode: 200,
      body: JSON.stringify({ rate })
    };
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: e })
    };
  }
};

async function saveRate(rate) {
  const rateItem = await rateDdb.put({
    TableName: RATE_TABLE_NAME,
    Item: rate
  }).promise();

  return rateItem.Attributes;
}

async function sendRateMessage(rate) {
  const message = {
    productName: rate.productName,
    note: rate.note
  };
  
  await sqsRateQueue.sendMessage({
    QueueUrl: SQS_RATE_URL,
    MessageBody: JSON.stringify(message)
  }).promise();
}