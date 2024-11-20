import React, { useState } from "react";
import "./Register.css"; // Import CSS for styling
import Navbar from "../Navbar/Navbar";
import Cart from "../Cartpage/Cart";
import Footer from "../Footer/Footer";

const RegisterPage = () => {
  const [homeService, setHomeService] = useState("");
  const [gender, setGender] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <Navbar toggleCart={toggleCart} cartItemCount={0} /> {/* Set cartItemCount to 0 for empty cart */}
      {isCartOpen && <Cart onClose={closeCart} />}
      
      <div className="register-container">
        <div className="register-form">
          <h1>Share Your Details</h1>
          <div className="underline"></div>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Name" className="input-box" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Mobile No" className="input-box" />
            </div>

            {/* Dropdown for Select City */}
            <div className="form-group">
              <select className="input-box">
                <option value="">Select City</option>
                <option value="New Delhi">New Delhi</option>
                <option value="Noida">Noida</option>
                <option value="Ghaziabad">Ghaziabad</option>
              </select>
            </div>

            {/* Dropdown for What is your profession */}
            <div className="form-group">
              <select className="input-box">
                <option value="">What is your profession</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Businessman">Businessman</option>
                <option value="Doctor">Doctor</option>
                <option value="Teacher">Teacher</option>
              </select>
            </div>

            {/* Dropdown for Year of Profession */}
            <div className="form-group">
              <select className="input-box">
                <option value="">Year of Profession</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>

            <h2>Are you comfortable with home service?</h2>
            <div className="bullet-options">
  <label>
    <input
      type="radio"
      name="homeService"
      value="Yes"
      checked={homeService === "Yes"}
      onChange={() => setHomeService("Yes")}
      id="homeServiceYes"
    />
    <span className={`circle ${homeService === "Yes" ? "selected" : ""}`}></span>
    <span className="text">Yes</span>
  </label>
  <label>
    <input
      type="radio"
      name="homeService"
      value="No"
      checked={homeService === "No"}
      onChange={() => setHomeService("No")}
      id="homeServiceNo"
    />
    <span className={`circle ${homeService === "No" ? "selected" : ""}`}></span>
    <span className="text">No</span>
  </label>
</div>
            <h2>Gender</h2>
            <div className="bullet-options">
  <label>
    <input
      type="radio"
      name="gender"
      value="Male"
      checked={gender === "Male"}
      onChange={() => setGender("Male")}
    />
    <span className={`circle ${gender === "Male" ? "selected" : ""}`}></span>
    <span className="text">Male</span>
  </label>
  <label>
    <input
      type="radio"
      name="gender"
      value="Female"
      checked={gender === "Female"}
      onChange={() => setGender("Female")}
    />
    <span className={`circle ${gender === "Female" ? "selected" : ""}`}></span>
    <span className="text">Female</span>
  </label>
</div>

            <div className="form-group">
              <textarea placeholder="Comments" className="input-box" />
            </div>

            <button type="submit" className="submit-btn">
              Get in touch
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterPage;
