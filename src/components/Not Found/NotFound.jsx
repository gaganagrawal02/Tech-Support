import React from 'react';
import './NotFound.css'; // For styles
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const NotFound = () => {
    
  return (
    <>
    <Navbar/>
    <div className="not-found-container">
      <div className="not-found-left">
        <img 
          src="/images/404.svg" 
          alt="Repair Man" 
          className="not-found-image"
        />
      </div>
      <div className="not-found-right">
        <h1>404 Page Not Found!</h1>
        <p>
          Uh oh, we can’t seem to find the page you’re looking for.<br />
          Try going back to the previous page
        </p>
        <p>
          or visit home page <a href="/">here</a>
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default NotFound;
