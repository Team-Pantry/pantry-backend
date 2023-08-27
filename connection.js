const mysql = require("mysql");
require('dotenv').config();


const connection = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;