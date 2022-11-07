"use strict";

const User = require("../model/users.model");

// responde message
function resMessage(res, method) {
  switch (method) {
    case "update":
      console.error("[UPDATE] Username and Password are required!");
      return res.status(400).send("Username and Password are required!");
    case "update-issue":
      console.error("[UPDATE] Error occured during updating user");
      return res.status(500).send("Error occured during updating user");
    case "delete":
      console.error("[DELETE] Please provide username to proceed");
      return res
        .status(400)
        .send("[DELETE] Please provide username to proceed");
    case "delete-issue":
      console.log("[DELETE] Error occured during deleting item");
      return res
        .status(500)
        .send("[DELETE] Error occured during deleting item");
    case "create":
      console.error("[CREATE] Username and Password are required");
      return res
        .status(400)
        .send("[CREATE] Username and Password are required");
    case "create-issue":
      console.error("[CREATE] User successfully created!");
      return res.sendStatus(200, "[CREATE] User successfully created!");
    case "read-all":
      console.error("[READ-ALL] Error occured during fetching items");
      return res
        .status(500)
        .send("[READ-ALL] Error occured during fetching items");
    case "read-filter":
      console.error("[READ-FILTER] Please provide username");
      res.status(400).send("[READ-FILTER] Please provide username");

	case "delete-success":
		console.log("[DELETE] User Successfully deleted")
		
		
  }
}

// Retrieve filtered user
exports.findByUser = function (req, res) {
  const username = req.query.username;
  if (!username) return resMessage(res, "read-filter");

  User.findByUser(username, function (err, user) {
    if (err) {
      console.log("err: ", err);
      return res.status(500).send("Error occured during saving item");
    }
    console.log("user: ", user);
    return res.send(user);
  });
};

// Retrieve all items
exports.findAll = function (req, res) {
  User.findAll(function (err, users) {
    if (err) resMessage(res, "read-all");
    console.log("users: ", users);
    return res.send(users);
  });
};

// Save new user
exports.create = function (req, res) {
  const newUser = new User(req.body);

  if (!newUser.username || !newUser.password) return resMessage(res, "create");

  User.create(newUser, function (err) {
    console.log("err: ", err);
    if (err) resMessage(res, "create-issue");

    return res.sendStatus(200, "User successfully created!");
  });
};

// Update user
exports.update = function (req, res) {
  const user = new User(req.body);

  if (!user.username || !user.password) return resMessage(res, "update");

  User.update(user, function (err, result) {
    if (err) return resMessage("update-issue");
    return res.sendStatus(200, result);
  });
};

// Delete user with username
exports.delete = function (req, res) {
  const username = req.query.username;

  if (!username) return resMessage(res, "delete");

  User.delete(username, function (err, employee) {
    if (err) return resMessage(res, "delete-issue");
    return res.sendStatus(200)
  });
};
