import React from 'react';
import './OrderConfirmationPage.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const OrderConfirmationPage = () => {
  return (
    <>
    <Navbar/>
    <div className="order-confirmation-page">
      <div className="confirmation-container">
        <img src="/images/success.png" alt="Success" className="success-icon" />
        <h1>Payment Successful!</h1>
        <p>Thank you for your order. Your payment has been processed successfully.</p>
        <div className="order-details">
          <h2>Order Summary</h2>
          <p><strong>Order ID:</strong> #123456</p>
          <p><strong>Service:</strong> AC Repair</p>
          <p><strong>Total Amount:</strong> ₹500</p>
        </div>
        <Link to="/" className="back-to-home-btn">Go to Home</Link>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default OrderConfirmationPage;
