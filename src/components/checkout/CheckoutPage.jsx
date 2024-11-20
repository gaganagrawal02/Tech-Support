import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './CheckoutPage.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import Cart from '../Cartpage/Cart';
import { Helmet } from 'react-helmet-async';
const CheckoutPage = () => {
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

  return (
    <>
    <Helmet>
      <title>Secure Checkout - Door2fy | Book Your Service Appointment Online</title>
      <meta name="description" content="Complete your service booking securely with Door2fy. Choose your preferred time slot finalize your appointment with our easy and secure checkout process." />
    </Helmet>
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
  <div className="form-container">
    <div className="form-left">
      <div className="form-row">
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Enter Your Full Name" />
        </div>
        <div className="form-group">
          <label>Mobile No</label>
          <input type="text" placeholder="Enter Your Mobile No" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Pincode</label>
          <input type="text" placeholder="Enter Your Six Digit Pincode" />
        </div>
        <div className="form-group">
          <label>City/State</label>
          <input type="text" placeholder="Enter City/State" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Address</label>
          <input type="text" placeholder="Enter Address" />
        </div>
        <div className="form-group">
          <label>Landmark</label>
          <input type="text" placeholder="Enter Street" />
        </div>
      </div>
      <button className="confirm-btn">Confirm</button>
    </div>
    <div className="form-right">
      <img src="images/laptop-protection.svg" alt="Google Map" />
    </div>
  </div>

</div>



              {/* Service Slot Section */}




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

                <button className="proceed-btn"  >Proceed To Payment</button>
              </div>
           <Footer />
            </div>
         

          {/* Order Confirmation Section */}
          {activeTab === 'confirmation' && (
            <div className="confirmation-details">
              <h2>Order Confirmation</h2>
              {/* Additional content for order confirmation */}
            </div>
          )}
        </div>
      </div>
      {isCartOpen && <Cart items={cartItems} onClose={closeCart} />} 
    </>
  );
};

export default CheckoutPage;
