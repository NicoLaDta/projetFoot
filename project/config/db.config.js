const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'footDb',
  port:"3306",
  multipleStatements: true
});

connection.connect();
module.exports = connection;