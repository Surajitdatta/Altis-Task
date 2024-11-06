import React from 'react';
import Search from '../TopHeader/Search';
import List from '../TopHeader/List';
import "./Mearge.css";
import Logo from '../DropdownHeader/Logo';
import Dropdown from '../DropdownHeader/Dropdown';
import DesktopDropdown from '../DropdownHeader/DesktopDropdown';


const Merge = () => {
  return (
    <div className='meargeMain'>
      <div className='mergeTop'>
        <div className='searchWrapper'>
          <Search />
        </div>
        <div className='listWrapper'>
          <List />
        </div>
        <div className='dropdownWrapper' id="dropdownDisplay">
          <Dropdown />
        </div>
      </div>


      <div className='mergeBottom'>
        <div className='logoWrapper'>
          <Logo />
        </div>
        <div className='dropdownWrapper'>
          <DesktopDropdown />
        </div>
        <div className='listWrapper' id="listDisplay">
          <List />
        </div>
      </div>
    </div>
  );
}

export default Merge;
