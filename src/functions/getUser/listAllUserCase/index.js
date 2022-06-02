
'use strict'

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.listAll = (event, context, callback) => {
    const params = {
        TableName: "users",
        ProjectionExpression: "nome, endereco, cidade, email"
      };
    
      const onScan = (err, data) => {
        if (err) {
          console.log('Scan failed to load data. Error JSON:', JSON.stringify(err, null, 2));
          callback(err);
        } else {
          return callback(null, {
            statusCode: 200,
            body: JSON.stringify(
              data.Items
            )
          });
        }
    
      };
    
      dynamoDb.scan(params, onScan);   
}