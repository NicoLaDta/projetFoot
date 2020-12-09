const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'footDb',
<<<<<<< HEAD
  port:"8889",
  multipleStatements: true
=======
  port:"3306"
>>>>>>> 13f0d1169e1ef3ba112efe78be7d49bc0b00d1b7
});

connection.connect();
module.exports = connection;