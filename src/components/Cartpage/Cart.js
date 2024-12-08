import React from 'react';
import './Cart.css';
import { useNavigate } from 'react-router-dom';
const Cart = ({ items = [], onClose }) => {
  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

 

  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate('/signup');
  };

  
  return (
    
    <div className="cart-container">
      <div className="cart-header">
        <h2>Items in your cart</h2>
        <button className="close-icon" onClick={onClose}>X</button>
      </div>

      {items.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty!</p>
          <p>You have not added any products to your cart so far.</p>
        </div>
      ) : (
        <div className="items-container">
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-image">
                <img src="" alt="" />
              </div>
              <div className="item-details">
              <button className="close-symbol">X</button>
                <h3>{item.name}</h3>
                <p>{item.quantity} x AC Jet Service</p>
                <p>₹{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="total-container">
        <p>Total: ₹{calculateTotal()}</p>
      </div>

      <button className="checkout-button" onClick={handleCheckout}>
        CHECKOUT
      </button>
    </div>
  );
};

export default Cart;
