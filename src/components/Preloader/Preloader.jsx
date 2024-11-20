import React, { useEffect, useState } from 'react';
import './Preloader.css'; // Import the CSS file for styling

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  if (!loading) {
    return null; // Hide preloader if not loading
  }

  return (
    <div className="preloader">
      <div className="preloader-content">
        <img src="https://i.postimg.cc/PrBs9HDN/Preloader.png" alt="Logo" className="preloader-logo" />
        <div className="line-loader"></div>
      </div>
    </div>
  );
};

export default Preloader;
