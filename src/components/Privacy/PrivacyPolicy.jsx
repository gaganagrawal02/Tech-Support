import React, {useState} from 'react';
import './PrivacyPolicy.css'; // Optional for additional styles
import Footer from '../Footer/Footer';
import Cart from '../Cartpage/Cart';
import Navbar from '../Navbar/Navbar';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
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
    <Helmet>
      <title>Door2fy Privacy Policy - Protecting Your Data & Privacy</title>
      <meta name="description" content="Read Door2fy's Privacy Policy to understand how we collect, use, and safeguard your personal information. Your privacy and security are our top priorities."/>
    </Helmet>
     <Navbar toggleCart={toggleCart} cartItemCount={0} /> {/* Set cartItemCount to 0 for empty cart */}
      
      {isCartOpen && (
        <Cart onClose={closeCart} />
      )}
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>

      <section>
        <h2>Information Collection and Use</h2>
        <p>
          This Privacy Policy (sometimes referred to as the "Policy") describes how Door2fy handles personally identifiable information that Door2fy obtains from you while you use Door2fy's services and when you visit the Door2fy website. This policy also governs Door2fy's handling of any personally identifiable data that Door2fy receives from its business partners with permission. The policies of businesses that Door2fy does not own or control are not covered by this policy.
        </p>
        <p>
          By utilizing "Door2fy.com" (also known as "Door2fy"), you consent to the gathering and use of details that comply with this policy. When you create an account on Door2fy, personally identifiable information is gathered by Door2fy.
        </p>
        <p>
          When you browse Door2fy pages, when you utilize specific Door2fy products or services, and when you participate in available promotions, personally identifiable information may be gathered.
        </p>
      </section>

      <section>
        <h2>Log Data</h2>
        <p>
          Similar to several website owners, we gather data (also known as "Log Data") that your browser transmits whenever you visit Door2fy. The Internet Protocol (or "IP") address of your computer, the kind and version of your browser, the pages you visit on our website, the time and date of your visit, how long you spend on those pages, and other statistics could all be included in this log data.
        </p>
        <p>
          Furthermore, we may make use of outside services like Google Analytics to gather, track, and evaluate this data.
        </p>
      </section>

      <section>
        <h2>Third Party Advertising</h2>
        <p>
          When you visit our website, ads from third-party advertising firms and/or ad agencies may be served. These businesses may use data about your visits to this and other websites (but not your name, address, email address, or phone number) to show you adverts for products and services that might be of interest to you. 
        </p>
        <p>
          They might gather anonymous data regarding your usage of our products and services as well as your website visits. Additionally, they might target ads for products and services based on information about your visits to this and other websites.
        </p>
      </section>

      <section>
        <h2>Data Maintenance</h2>
        <p>
          For a duration of ten years, Onsitego's loan service platform will securely and lawfully collect and preserve client information and financial transaction data. Certain exceptional data cases, such as audits and customer complaints, have the potential to be retained for an extended duration.
        </p>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default PrivacyPolicy;
