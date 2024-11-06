import React from 'react';
import './List.css';
import { FaComments, FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';

const List = () => {
  return (
    <div className="header-list">
      <div className="list-item">
        <FaComments className="icon" />
        <span>Support</span>
      </div>
      <div className="list-item">
        <FaUser className="icon" />
        <span>NAME</span>
      </div>
      <div className="list-item">
        <FaHeart className="icon" />
        <span>Wishlist</span>
      </div>
      <div className="list-item">
        <FaShoppingCart className="icon"/><sup>2</sup>
       
        {/* <div className="cart-badge">2</div> */}
      </div>
    </div>
  );
};

export default List;
