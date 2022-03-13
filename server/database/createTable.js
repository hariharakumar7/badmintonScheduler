const database = require("./database");

const usersParams = {
  TableName: "Users",
  KeySchema: [{ AttributeName: "email", KeyType: "HASH" }],
  AttributeDefinitions: [{ AttributeName: "email", AttributeType: "S" }],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10,
  },
};

const matchesParams = {
  TableName: "Matches",
  KeySchema: [
    { AttributeName: "player", KeyType: "HASH" },
    { AttributeName: "date", KeyType: "RANGE" },
  ],
  AttributeDefinitions: [
    { AttributeName: "player", AttributeType: "S" },
    { AttributeName: "date", AttributeType: "S" },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10,
  },
};

function createTable() {
  database.DynamoDB.createTable(usersParams, function (err, data) {
    if (err) {
      if (err.message == "Table already exists: Users") {
        console.log("Table already exists");
      } else console.error(err);
    } else {
      console.log("Created table", data);
    }
  });

  database.DynamoDB.createTable(matchesParams, function (err, data) {
    if (err) {
      if (err.message == "Table already exists: Matches") {
        console.log("Table already exists");
      } else console.error(err);
    } else {
      console.log("Created table", data);
    }
  });
}

module.exports = {
  createTable,
};
