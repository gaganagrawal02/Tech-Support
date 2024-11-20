import React, { useState }  from 'react';
 // Make sure you have your Navbar component path correct
import './DesktopSupport.css'; // Add your custom styles here
// import { HiChevronDown } from 'react-icons/hi';
import { FaCheck } from 'react-icons/fa';
import Navbar from '../../Navbar/Navbar';
import Cart from '../../Cartpage/Cart';
import Footer from '../../Footer/Footer';
import CartNotification from '../../notification/Notification';
import { Helmet } from 'react-helmet-async';

// 

const DesktopSupport = () => {
  const [activeServiceType, setActiveServiceType] = useState('split');
  const [expandedCard, setExpandedCard] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [notification, setNotification] = useState(null);

  const handleServiceTypeChange = (type) => {
    setActiveServiceType(type);
    setExpandedCard(null); // Reset the expanded card when switching service types
  };

  // const handleExpandClick = (index) => {
  //   setExpandedCard(expandedCard === index ? null : index);
  // };

  const handleAddToCart = (service) => {
    if (cartItems.length === 0) {
      setCartItems([{ ...service, quantity: 1 }]);
      setNotification(`Added to your cart!`); // Set the notification message
      setTimeout(() => setNotification(null), 3000);
    } else {
      
    }
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };
  
    // const handleExpandClick = (index) => {
    //   setExpandedCard(expandedCard === index ? null : index);
    // };
    
    const splitACServices = [
      { name: 'Not sure for the issue other issue', description: 'We handle everything!Selrct this if you are not sure of the issue ', price: 99 },
      { name: 'Display Issue', description: 'Visit charge of Rs 99 will be Wavied off in the final bill.. Spare Parts/ Service cost: Extra', price: 299 },
      { name: 'KeyBoard issue', description: 'Visit charge of Rs 99 will be Wavied off in the final bill.. Spare Parts/ Service cost: Extra', price: 299 },
      { name: 'Touchpad issue', description: 'Visit charge of Rs 99 will be Wavied off in the final bill.. Spare Parts/ Service cost: Extra ', price: 299 },
      { name: 'Charging/Power issue', description: 'Visit charge of Rs 99 will be Wavied off in the final bill.. Spare Parts/ Service cost: Extra ', price: 299 },
      
    ];
    const windowACServices = [
      { name: 'Not sure of the issue Other issue', description: 'We handle everything! Select this if you are not sure of the issue', price: 99 },
      { name: 'Windows 10,11,Licence', description: 'we provide licence for your window PC or Laptop licence validate for 1 year ', price: 99 },
      { name: 'Windows Driver Related issue', description: 'we fix all driver related issue in just few minutes', price: 99 },
      { name: 'MS Office related issue', description: 'We handle everything! Select this if you are not sure of the issue', price: 99 },
      { name: 'Windows Password issue', description: 'We handle everything! Select this if you are not sure of the issue', price: 99 },
    ];
    const services = activeServiceType === 'split' ? splitACServices : windowACServices;

  return (
    <>
      <Helmet>
        <title>Door2fy Desktop Support | Expert Technical Assistance & Solutions</title>
        <meta name="description" content="Get reliable desktop support with Door2fy. Our experts provide quick fixes, troubleshooting, and ongoing maintenance for seamless computer performance." />
      </Helmet>

      <div>
      {/* Import the Navbar */}
      <Navbar toggleCart={toggleCart} cartItemCount={cartItems.length} />

      {/* Main Section */}
      <div className="ac-repair-container">
        {/* Left Side: Image */}
        <div className="ac-repair-image">
          <img src="/images/Desktopimage.svg" alt="AC Repair" /> {/* Replace with your image path */}
        </div>



                                
        {/* Right Side: Text and Button */}
        <div className="ac-repair-content">
     
          <h1>Desktop Service in Delhi Ncr</h1>
          <p>
          Doorstep service in Just 10 minutes.
          </p>
          <button className="get-started-button">Get Started</button>
        </div>
      </div>

                                                     {/* //card Section // */}


                                                     <div class="banner">

</div>                                                                              
        {/* <div className='banner'></div>                                             */}
      <div className="ac-repair-section">
   
      
      {/* Left Side Content */}
      <div className="ac-repair-left">
      
      <h2>Professional Engineer repair your laptop</h2>
      
      <ul className="ac-repair-list">
        <li>
          <span className="bullet-icon"><FaCheck /></span>
          Smooth Speed and  Performance

        </li>
        <li>
          <span className="bullet-icon"><FaCheck /></span>
          All Type of error solver
        </li>
        <li>
          <span className="bullet-icon"><FaCheck /></span>
          Data Protecion
        </li>
        <li>
          <span className="bullet-icon"><FaCheck /></span>
          Afordable prices 
        </li>
      </ul>
     
      <h2>Ask your questions with our expert:</h2>
      <ul className="ac-repair-list">
        <li>
          <span className="bullet-icon"><FaCheck /></span>
          High-Quality Service
        </li>
        <li>
          <span className="bullet-icon"><FaCheck /></span>
          Experienced Laptop Service Engineers
        </li>
        <li>
          <span className="bullet-icon"><FaCheck /></span>
          1-Year warranty spare parts
        </li>
        <li>
          <span className="bullet-icon"><FaCheck /></span>
          Subscription  Plans Available
        </li>
        <li>
          <span className="bullet-icon"><FaCheck /></span>
          7-day warranty on service
        </li>
      </ul>

    </div>

      {/* Right Side Content */}
      <div className="ac-repair-right">
          <h2>Desktop Service & Quick Support</h2>
          <p>Select the type of Errors:</p>
          <div className="ac-services-container">
            <div className="service-type-buttons">
              <button
                className={`service-type-button ${activeServiceType === 'split' ? 'active' : ''}`}
                onClick={() => handleServiceTypeChange('split')}
              >
                Desktop Repair
              </button>
              <button
                className={`service-type-button ${activeServiceType === 'window' ? 'active' : ''}`}
                onClick={() => handleServiceTypeChange('window')}
              >
                Quick Support
              </button>
            </div>

      <div className="service-cards">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="card-left">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
            <div className="card-right">
              <p>₹{service.price}</p>
            <button className="add-button" onClick={() => handleAddToCart(service)}>Add+</button>
              {/* <button className="toggle-btn" onClick={() => handleExpandClick(index)}>
            {expandedCard === index ? <FaChevronUp /> : <FaChevronDown />}
          </button> */}
            </div>
           
            {/* {expandedCard === index && (
              <ul className="service-details">
                <li>Cleaning of AC</li>
                <li>Gas pressure check</li>
                <li>Cleaning of the outdoor unit</li>
                <li>Pre and post service checks</li>
                <li>Cleaning of the area</li>
              </ul>
            )} */}
                {/* {expandedCard === index && (
          <div className="card-details">
            <ul>
              <li><FaCheck className="check-icon" /> Cleaning of AC filters, cooling coil, drain tray, etc.</li>
              <li><FaCheck className="check-icon" /> Gas pressure check.</li>
              <li><FaCheck className="check-icon" /> Cleaning of the outdoor unit with water jet.</li>
              <li><FaCheck className="check-icon" /> Pre and post-service check of AC controls.</li>
            </ul> 
            </div>
        )} */}
          </div>
          
        ))}
        
      </div>
    </div>


