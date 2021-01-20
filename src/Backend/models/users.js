var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var userSchema = Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  mobile: { type: Number, required: true, unique: true },
  salary: { type: Number, required: true },
  team: { type: String, required: true },
  role: { type: String, required: true },
});
module.exports = mongoose.model("User", userSchema, "users");
