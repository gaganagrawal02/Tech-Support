import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Cart from '../Cartpage/Cart';

const Login = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error logging in');
    }
  };

  return (
    <>
      <Navbar toggleCart={toggleCart} cartItemCount={0} />
      {isCartOpen && <Cart onClose={closeCart} />}
      <div className="login-container">
        <h2>Welcome back</h2>
        <p>Please enter your details</p>
        {message && <p className="message">{message}</p>}
        <form onSubmit={handleLogin}>
          <label>Email address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <div className="login-options">
     
            <a href="/forgot-password" className="forgot-password-link">
              Forgot password
            </a>
          </div>
          <button type="submit" className="login-button">Sign In</button>

        </form>
        <p className="signup-link">
          Don’t have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Login;