import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './CheckoutPage.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import Cart from '../Cartpage/Cart';
import { useNavigate } from 'react-router-dom';

import axios from "axios";
const CheckoutPage = () => {
  
  const navigate = useNavigate();
     const handlePaymentSuccess = () => {
      // After successful payment
      navigate('/order-confirmation');
    };
  const handlePayment = async () => {
 
  
    try {
      // Step 1: Create an order on the backend
      const { data } = await axios.post("http://localhost:5000/api/payment/create-order", {
        amount: 500, // Amount in INR
        currency: "INR",
      });

      if (!data.success) {
        alert("Failed to create order. Please try again.");
        return;
      }

      const { id: order_id, amount: orderAmount, currency } = data.order;

      // Step 2: Load Razorpay script dynamically
      const scriptLoaded = await new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = resolve;
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
      });

      if (!scriptLoaded) {
        alert("Failed to load Razorpay SDK. Please check your connection.");
        return;
      }

      // Step 3: Open Razorpay payment gateway
      const options = {
        key: "rzp_test_ALRfjpu2T2UZO0", // Replace with Razorpay Key ID
        amount: orderAmount, // Amount in paise (₹500.00 -> 50000 paise)
        currency,
        name: "College Project",
        description: "Payment for your service booking",
        image: "/logo.png", // Replace with your company logo
        order_id, // Order ID from backend
        handler: async (response) => {
          const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = response;

          // Step 4: Verify payment on the backend
          const verification = await axios.post(
            "http://localhost:5000/api/payment/verify-payment",
            {
              razorpay_order_id,
              razorpay_payment_id,
              razorpay_signature,
            }
          );

          if (verification.data.success) {
            alert("Payment verified successfully!");
            handlePaymentSuccess();
          } else {
            alert("Payment verification failed!");
          }
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error(error);
      alert("An error occurred during payment processing.");
    }
  };
  const location = useLocation();
  
  const [activeTab, setActiveTab] = useState('cart');


  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  
  useEffect(() => {
   

    // Retrieve cart items from localStorage when the page loads
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };


  // const handleProceedToPayment = () => {
  //   setActiveTab('payment'); // Switch to Payment Details tab on button click
  // };
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


 // State for form inputs
 const [formData, setFormData] = useState({
  name: "",
  mobileNo: "",
  address: "",
  city: "",
});

// State for success/error message
const [message, setMessage] = useState("");

// Handle input change
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};

// Handle form submission
const handleFormSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "http://localhost:5000/api/users/saveDetails", // Correct endpoint
      formData
    );

    if (response.status === 200) {
      setMessage("Details saved successfully!");
      setFormData({
        name: "",
        mobileNo: "",
        address: "",
        city: "",
      });
    }
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    setMessage("Error saving details. Please try again.");
  }};
  return (
    <>

    <Navbar toggleCart={toggleCart} cartItemCount={cartItems.length} /> {/* Set cartItemCount to 0 for empty cart */}
      
      {isCartOpen && (
        <Cart onClose={closeCart} />
      )}
      <div className="checkout-page">
        <div className="background-overlay">
          {/* Header with tabs */}
          <div className="checkout-tabs">
            <div className={`tab ${activeTab === 'cart' ? 'active' : ''}`} onClick={() => setActiveTab('cart')}>
              Your Details
            </div>
            <div className={`tab ${activeTab === 'payment' ? 'active' : ''}`}>
              Payment Details
            </div>
            <div className={`tab ${activeTab === 'confirmation' ? 'active' : ''}`}>
              Order Confirmation
            </div>
          </div>
          <div className="underline-checkout"></div>

          {/* Cart Details Section */}
          {/* {activeTab === 'cart' && (
            <div className="cart-details">
              <div className="card-product-details">
                <div className="product-row">
                  <h2>Product Name</h2>
                  <h2>Plan/Service Type</h2>
                  <h2>Total Amount</h2>
                </div>
                {cartItems.map((item) => (
                  <div className="service-name" key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.quantity} x {item.name}</p>
                    <p>₹{item.price * item.quantity}</p>
                  </div>
                ))}
                <div className="total-amount">
                  <p>Total Amount: ₹{calculateTotal()}</p>
                </div>
              </div>
                          
          
            </div>
          )} */}

              {/* Service Details Form */}
{/* Service Details Form */}
{/* Service Details Form */}
<div className="card-service-details">
      <h2>Enter Service Details</h2>
      <div className="underline-service"></div>
      <form onSubmit={handleFormSubmit} className="form-container">
        <div className="form-left">
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Full Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Mobile No</label>
              <input
                type="text"
                name="mobileNo"
                placeholder="Enter Your Mobile No"
                value={formData.mobileNo}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                placeholder="Enter Address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                placeholder="Enter City"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="confirm-btn">
            Confirm
          </button>
          {message && <p className="message">{message}</p>}
        </div>
        <div className="form-right">
          <img src="images/laptop-protection.svg" alt="Illustration" />
        </div>
      </form>
    </div>



              {/* Service Slot Section */}

              <div className="Date-slot">

  <div className="Date-slot-left">
    <h1 className="checks-ser">Select Service Slot</h1>
    <div className="underline-service"></div>
    <div>
      <h3 className="service-check">Select Date</h3>
      <input
        className="Date-input"
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
    </div>
    <div>
      <h3 className="service-check">Select Time Slot</h3>
      <select
        className="Time-slot"
        value={selectedTimeSlot}
        onChange={(e) => setSelectedTimeSlot(e.target.value)}
      >
        <option value="">--Select Time Slot--</option>
        <option value="10 AM - 2 PM">10 AM - 2 PM</option>
        <option value="2 PM - 6 PM">2 PM - 6 PM</option>
      </select>
    </div>
    <button className="button-time" onClick={handleConfirm}>
      Confirm
    </button>
  </div>



</div>



          {/* Payment Details Section */}
         

            <div className="payment-details show-payment">
 
              <div className="card-payment">
                <h2>Payment Details</h2>
                <div className="underline-payment"></div>
                <ul className="bullet-points">
                  <li><span className="check-icon">✔</span> For Annual plans, the device should be in working condition.</li>
                  <li><span className="check-icon">✔</span> For Comprehensive and Advanced AMC for AC, inspection will be conducted post-purchase and near the plan start date.</li>
                  <li><span className="check-icon">✔</span> Any spare part or gas charging (for AC) if needed during first visit/inspection, the charges will be borne by the customer.</li>
                  <li><span className="check-icon">✔ </span> By proceeding, you agree to the <Link to="/terms-of-services" className="terms-link"> Terms Of Services </Link></li>
                </ul>
                
                <button className="proceed-btn" onClick={handlePayment} >Proceed To Payment</button>
              </div>
            
           <Footer />
            </div>
         

          {/* Order Confirmation Section */}
          {activeTab === 'confirmation' && (
          <div className="confirmation-details">
            <h2>Payment Successful!</h2>
            <p>Thank you for your payment. Your order has been successfully placed.</p>
            <p>Order ID: 12345</p> {/* Add dynamic order ID if available */}
            <p>We will contact you soon with more details.</p>
          </div>
        )}
        </div>
      </div>
      {isCartOpen && <Cart items={cartItems} onClose={closeCart} />} 
    </>
  );
};

export default CheckoutPage;
