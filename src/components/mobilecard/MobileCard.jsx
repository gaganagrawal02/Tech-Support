import React from 'react';
import { FaUser, FaChevronRight } from 'react-icons/fa';
import './MobileCard.css';
import { Link } from 'react-router-dom';
const MobileSignInCard = ({ closeCard }) => {
  return (
    <div className="mobile-signin-card">
      <div className="card-header">
        <FaUser className="signin-icon" />
        <span className="guest-text">Hi Guest</span>
        <span className="close-icon" onClick={closeCard}>×</span>
      </div>
      <div className="card-content">
        <div className="card-item">
      <Link to="/signpage" className="signinclass">

          <span>Sign In</span>
          <FaChevronRight />
          </Link>
        </div>
        <div className="underline"></div>
        <div className="card-item">
          <FaUser />
          <span>My Plan</span>
          <FaChevronRight />
        </div>
        <div className="underline"></div>
        <div className="card-item">
          <FaUser />
          <span>Activation Plan</span>
          <FaChevronRight />
        </div>
        <div className="underline"></div>
        <div className="card-item">
          <FaUser />
          <span>My Profile</span>
          <FaChevronRight />
        </div>
        <div className="underline"></div>
        <div className="card-item">
          <FaUser />
          <span>My Requests</span>
          <FaChevronRight />
        </div>
        <div className="underline"></div>
        <div className="card-item">
          <FaUser />
          <span>Orders and Bookings</span>
          <FaChevronRight />
        </div>
      </div>
    </div>
  );
};

export default MobileSignInCard;
