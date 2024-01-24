const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");
//const {Schema}=mongoose;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//export default mongoose.model("User", userSchema);
module.exports = mongoose.model("User", userSchema);
