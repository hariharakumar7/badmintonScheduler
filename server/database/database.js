var AWS = require("aws-sdk");
var createTable = require("./createTable");
AWS.config.update({
  region: "us-east-1", // replace with your region in AWS account
});

const DynamoDB = new AWS.DynamoDB();

module.exports = {
  DynamoDB,
};
