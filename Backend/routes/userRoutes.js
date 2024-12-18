const express = require("express");
const Confirm = require("../models/Confirm"); // Use the Confirm model
const router = express.Router();

router.post("/saveDetails", async (req, res) => {
  const { name, mobileNo, address, city } = req.body;

  // Validate required fields
  if (!mobileNo || !address || !city) {
    return res
      .status(400)
      .json({ message: "Mobile number, address, and city are required." });
  }

  try {
    // Save user details
    const newUser = new Confirm({
      name: name || "Anonymous", // Default name if not provided
      mobileNo,
      address,
      city,
    });

    await newUser.save(); // Save to database
    return res.status(200).json({ message: "Details saved successfully!" });
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate key error (unique constraint violation)
      return res
        .status(400)
        .json({ message: "User with this mobile number already exists." });
    }
    console.error("Error saving details:", error);
    return res
      .status(500)
      .json({ message: "Error saving details. Please try again later." });
  }
});

module.exports = router;
