import React, { useState } from 'react';
import axios from 'axios';

import './Signup.css';
import Navbar from '../Navbar/Navbar';
import Cart from '../Cartpage/Cart';
import Footer from '../Footer/Footer';

const Signup = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', formData);
      setMessage(response.data.message);
      setFormData({ username: '', email: '', password: '' });
    } catch (error) {
      setError(error.response?.data?.message || 'Error occurred while registering user');
    }
  };

  return (
    <>
      <Navbar toggleCart={toggleCart} cartItemCount={0} /> {/* Set cartItemCount to 0 for empty cart */}
      {isCartOpen && <Cart onClose={closeCart} />}
      <div className="signup-container">
        <h1>Join Our Feedback</h1>
        <p className="signup-subtitle">Sign up to start your anonymous adventure</p>
        {message && <p className="message success">{message}</p>}
        {error && <p className="message error">{error}</p>}
        <form className="form-signup" onSubmit={handleSubmit}>
          <label className="form-label">Username *</label>
          <input
            type="text"
            name="username"
            className="signup-input"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <label className="form-label">Email *</label>
          <input
            type="email"
            name="email"
             className="signup-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label className="form-label">Password *</label>
          <input
            type="password"
            name="password"
             className="signup-input"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button className="signup-bt" type="submit">Sign Up</button>
        </form>
        <p className="login-link">
          Already a member? <a href="/login">Sign in</a>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
