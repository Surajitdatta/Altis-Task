import React from 'react'
import data from "../jsonFile/Api.json"
import "./Logo.css"
const Logo = () => {
    const {logo} = data[0]
  return (
    <div className='logo'>
        <img
          src={logo}
          width="110px"
          height="56px"
        
        />

    </div>
  )
}

export default Logo