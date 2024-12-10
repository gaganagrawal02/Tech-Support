import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ResetPassword.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Cart from '../Cartpage/Cart';

const ResetPassword = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const { token } = useParams();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/reset-password', {
        resetToken: token,
        newPassword: password,
      });

      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error resetting password');
    }
  };

  return (
    <>
      <Navbar toggleCart={toggleCart} cartItemCount={0} />
      {isCartOpen && <Cart onClose={closeCart} />}
      <div className="reset-password-container">
        <h1>Choose new password</h1>
        <p className="instructions">
          Almost done. Enter your new password and you're all set.
        </p>
        {message && <p className="message">{message}</p>}
        <form className="reset-form" onSubmit={handleResetPassword}>
  <label htmlFor="new-password" className="reset-label">New Password *</label>
  <div className="password-wrapper">
    <input
      type="password"
      id="new-password"
      className="reset-input"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Enter Password"
      required
    />
  </div>
  <label htmlFor="confirm-password" className="reset-label">Confirm New Password *</label>
  <div className="password-wrapper">
    <input
      type="password"
      id="confirm-password"
      className="reset-input"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
      placeholder="Confirm Password"
      required
    />
  </div>
  <button type="submit" className="reset-password-button">
    Reset Password
  </button>
</form>

        <a href="/login" className="back-to-login">← Back To Login</a>
      </div>
      <Footer />
    </>
  );
};

export default ResetPassword;
