import React, { useState } from 'react';
import axios from 'axios';
import './ForgotPassword.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Cart from '../Cartpage/Cart';
import { Helmet } from 'react-helmet-async';

const ForgotPassword = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/forgot-password`, { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error sending reset email');
    }
  };

  return (
    <>
           <Helmet>
           <title>Forgot Password | Tech Support</title>
           <meta name="description" content="Get your MacBook repaired by certified experts at Door2fy. Fast, reliable, and affordable MacBook repair services. Book your appointment online today!"/>
         </Helmet>
      <Navbar toggleCart={toggleCart} cartItemCount={0} />
      {isCartOpen && <Cart onClose={closeCart} />}
      <div className="forgot-password-container">
        <div className="forgot-password-box">
          <h1>Reset Your Password</h1>
          <p className="instructions">
            No worries, we’ve got you covered! Enter your email below, and we’ll send you instructions to reset your password.
          </p>
          {message && <p className="message">{message}</p>}
          <form className="forgot-password-lab" onSubmit={handleForgotPassword}>
  <label htmlFor="email" className="forgot-password-label">Email Address *</label>
  <input
    type="email"
    id="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Enter your email address"
    required
    className="forgot-password-input"
  />
  <button type="submit" className="submit-button">Submit</button>
</form>
          <a href="/login" className="back-to-login">← Back To Login</a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForgotPassword;
