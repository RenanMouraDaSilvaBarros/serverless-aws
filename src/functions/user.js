
'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk');
AWS.config.setPromisesDependency(require('bluebird'));
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const UserValidation = require('../validations/user-validation')

module.exports.create = (event, context, callback) => {

  const user = JSON.parse(event.body);

  try {
    UserValidation.userFilds(user)
  } catch (error) {
    callback(new Error(error));
    return;
  }

  createUser(userInfo(user))
    .then(res => {
      callback(null, {
        statusCode: 201,
        body: JSON.stringify({
          message: `successes`,
          candidateId: res.id
        })
      });
    })
    .catch(err => {
      console.log(err);
      callback(null, {
        statusCode: 500,
        body: JSON.stringify({
          message: `error ${err}`
        })
      })
    });

};

const createUser = user => {
  const data = {
    TableName: "users",
    Item: user,
  };

  return dynamoDb.put(data).promise()
    .then(res => user);
};

const userInfo = ({ nome, endereco, cidade, email }) => {
  const timestamp = new Date().getTime();
  return ({ id: uuid.v1(), nome, endereco, cidade, email, createAt: timestamp, updateAt: timestamp })
};

module.exports.list = (event, context, callback) => {
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

};