</div>


    </div>
    <div className="why-choose-section">
      <h2 className="why-choose-heading">Why Choose Door2fy Desktop Repair Service in Delhi?</h2>
      <div className="why-choose-grid">
        <div className="why-choose-card">
          <img
            src="https://i.postimg.cc/D01Lhs68/sec1.webp"
            alt="Qualified Engineers"
            className="why-choose-image"
          />
          <h3 className="why-choose-card-heading">Qualified Engineers</h3>
          <p className="why-choose-card-subheading">
            In-house Desktop Technicians with 7+ years of experience
          </p>
        </div>
        <div className="why-choose-card">
          <img
            src="https://i.postimg.cc/g22XS1Cw/sec2.webp"
            alt="High-Quality AC Repairing"
            className="why-choose-image"
          />
          <h3 className="why-choose-card-heading">High-Quality Desktop Repairing</h3>
          <p className="why-choose-card-subheading">
            High-Quality Desktop Spares, 1-year warranty on spare parts & 7-day warranty on service
          </p>
        </div>
        <div className="why-choose-card">
          <img
            src="https://i.postimg.cc/bvGG8kNp/sec3.webp"
            alt="Service Expertise"
            className="why-choose-image"
          />
          <h3 className="why-choose-card-heading">Service Expertise</h3>
          <p className="why-choose-card-subheading">
            Trusted by 2 Lakh+ Customers
          </p>
        </div>
      </div>
    </div>
    {notification && (
        <CartNotification
          message={notification}
          onClose={() => setNotification(null)}
        />
      )}
    {isCartOpen && <Cart items={cartItems} onClose={closeCart} />}
    <Footer /> 
    </div>
    </>
  );
};

export default DesktopSupport;

