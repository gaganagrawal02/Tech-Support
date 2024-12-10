require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import Routes
const authRoutes = require('./routes/auth');
const forgotPasswordRoutes = require('./routes/forgotPassword');
const resetPasswordRoutes = require('./routes/resetPassword');
const razorpayRoutes = require('./routes/razorpay'); // Import Razorpay routes

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Database connected successfully'))
  .catch((error) => console.error('Database connection error:', error));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/forgot-password', forgotPasswordRoutes);
app.use('/api/reset-password', resetPasswordRoutes);
app.use('/api/payment', razorpayRoutes); 


app.post("/api/confirm-order", (req, res) => {
  const { selectedDate, selectedTimeSlot } = req.body;

  if (!selectedDate || !selectedTimeSlot) {
    return res.status(400).json({ success: false, message: "Invalid input" });
  }

  console.log("Order Confirmed:", { selectedDate, selectedTimeSlot });

  res.json({ success: true, message: "Order successfully confirmed!" });
});
// Start Server
app.listen(PORT, () => {
  console.log(`Server running successfully `);
});
