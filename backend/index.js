var createError = require("http-errors");
var express = require("express");
var path = require("path");
const bodyParser = require("body-parser");

var cookieParser = require("cookie-parser");
var logger = require("morgan");
var MongoClient = require("mongodb").MongoClient;
var mongoose = require("mongoose");
const cors = require("cors");
var http = require("http");
const config = require("./database/db");

var employeeRouter = require("./router/employeeRouter");
//-----------------MONGODB CONNECTION-----------------------
mongoose.connect(config.db, { useNewUrlParser: true }, function (err, db) {
  if (err) throw err;
  console.log("*** MONGODB Connected ***");
});

//----------------------------------------------------------

var app = express();
var server = http.createServer(app);

server.listen(3000, function () {
  console.log("Currently listening on port " + 3000);
});
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors("*"));
app.use("/employee", employeeRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

module.exports = app;
