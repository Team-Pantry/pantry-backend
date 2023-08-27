const mysql = require("mysql");
require('dotenv').config();

const host = process.env.DB_HOST || "localhost";

const connection = mysql.createConnection({
  host: host,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME,
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;