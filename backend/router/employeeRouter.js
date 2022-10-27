var express = require("express");
var emp_Route = express.Router();
const employeeController = require("../controllers/employeeController");

//-----------importing controllers----------------
emp_Route
  .route("/")
  .get(employeeController.get_all_users)
  .post(employeeController.insert_users);
emp_Route
  .route("/:id")
  .get(employeeController.getUserById)
  .put(employeeController.update_users)
  .delete(employeeController.delete_User);

module.exports = emp_Route;
