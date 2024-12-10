import React from 'react';
import { FaUser, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import MobileSignInCard from '../mobilecard/MobileCard';


const Navbar = ({ toggleCart, cartItemCount }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSignInCardOpen, setIsSignInCardOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('menu-open', !isMenuOpen);
  };

  const toggleSignInCard = () => {
    if (isMobile) {
      setIsSignInCardOpen(!isSignInCardOpen);
    }
  };

  const closeSignInCard = () => {
    setIsSignInCardOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className="navbar-logo">
          <Link to="/" className="navbar-logo">
            <img src='' alt=''></img>
          </Link>
        </div>
      </div>
      <div></div>
      <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <li>
        <Link to="/windows-repair" className="navbar-lines">Devices and Plans </Link></li>
        <li><Link to="/desktop-repair"className="navbar-lines" >Desktop Support</Link></li>
        <li> <Link to="/upgrade"className="navbar-lines" >Subscription</Link></li>
        <li> <Link to="/codingIssue"className="navbar-lines" >Coding issue</Link></li>
      </ul>
      <div className="navbar-right">
        <div className="signin-container" onClick={toggleSignInCard}>
          {isMobile ? (
            <FaUser className="signin-icon" />
          ) : (
            <Link to="/signup" className="signinclass">
              <FaUser className="signin-icon" />
              <span className="signin-text">Sign Up</span>
            </Link>
          )}
        </div>
        <div className="cart-icon-wrapper">
          <FiShoppingCart className="cart-icon" onClick={toggleCart} />
          {cartItemCount > 0 && (
            <span className="cart-count">{cartItemCount}</span>
          )}
        </div>
      </div>
    
      {isSignInCardOpen && isMobile && <MobileSignInCard closeCard={closeSignInCard} />}
    </nav>
  );
};

export default Navbar;
