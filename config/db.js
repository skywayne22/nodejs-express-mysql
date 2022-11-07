var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "your-user",
  password: "your-password",
  database: "TESTDB"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  /*Create a database named "mydb":*/
  con.query("CREATE DATABASE IF NOT EXISTS TESTDB;   ", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });

  /*setup table  */
  con.query(""+
  "CREATE TABLE IF NOT EXISTS USERS("
  + "firstname VARCHAR(50) NOT NULL,  "
  + "lastname VARCHAR(50) NOT NULL, "
  + "address VARCHAR(50) NOT NULL, "
  + "postcode VARCHAR(50) NOT NULL, "
  + "contactnumber VARCHAR(50) NOT NULL, "
  + "email VARCHAR(50) NOT NULL, "
  + "username VARCHAR(50) NOT NULL, "
  + "password VARCHAR(50) NOT NULL, "
  + "PRIMARY KEY (username)"
  + ");"
  , function (err, result) {
    if (err) throw err;
    console.log("TABLE created!");
  });

});
module.exports = con;



              