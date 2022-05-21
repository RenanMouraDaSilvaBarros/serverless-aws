const AWS = require('aws-sdk')
const ResponseUtils = require('../utils/response-utils')

let dynamoDb = null

class DynamoDbService {

    static getInstace() {
        AWS.config.update({ region: 'us-east-1' });
        return new AWS.DynamoDB({ apiVersion: '2012-08-10' });
    }

    static getOrCreateInstace() {
        dynamoDb = dynamoDb ? dynamoDb : this.getInstace()
    }

    static listTables() {
        DynamoDbService.getOrCreateInstace()
        dynamoDb.listTables({}, ResponseUtils.done);
    }

    static listAllItensTables({TableName}) {
        DynamoDbService.getOrCreateInstace()
        dynamoDb.scan({ TableName }, ResponseUtils.done)
    }

    static createItem({TableName,item}) {
        DynamoDbService.getOrCreateInstace()
        const params = {
            TableName,
            Item
        };
        dynamoDb.putItem(params, ResponseUtils.done);
    }

}

module.exports = DynamoDbService;