const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "email must be provided"],
    trim: true,
    maxLength: [40, "name cannot be more than 20 characters"],
  },
  username: {
    type: String,
  },
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "password must be provided"],
    trim: true,
  },
  token: {
    type: String,
  },
});

module.exports = mongoose.model("User", UserSchema);
