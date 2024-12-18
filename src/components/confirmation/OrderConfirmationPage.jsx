import React from 'react';
import './OrderConfirmationPage.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Helmet } from 'react-helmet-async';

const OrderConfirmationPage = () => {
  return (
    <>
      {/* Helmet for SEO */}
      <Helmet>
        <title>Order Confirmation | Tech Support</title>
        <meta
          name="description"
          content="Get your MacBook repaired by certified experts at Door2fy. Fast, reliable, and affordable MacBook repair services. Book your appointment online today!"
        />
      </Helmet>

      {/* Navbar */}
      <Navbar />

      {/* Order Confirmation Section */}
      <div className="order-confirmation-page">
        <div className="confirmation-container">
          <img
            src="/images/success.png"
            alt="Success"
            className="success-icon"
          />
          <h1>Payment Successful!</h1>
          <p>Thank you for your order. Your payment has been processed successfully.</p>
          <div className="order-details">
            <h2>Order Summary</h2>
            <p><strong>Order ID:</strong> #123456</p>
            <p><strong>Service:</strong> AC Repair</p>
            <p><strong>Total Amount:</strong> ₹500</p>
          </div>
        </div>

        {/* Thank You Section */}
        <div className="thankyou-container">
          <div className="icon-checkmark">
            <span>✅</span>
          </div>

          <h1 className="thankyou-heading">
            Thank you for your purchase.
          </h1>

          <p className="thankyou-instructions">
            You're all set, watch out your email for further instructions to start experiencing real growth.
          </p>

          <p className="updates-heading">
            For Further Updates, Contact Us via Email
          </p>

          <div className="whatsapp-button">
            <a
              href="https://chat.whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              &#128242; JOIN OUR PRIVATE WHATSAPP GROUP
            </a>
          </div>

          <p className="joining-details">
            Joining details will be shared in the group. Don’t miss it.
          </p>

          <p className="masterclass-note">
            <strong>
              Don’t miss joining the WhatsApp Group for further updates.
            </strong>
          </p>

          <Link to="/" className="back-to-home-btn">Go to Home</Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default OrderConfirmationPage;
