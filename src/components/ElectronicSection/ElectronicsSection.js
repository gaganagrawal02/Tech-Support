import React from 'react';
import './ElectronicsSection.css';
import { useNavigate } from 'react-router-dom';
// Sample data for electronics images and text


const ElectronicsSection = () => {
  const navigate = useNavigate();
  const handleImageClick = (link) => {
    navigate(link); // Navigate to the specific link when the image is clicked
  };
  const electronicsData = [
    { id: 1,  imgSrc: '/images/1.png', text: 'Macbook Support',link: '/macbook-repair' } ,
    { imgSrc: '/images/4.png', text: 'Laptop Support', link: '/laptop-repair'  },
    { imgSrc: '/images/3.png', text: 'Desktop suppport', link: '/desktop-repair' },
    { imgSrc: '/images/2.png', text: 'Printer Support', link: '/printer-repair' },
    { imgSrc: '/images/5.png', text: 'Subscription', link: '/upgrade' },
    { imgSrc: '/images/1.png', text: 'Coding Issue', link: '/codingIssue' },
  ];
  return (
    
    <div className="heading-electronic">
    <h1>Explore Our Services</h1>
    <div className="electronics-section">
      <div className="electronics-card">
        {electronicsData.map((item, index) => (
          <div className="electronics-item" key={index} onClick={() => handleImageClick(item.link)}>
            <div className="electronics-image-container">
              <img src={item.imgSrc} alt="" className="electronics-image" />
            </div>
            <div className="electronics-text">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ElectronicsSection;
