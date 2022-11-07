"use strict";

var db = require("../../config/db");

var User = function (user) {
  this.firstname = user.firstname;
  this.lastname = user.lastname;
  this.address = user.address;
  this.postcode = user.postcode;
  this.email = user.email;
  this.contactnumber = user.contactnumber;
  this.username = user.username;
  this.password = user.password;
};

User.findByUser = function (id, result) {
  let sql = "SELECT * FROM USERS WHERE username = ?";

  db.query(sql, id, (err, row) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }

    console.log(row);
    result(null, row);
  });
};

User.findAll = function (result) {
  let sqlcommand = "SELECT * FROM Users;";
  db.query(sqlcommand, (err, rows) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }

    console.log(rows);
    result(null, rows);
  });
};

User.create = function (user, result) {
  let data = [
    user.firstname,
    user.lastname,
    user.address,
    user.postcode,
    user.email,
    user.contactnumber,
    user.username,
    user.password,
  ];

  let sql =
    "INSERT INTO users(firstname, lastname, address,postcode,email,contactnumber,username,password) VALUES(?, ?, ?,?,?,?,?,?)";

  db.query(sql, data, (err, row) => {
    if (err) {
      result(err, null);
      console.log("error: ", err);
    }

    console.log(row.insertId);
    result(null, row.insertId);
  });
};

User.update = function (user, result) {
  let data = [
    user.firstname,
    user.lastname,
    user.address,
    user.email,
    user.postcode,
    user.password,
    user.contactnumber,
    user.username,
  ];

  console.log(data);
  let sql =
    "UPDATE USERS SET firstname = ?, lastname = ?, address = ?, email = ?, postcode = ?, password = ?, contactnumber = ? WHERE username = ?";

  db.query(sql, data, (err, row, fields) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    console.log(row.affectedRows);
    result(null, row.affectedRows);
  });
};

User.delete = function (username, result) {
  let sql = "DELETE FROM USERS WHERE username = ?";

  db.query(sql, username, (err, row) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    console.log(row.affectedRows);
    result(null, row.affectedRows);
  });
};

module.exports = User;
