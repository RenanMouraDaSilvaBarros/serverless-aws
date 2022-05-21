const AwsService = require('./services/aws-service')
const DynamoDbService = require('./services/dynamodb-service')

AwsService.config();

function main() {


   //Criar item
   const send = {
      Item: {
         'uuid': { S: '4' },
         'name': { S: 'renan' },
         'cargo': {S: 'dev'},
         'message':{S: 'default'},
         'image':{S:'www.s3.com.br'}
      }
   }

   DynamoDbService.createItem({TableName:'produtos' ,Item: send.Item})


   //Listar Tabelas
   DynamoDbService.listAllItensTables({ TableName: 'produtos' })
   //createItem
   //deleteItem
   //getItem

   //conectar com api-gateway
   //converte record
   /*
      {
         uuid: 1,
         name:"renan ",
         cargo:"analista de desenvolvimento",
         imagem:"www.image.s3.com.br",
         message:""
      }
   */
}

main()