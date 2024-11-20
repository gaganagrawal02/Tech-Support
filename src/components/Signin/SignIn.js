import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Cart from '../Cartpage/Cart';
import Footer from '../Footer/Footer';
import './SignIn.css';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { initOTPless } from '../checkout/utils/initOTpless';

const SignIn = () => {
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    initOTPless(callback);

    // Retrieve cart items from localStorage when the page loads
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const callback = (otplessUser) => {
    console.log(otplessUser);
    navigate('/checkout');
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>Door2fy | Secure Sign-In to Access Technical Services</title>
        <meta name="description" content="Sign in to Door2fy to book expert technical services..." />
      </Helmet>
      <Navbar toggleCart={toggleCart} cartItemCount={cartItems.length} />
      <div className="sign-in-container">
      <div id="otpless-login-page"></div>

      </div>
       
      {/* Other sign-in page content */}
      {isCartOpen && <Cart items={cartItems} onClose={closeCart} />}
      <Footer />
    </>
  );
};

export default SignIn;
