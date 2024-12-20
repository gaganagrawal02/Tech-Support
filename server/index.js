require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require("./routes/userRoutes");


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
const serviceSlots = [
  {
    id: "10-Dec",
    label: "Today, 10 Dec",
    isAvailable: false,
    timeSlots: [],
  },
  {
    id: "11-Dec",
    label: "Tomorrow, 11 Dec",
    isAvailable: true,
    timeSlots: [
      { id: "1", label: "10 AM - 2 PM" },
      { id: "2", label: "2 PM - 6 PM" },
    ],
  },
  {
    id: "12-Dec",
    label: "Thursday, 12 Dec",
    isAvailable: true,
    timeSlots: [
      { id: "3", label: "10 AM - 2 PM" },
      { id: "4", label: "2 PM - 6 PM" },
    ],
  },
];
// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Database connected successfully'))
  .catch((error) => console.error('Database connection error:', error));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', forgotPasswordRoutes);
app.use('/api', resetPasswordRoutes);
app.use('/api/payment', razorpayRoutes); 
app.use("/api/users", userRoutes);

app.post("/api/confirm-order", (req, res) => {
  const { selectedDate, selectedTimeSlot } = req.body;

  if (!selectedDate || !selectedTimeSlot) {
    return res.status(400).json({ success: false, message: "Please select both date and time slot" });
  }

  // Simulate saving to the database or other logic
  console.log("Order Confirmed:", { selectedDate, selectedTimeSlot });

  res.json({ success: true, message: "Your order has been confirmed successfully!" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running successfully `);
});

app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});
