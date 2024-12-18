import React, { useState } from 'react';
import './ContactUs.css'; // Create this CSS file for styling
import Navbar from '../Navbar/Navbar'; 
import Footer from '../Footer/Footer';
import Cart from '../Cartpage/Cart';
import { Helmet } from 'react-helmet-async';
const ContactUs = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // const [cartItems, setCartItems] = useState([]);


  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    issue: '',
    subIssue: '',
    comments: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // You can add form submission logic here
  };


  return (
    <>
        <Helmet>
          <title>Contact Us | Tech Support</title>
          <meta name ="description" content="Get in touch with Door2fy for your technical service needs, coding issues, device repairs, cybersecurity, and more. Reach out to our expert team today!" />
    
        </Helmet>

    <div>
    {/* Import the Navbar */}
    <Navbar toggleCart={toggleCart} cartItemCount={0} /> {/* Set cartItemCount to 0 for empty cart */}
      
      {isCartOpen && (
        <Cart onClose={closeCart} />
      )}
    <div className="contact-us-container">
      <h1 className="contact-us-heading">How Can We Help Today?</h1>
      <p className="contact-us-subheading">
        You can fill the following form to address your issues.
      </p>
      <form className="contact-us-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Contact Number *</label>
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Issue *</label>
          <input
            type="text"
            name="issue"
            value={formData.issue}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Sub-Issue *</label>
          <input
            type="text"
            name="subIssue"
            value={formData.subIssue}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Your Comments (Optional)</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Submit Details</button>
      </form>
    </div>
    <Footer /> 
    </div>
    </>
    
  );
};

export default ContactUs;
