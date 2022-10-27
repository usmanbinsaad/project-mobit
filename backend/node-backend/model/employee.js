var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Employee = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: Number,
    },
    cell: {
      type: Number,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);
var empModal = mongoose.model("Employee", Employee);
module.exports = empModal;
