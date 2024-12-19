const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const router = express.Router();

router.post('/reset-password', async (req, res) => {
  const { resetToken, newPassword } = req.body;

  try {
    console.log("Received Reset Token:", resetToken);

    // Find user by reset token and ensure it's not expired
    const user = await User.findOne({
      resetToken,
      resetTokenExpiry: { $gt: Date.now() }, // Token expiry check
    });

    if (!user) {
      console.error("Invalid or expired reset token");
      return res.status(400).json({ message: 'Invalid or expired token' });
    }

    console.log("User found:", user);

    // Hash the new password
    user.password = await bcrypt.hash(newPassword, 10);

    // Clear the reset token and expiry
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;

    // Save the updated user
    await user.save();
    console.log("Password updated successfully");

    res.status(200).json({ message: 'Password reset successfully' });
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
