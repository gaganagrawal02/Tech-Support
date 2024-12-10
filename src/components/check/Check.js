import React, { useState } from "react";
import axios from "axios";

const CheckoutPage = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");

  const handleConfirm = async () => {
    if (!selectedDate || !selectedTimeSlot) {
      alert("Please select a date and time slot.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/confirm-order", {
        selectedDate,
        selectedTimeSlot,
      });

      if (response.data.success) {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error confirming order:", error);
      alert("Failed to confirm order. Please try again.");
    }
  };

  return (
    <div>
      <h1>Checkout Page</h1>
      <div>
        <h3>Select Date</h3>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>
      <div>
        <h3>Select Time Slot</h3>
        <select
          value={selectedTimeSlot}
          onChange={(e) => setSelectedTimeSlot(e.target.value)}
        >
          <option value="">--Select Time Slot--</option>
          <option value="10 AM - 2 PM">10 AM - 2 PM</option>
          <option value="2 PM - 6 PM">2 PM - 6 PM</option>
        </select>
      </div>
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
};

export default CheckoutPage;
