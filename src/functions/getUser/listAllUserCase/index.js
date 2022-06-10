"use strict";

const { dynamdbOnScan } = require("../../../components/dynamodb/on_scan");

const listAllUsers = async (event) => {
  const params = {
    TableName: "users",
    ProjectionExpression: "nome, endereco, cidade, email",
  };

  try {
    const users = await dynamdbOnScan(params);
    return {
      statusCode: 200,
      body: JSON.stringify({ data: users.Items, input: event }),
    };

   } catch (error) {
     return { statusCode: 400, body: JSON.stringify({ error, input: event }) };
   }
};

module.exports = { listAllUsers };
