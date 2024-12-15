const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Save User Details
router.post("/saveDetails", async (req, res) => {
  const { name, mobileNo, address, city } = req.body;

  // Validate input fields
  if (!mobileNo || !address || !city) {
    return res.status(400).json({ message: "Mobile number, address, and city are required." });
  }

  try {
    const newUser = new User({
      name: name || "Anonymous", // Default name if not provided
      mobileNo,
      address,
      city,
    });

    await newUser.save();
    res.status(200).json({ message: "Details saved successfully!" });
  } catch (error) {
    // Handle duplicate key error (e.g., unique email)
    if (error.code === 11000) {
      return res.status(400).json({ message: "User already exists.", error });
    }
    res.status(500).json({ message: "Error saving details", error });
  }
});

module.exports = router;
