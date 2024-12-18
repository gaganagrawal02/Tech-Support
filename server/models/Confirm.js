const mongoose = require("mongoose");

const confirmSchema = new mongoose.Schema({
  name: { type: String, default: "Anonymous" }, // Default value for name
  mobileNo: {
    type: String,
    required: true,
    unique: true, // Ensures unique mobile number
    match: /^[0-9]{10}$/, // Validates 10-digit mobile number format
  },
  address: { type: String, required: true }, // Required field
  city: { type: String, required: true }, // Required field
}, { timestamps: true }); // Adds createdAt and updatedAt timestamps

// Model creation
const Confirm = mongoose.model("Confirm", confirmSchema);

module.exports = Confirm;