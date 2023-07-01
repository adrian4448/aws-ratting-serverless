# AWS Ratting Serverless App 

Aplicativo de gerenciamento de revisão de produtos sem servidor totalmente escalável usando as seguintes tecnologias:

- AWS Lambda
- AWS DynamoDB
- AWS SQS (Simple Queue Service)
- Serverless framework

Este aplicativo é baseado em um estudo de caso criado por mim para aprofundar o uso das tecnologias utilizadas para
a criação do aplicativo, visando um ambiente escalável, com possibilidade de grande pico de avaliações simultâneas.

# OBS

Como estamos trabalhando em um ambiente de estudo/desenvolvimento, recursos provisionados na AWS como DynamoDB
e Lambda estão com recursos limitados de escrita/leitura e também de memória para gerar maior economia, porém em um
ambiente de produção real, a capacidade desses recursos poderia ser facilmente aumentada devido ao uso de serverless
estrutura