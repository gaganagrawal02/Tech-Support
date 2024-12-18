import React from "react";
import "./ThankuPage.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet-async";

const ThankYouPage = () => {
  return (
    <>
        <Helmet>
      <title>ThankuPage | Tech Support</title>
      <meta name="description" content="Door2fy offers expert tech services for coding, MacBook, desktop, printer, and server issues. Fast, reliable, and professional solutions at your doorstep." />
    </Helmet>
    <Navbar/>
    <div className="thankyou-container">
      {/* Checkmark Icon */}
      <div className="icon-checkmark">
        <span>✅</span>
      </div>

      {/* Main Heading */}
      <h1 className="thankyou-heading">
        Thank you for your purchase.
      </h1>

      {/* Instructions */}
      <p className="thankyou-instructions">
        You're all set, watch out your email for further instructions to start experiencing real growth.
      </p>

      {/* Updates Section */}
      <p className="updates-heading">For Further Updates to Masterclass</p>
      <div className="whatsapp-button">
        <a
          href="https://chat.whatsapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          &#128242; JOIN OUR PRIVATE WHATSAPP GROUP
        </a>
      </div>

      {/* Joining Details */}
      <p className="joining-details">
        Joining details will be shared in the group, don’t miss it
      </p>

      {/* Masterclass Note */}
      <p className="masterclass-note">
        <strong>
          Also don’t miss the masterclass, we don’t offer replays or recordings since it is best experienced LIVE.
        </strong>
      </p>
    </div>
    <Footer/>
    </>
  );
};


export default ThankYouPage;
