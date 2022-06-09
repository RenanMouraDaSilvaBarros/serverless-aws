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
      event,
      body: users,
    };

  } catch (error) {
    return { statusCode: 400, event, body: error };
  }
};

module.exports = { listAllUsers };
