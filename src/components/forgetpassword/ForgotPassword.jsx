import React, { useState } from 'react';
import axios from 'axios';
import './ForgotPassword.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Cart from '../Cartpage/Cart';

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
      const response = await axios.post('http://localhost:5000/api/forgot-password', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error sending reset email');
    }
  };

  return (
    <>
      <Navbar toggleCart={toggleCart} cartItemCount={0} />
      {isCartOpen && <Cart onClose={closeCart} />}
      <div className="forgot-password-container">
        <h1>Reset your password</h1>
        <p className="instructions">
          Have no fear. We'll email you instructions to reset your password.
          If you don't have access to your email, we can try account recovery.
        </p>
        {message && <p className="message">{message}</p>}
        <form onSubmit={handleForgotPassword}>
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            required
          />
          <button type="submit" className="submit-button">Submit</button>
        </form>
        <a href="/login" className="back-to-login">← Back To Login</a>
      </div>
      <Footer />
    </>
  );
};

export default ForgotPassword;
