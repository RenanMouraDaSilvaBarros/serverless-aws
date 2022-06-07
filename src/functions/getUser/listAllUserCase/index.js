"use strict";

const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();

const listAllUsers = async (event, context, callback) => {
  const params = {
    TableName: "users",
    ProjectionExpression: "nome, endereco, cidade, email",
  };

  const onScan = (err, data, callback) => {
    if (err) {
      console.log(
        "Scan failed to load data. Error JSON:",
        JSON.stringify(err, null, 2)
      );
      callback(err);
    } else {
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(data.Items),
      });
    }
  };

 return dynamoDb.scan(params, onScan);
};

module.exports = { listAllUsers };
