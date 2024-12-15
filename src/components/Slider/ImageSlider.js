
import React, { useState, useEffect } from 'react';
// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css'; 




import './ImageSlider.css'; // Add your styles here

const ImageSlider = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [currentIndex, setCurrentIndex] = useState(0);

  const desktopImages = [
    '/images/Slide1.webp',
    '/images/Slide2.webp',
    '/images/Slide3.webp',
    '/images/zfPGyMMh/Slide4.webp',
  ];

  const mobileImages = [
    '/images/mobilebanner.jpg',
    '/images/mobile2.webp',
    '/images/mobile3.webp',
    '/images/mobile4.webp',
  ];

  const images = isMobile ? mobileImages : desktopImages;

  // Function to automatically move to the next slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images]);

  // Detect screen size changes and update isMobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="slider">
      <img src={images[currentIndex]} alt="slider" className="slider-image" />
    </div>
  );
};

export default ImageSlider;
