var mysql = require("mysql");
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var server = require("http").Server(app);

var port = process.env.PORT || 4000;

// to support JSON-encoded bodies
app.use(bodyParser.json());

// to support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Require item routes
const routes = require("./src/route/users.route");

// using as middleware
app.use("/users", routes);

// root path
app.get("/", (req, res, next) => {
  res.json("NodeJS + MySQL CRUD");
});

server.listen(port, () => {
  console.log("Listening on port: " + port);
});
