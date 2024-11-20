import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import './Notification.css'; // Assuming you have a CSS file for styling

const CartNotification = ({ message, onClose }) => {
  return (
    <div className="cart-notification">
      <span>{message}</span>
      <button onClick={onClose} className="close-btn">
        <AiOutlineClose />
      </button>
    </div>
  );
};

export default CartNotification;
