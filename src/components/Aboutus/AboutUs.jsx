import React,{useState} from 'react';
import Navbar from '../Navbar/Navbar'; // Adjust the import path as needed
import './AboutUs.css';
import Cart from '../Cartpage/Cart';
import { Helmet } from 'react-helmet-async';

const AboutUs = () => {
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
      <title>About Us | Door2fy - Your Trusted Partner for Tech Solutions</title>
      <meta name="description" content="Discover Door2fy's mission and values. We provide expert tech solutions for coding issues, cybersecurity, app development, and more. Learn about us today!"/>
    </Helmet>
      <Navbar toggleCart={toggleCart} cartItemCount={0} /> {/* Set cartItemCount to 0 for empty cart */}
      
      {isCartOpen && (
        <Cart onClose={closeCart} />
      )}
      <div className="about-us-container">
        <div className="about-card">
          <h1 className="about-heading">About Us</h1>

          <div className="content-card">
            <h2 className="about-subheading">Who We Are</h2>
            <p className="paragraph">
              Urban Company is a technology platform offering a variety of services at home. Customers use our platform to book services such as beauty treatments, haircuts, massage therapy, cleaning, plumbing, carpentry, appliance repair, painting, etc. These services are delivered in the comfort of their home and at a time of their choosing. We promise our customers a high-quality, standardized, and reliable service experience. To fulfill this promise, we work closely with our hand-picked service partners, enabling them with technology, training, products, tools, financing, insurance, and brand, helping them succeed and deliver on this promise.
              <br /><br />
              Our Vision: Empower millions of professionals worldwide to deliver services at home like never experienced before.
            </p>

            <div className="stats-container">
              <div className="stat">
                <h3>45,000+</h3>
                <p>Trained Professionals</p>
              </div>
              <div className="stat">
                <h3>10 Million+</h3>
                <p>Happy Customers</p>
              </div>
              <div className="stat">
                <h3>231</h3>
                <p>Cities</p>
              </div>
              <div className="stat">
                <h3>4</h3>
                <p>Countries</p>
              </div>
            </div>

            <h2 className="about-subheading">How We Do It</h2>
            <p className="paragraph">
              Urban Company provides a platform that allows skilled and experienced professionals to connect with users looking for specific services. Once on the platform, our matchmaking algorithm identifies professionals who are closest to the users’ requirements and available at the requested time and date.
            </p>
          </div>

          <h2 className="aboutsubheading">Our Leadership Team</h2>
          <div className="leadership-team">
            <div className="leader-card">
              <div className="leader-image"></div> {/* Replace with actual image */}
              <h3>Abhiraj Bhal</h3>
              <p>CEO & Co-founder, Urban Company</p>
              <div className="social-icons">
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-twitter"></i>
              </div>
              <p>
                Abhiraj is responsible for marketing and product growth at Urban Company. When not busy at Urban Company, Abhiraj enjoys immersing himself in interesting experiences be it running marathons, skydiving in Spain, scuba diving in the Andamans, or cooking his wife Urvi's favourite dishes.
              </p>
            </div>

            <div className="leader-card">
              <div className="leader-image"></div> {/* Replace with actual image */}
              <h3>Second Leader</h3>
              <p>CTO & Co-founder, Urban Company</p>
              <div className="social-icons">
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-twitter"></i>
              </div>
              <p>
                This leader is responsible for technology and innovation at Urban Company. He enjoys building scalable platforms and solving complex problems.
              </p>
            </div>

            <div className="leader-card">
              <div className="leader-image"></div> {/* Replace with actual image */}
              <h3>Third Leader</h3>
              <p>CFO, Urban Company</p>
              <div className="social-icons">
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-twitter"></i>
              </div>
              <p>
                This leader handles the financial strategies and growth initiatives at Urban Company. Outside of work, he is passionate about travel and culinary experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
