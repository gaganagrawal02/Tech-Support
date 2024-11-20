import React,{useState} from 'react';
import './TermsOfUse.css'; // Import the CSS file for styles
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Cart from '../Cartpage/Cart';
import { Helmet } from 'react-helmet-async';

const TermsOfUse = () => {
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
      <title>Door2fy Terms of Service - Service Agreement & Policies</title>
      <meta name="description" content="Read Door2fy's Terms of Service to understand our service agreements, policies, and user responsibilities. Your guide to our service terms and conditions." />
    </Helmet>
 <Navbar toggleCart={toggleCart} cartItemCount={0} /> {/* Set cartItemCount to 0 for empty cart */}
      
      {isCartOpen && (
        <Cart onClose={closeCart} />
      )}
    <div className="terms-container">
      <h1>Terms of Use</h1>

      <section className="terms-section">
        <h2>DEFINITIONS</h2>
        <p>
          Welcome to www.Door2fy.com website (the 'Site') operated by Fastigo technology pvt ltd (“Door2fy”).
          Door2fy provides its services to you subject to the following conditions. Before you may use the Site,
          you must read and accept all of the terms and conditions in, and linked to, this Terms of Use ("ToU") and the linked Privacy Policy. 
          We strongly recommend that, as you read this ToU, you also access and read the linked information, since it is incorporated into and hereby made part of this ToU. 
          This ToU is effective upon acceptance. Use of any functionality of the Site constitutes acceptance of this ToU. 
          If this ToU conflicts with any other documents, the ToU will control for the purposes of usage of the Site. 
          If you do not agree to be bound by this ToU and the Privacy Policy, you may not use the Site in any way. 
          Be sure to return to this page periodically to review the most current version of the ToU. 
          We reserve the right, at any time, at our sole discretion, to change or otherwise modify the TOU without prior notice, 
          and your continued access or use of this Site signifies your acceptance of the updated or modified TOU.
        </p>
      </section>

      <section className="terms-section">
        <h2>DESCRIPTION OF SERVICES</h2>
        <p>
          In the Site, Door2fy provides users with access to information primarily about Business Support Services for Electronic goods including,
          but not restricted to, Warranties and related services (the 'Service'). You are responsible for obtaining access to the Site,
          and that access may involve third-party fee (such as, but not limited to, Internet service provider or airtime charges).
          In addition, you must provide and are responsible for all equipment necessary to access the Site. 
          By making use of this site, and furnishing your personal/contact details, 
          you hereby agree that you are interested in availing and purchasing the services that you have selected. 
          You hereby agree that Door2fy may contact you either electronically or through phone, 
          to understand your interest in the selected products and services and to fulfill your demand. 
          You also agree that Door2fy reserves the right to make your details available to its affiliates and partners and you may be contacted by the affiliates and partners for information and for sales through email,
          telephone and/or sms. You agree to receive promotional materials and/or special offers from Door2fy through email or sms.
        </p>
      </section>

      <section className="terms-section">
        <h2>LICENSE AND SITE ACCESS</h2>
        <p>
          Door2fy grants you a limited license to access and make personal use of the Site and the Service.
          This license does not include any downloading or copying of any kind of information for the benefit of another individual,
          vendor or any other third party; caching, unauthorized hypertext links to the Site and the framing of any Content available through the Site uploading,
          posting, or transmitting any content that you do not have a right to make available (such as the intellectual property of another party); 
          uploading, posting, or transmitting any material that contains software viruses or any other computer code, files or programs designed to interrupt,
          destroy or limit the functionality of any computer software or hardware or telecommunications equipment; any action that imposes or may impose
          (in Door2fy’s sole discretion) an unreasonable or disproportionately large load on Door2fy's infrastructure; or any use of data mining,
          robots, or similar data gathering and extraction tools. You may not bypass any measures used by Door2fy to prevent or restrict access to the Site.
          Any unauthorized use by you shall terminate the permission or license granted to you by Door2fy. By using the Site you agree not to: 
          (i) use this Site or its contents for any commercial purpose; (ii) make any speculative, false, or fraudulent transaction or any transaction in anticipation of demand; 
          (iii) access, monitor or copy any content or information of this Site using any robot, spider, scraper or other automated means or any manual process for any purpose without our express written permission; 
          (iv) violate the restrictions in any robot exclusion headers on this Site or bypass or circumvent other measures employed to prevent or limit access to this Site; 
          (v) take any action that imposes, or may impose, in our discretion, an unreasonable or disproportionately large load on our infrastructure; 
          (vi) deep-link to any portion of this Site (including, without limitation, the purchase path for any service) for any purpose without our express written permission; or 
          (vii) 'frame', 'mirror' or otherwise incorporate any part of this Site into any other website without our prior written authorization.
        </p>
      </section>

      <section className="terms-section">
        <h2>ELIGIBILITY</h2>
        <p>
          The Service is not available to minors under the age of 18 or to any users suspended or removed from the system by Onsite for any reason.
          Users may not have more than one active account. Additionally, users are prohibited from selling, trading, 
          or otherwise transferring their accounts to another party. If you do not qualify, 
          you may not use the Service or the Site.
        </p>
      </section>
  
    </div>
    <Footer /> 
    </>
  );
};

export default TermsOfUse;
