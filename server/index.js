const express = require("express");
const path = require("path");
const createTable = require("./database/createTable");
const PORT = process.env.PORT || 3001;
const app = express();
const addEmail = require("./database/addEmail");

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/addemail", (req, res) => {
  addEmail.addEmail(req.body.email);
  res.json({ message: "hello world!" });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

createTable.createTable();
// addEmail.addEmail("temp1@gmail.com");
