const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '100.Computacion',
  database: 'apibiblioteca',
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db mysql is connected');
  }
});

module.exports = mysqlConnection;