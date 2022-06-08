const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient(); 

const dynamdbOnScan = async (params)=> dynamoDb.scan(params).promise()


module.exports = {dynamdbOnScan}


