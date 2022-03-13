const database = require("./database");

function addEmail(email) {
  const params = {
    TableName: "Users",
    Item: {
      email: { S: email },
    },
  };

  database.DynamoDB.putItem(params, function (err) {
    if (err) {
      console.error("Unable to add movie", err);
    } else {
      console.log(`Added ${email}`);
    }
  });
}

module.exports = { addEmail };
