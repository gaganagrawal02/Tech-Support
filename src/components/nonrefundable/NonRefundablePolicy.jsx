// src/NonRefundablePolicy.js

import React,{useState} from 'react';
import './NonRefundablePolicy.css'; // Import your CSS file for styling
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Cart from '../Cartpage/Cart';


const NonRefundablePolicy = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  
// const [cartItems, setCartItems] = useState([]);


const toggleCart = () => {
  setIsCartOpen(!isCartOpen);
};

const closeCart = () => {
  setIsCartOpen(false);
};
  return (
    <>
 
<Navbar toggleCart={toggleCart} cartItemCount={0} /> {/* Set cartItemCount to 0 for empty cart */}
      
      {isCartOpen && (
        <Cart onClose={closeCart} />
      )}
    <div className="non-refundable-policy">
      <header className="policy-header">
        <h1>Non-Refundable Policy</h1>
      </header>
      <section className="policy-content">
        <h2>Introduction</h2>
        <p>
          Thank you for visiting our website. Please be aware that all sales are final, and no refunds will be issued. This Non-Refundable Policy is designed to ensure that our customers are fully informed before making a purchase.
        </p>
        
        <h2>Policy Details</h2>
        <p>
          By completing a purchase with us, you acknowledge and agree to the following:
        </p>
        <ul>
          <li>No refunds, exchanges, or credits will be provided under any circumstances.</li>
          <li>All sales are final, and no exceptions will be made.</li>
          <li>We encourage you to carefully review your order before completing your purchase.</li>
        </ul>
        
        <h2>Exceptions</h2>
        <p>
          There are no exceptions to this policy. Please ensure that you are satisfied with your purchase before finalizing your order.
        </p>
        
        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns regarding this policy or your purchase, please feel free to contact us:
        </p>
        <p>Email:support@door2fy.com</p>
        
      </section>
    
    </div>
    <Footer /> 
    </>
  );
};

export default NonRefundablePolicy;