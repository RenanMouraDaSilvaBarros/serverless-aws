const dynamoDb = new AWS.DynamoDB.DocumentClient(); 

const onScan = (err, data,callback) => {
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

module.exports = {onScan}