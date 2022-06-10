'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

const create = async (event) => {

  const user = JSON.parse(event.body);

  user.id = uuid.v1()

  const data = {
    TableName: "users",
    Item: user,
  };

  try {
    const userCreated = await dynamoDb.put(data).promise()
    return {
      statusCode: 200,
      body: JSON.stringify({ data: userCreated, input: event }),
    };

   } catch (error) {
     return { statusCode: 400, body: JSON.stringify({ error, input: event }) };
   }
};

module.exports = { create };
