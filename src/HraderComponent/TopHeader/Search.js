import React from 'react';
import './Search.css';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';

const Search = () => {
  return (
    <div className="searchContainer">
      <div className="searchBox">
        <div className="iconAndInput">
          <input
            type="text"
            placeholder="Search Product By Keyword"
            className="searchInput"
          />
          <FaMapMarkerAlt className="locationIcon" />
        </div>
      </div>

      <div className="searchBox">
        <div className="iconAndInput">
          <input
            type="text"
            placeholder="Search Product By Keyword"
            className="searchInput"
          />
          <FaSearch className="searchIcon" />
        </div>
      </div>
    </div>
  );
};

export default Search;
