# AWS Ratting Serverless App 

Aplicativo de gerenciamento de revisão de produtos sem servidor totalmente escalável usando as seguintes tecnologias:

- AWS Lambda
- AWS DynamoDB
- AWS SQS (Simple Queue Service)
- Serverless framework

Este aplicativo é baseado em um estudo de caso criado por mim para aprofundar o uso das tecnologias utilizadas para
a criação do aplicativo, visando um ambiente escalável, com possibilidade de grande pico de avaliações simultâneas.

<br>
<img src="https://github.com/adrian4448/aws-ratting-serverless/blob/master/arquitetura.png?raw=true"/>
<br>

# Observacoes

Como estamos trabalhando em um ambiente de estudo/desenvolvimento, recursos provisionados na AWS como DynamoDB
e Lambda estão com recursos limitados de escrita/leitura e também de memória para gerar maior economia, porém em um
ambiente de produção real, a capacidade desses recursos poderia ser facilmente aumentada devido ao uso de serverless
estrutura

# How to use

Para testar ou utilizar a aplicação de forma local em sua maquina, basta rodar os seguintes comandos com o serverless framework instalado
em sua maquina

- npm install
- sls offline

Sendo assim, o serverless framework ira inicializar localmente os recursos em sua maquina, lembrando que recursos com o DynamoDB e o SQS 
não serão inicializados juntos.

Para utilizar em sua infraestrutura, basta rodar o seguinte comando com sua maquina autenticada com sua conta na AWS, para o serverless
framework provisionar a infraestrutura em sua conta.

- sls deploy