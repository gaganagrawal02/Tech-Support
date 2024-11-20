import React from 'react';
import './WhyChooseUs.css'; // Importing the CSS file

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us-container">
      <h1 className="heading1">Why Choose Us</h1>
      <div className="values-container">
        <div className="value-item">
          <h2 className="value">10,000
          <span className="plus-sign">+</span>
          </h2>
          
          <p className="subheading1">Retail Stores</p>
        </div>
        <div className="value-item">
          <h2 className="value">
         
            300
            <span className="plus-sign">+</span></h2>

          <p className="subheading1">Brands Covered</p>
        </div>
        <div className="value-item">
          <h2 className="value">80
          <span className="plus-sign">+</span>
          </h2>
         
          <p className="subheading1">Lakh Customers</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
