const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  resetToken: String,
  resetTokenExpiry: Date,
  name: { type: String, required: false }, // Not required if saving other details
  mobileNo: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
