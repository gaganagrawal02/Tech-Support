
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
    'https://i.postimg.cc/mZC5k91Z/Slide1.webp',
    'https://i.postimg.cc/ZKrnwwBk/Slide2.webp',
    'https://i.postimg.cc/kgq4zWK2/Slide3.webp',
    'https://i.postimg.cc/zfPGyMMh/Slide4.webp',
  ];

  const mobileImages = [
    'https://i.postimg.cc/WpCgBqfj/mobilebanner.jpg',
    'https://i.postimg.cc/d0XJsCkm/mobile2.webp',
    'https://i.postimg.cc/k4bqB5Wr/mobile3.webp',
    'https://i.postimg.cc/d3cvdK9h/mobile4.webp',
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
