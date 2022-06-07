const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient(); 

const execScan = (params, onScan)=>{
   return dynamoDb.scan(params, onScan);   
}


