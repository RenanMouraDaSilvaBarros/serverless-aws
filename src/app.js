
require('dotenv').config({ path: '/.env/.env' })

console.log(process.env.REGION)

const AwsService = require('./services/aws-service')
const DynamoDbService = require('./services/dynamodb-service')

AwsService.config();

function main() {
   //DynamoService.createTable()
   DynamoDbService.listAllItensTables({TableName: 'produtos'})
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
      }
   */
}

main()