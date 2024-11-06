import React, { useState } from 'react';
import './Dropdown.css';
import data from '../jsonFile/Api.json';// Replace with the correct path to your logo image

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {logo} = data[0]

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      {/* Logo on the left */}
      <div className="dropdown-logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Navigation icon for mobile */}
      <div className="nav-icon" onClick={toggleMenu}>
        {isOpen ? '✖' : '☰'}
      </div>

      {/* Overlay for mobile view */}
      <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={toggleMenu}></div>

      {/* Sidebar that acts as a horizontal menu on desktop */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><b>DOGS</b></li>
          <li><b>CATS</b></li>
          <li><b>SMALL ANIMALS</b></li>
          <li><b>BRAND</b></li>
          <li><b>SHOP BY BREED</b></li>
          <li><b>BEST SELLING</b></li>
          <li><b>NEW ARRIVALS</b></li>
          <li><b>BLOG</b></li>
          <li><b>CONTACT US</b></li>
          <li><b>HOME</b></li>
          <li><b>STORES LOCATOR</b></li>
          <li><b>OFFER</b></li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
