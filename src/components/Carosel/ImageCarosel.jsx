import React from 'react';
import Slider from 'react-slick';
import { GoArrowLeft,GoArrowRight } from "react-icons/go";

import './ImageCarosel.css'; // Import your custom CSS for styling

const Arrow = ({ className, style, onClick }) => (
    <div
      className={className}
      style={{ ...style, display: 'flex' ,alignItems: 'center', justifyContent: 'center', background: '#fff', borderRadius: '50%', padding: '3px' , }}
      onClick={onClick}
    >
      {className.includes('slick-prev') ? <GoArrowLeft size={18} /> : <GoArrowRight size={18} />}
    </div>
);

const ImageCarosel = () => {
  const settings = {
    dots: false, // Remove dots
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Arrow className="slick-next" />,
    prevArrow: <Arrow className="slick-prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false // Remove dots
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false // Remove dots
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false // Remove dots
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-slide">
          <img src="/images/Crosel1.webp" alt="Slide 1" className="carousel-image" />
        </div>
        <div className="carousel-slide">
          <img src="/images/Crosel2.webp" alt="Slide 2" className="carousel-image" />
        </div>
        <div className="carousel-slide">
          <img src="/images/Crosel3.webp" alt="Slide 3" className="carousel-image" />
        </div>
        <div className="carousel-slide">
          <img src="/images/Crosel4.webp" alt="Slide 4" className="carousel-image" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default ImageCarosel;
