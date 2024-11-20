import React from 'react';
import './MobileSignInCard.css';

const MobileSignInCard = ({ closeCard }) => {
  return (
    <div className="mobile-signin-card">
      <div className="card-header">
        <h2>Sign In</h2>
        <button className="close-btn" onClick={closeCard}>
          &times;
        </button>
      </div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="signin-btn">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default MobileSignInCard;


// import React from 'react';
// import { FaMapMarkerAlt} from 'react-icons/fa';
// import { CiSearch } from "react-icons/ci";
// import './LocationSearch.css';


// const LocationSearch = () => {
//   return (
//     <div className="device-care-container">
//     <h1 className="page-heading">Expert care for Your Device</h1>
//     <div className="cylinder-background">
//       <div className="location-search-wrapper">
//         <div className="location-feature">
//           <FaMapMarkerAlt className="location-icon" />
//           <input
//             type="text"
//             className="location-input"
//             placeholder="Select Location"
//           />
//         </div>
//         <div className="divider-line"></div> 
//         <div className="search-feature">
//           <input
//             type="text"
//             className="search-input"
//             placeholder="Search here..."
//           />
//           <CiSearch className="search-icon" />
//         </div>
//       </div>
//     </div>
//   </div>
//   );
// };

// export default LocationSearch;

// // import { HiChevronDown } from "react-icons/hi";



