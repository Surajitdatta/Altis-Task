import React from 'react'
import FoodHeader from './FoodHeader';
import "./FoodBrand.css"
import FoodCarosal from './FoodCarosal';
const FoodBrand = () => {
  return (
    <div className='foodHeader'>
        <FoodHeader/>
        <FoodCarosal/>

    </div>
  )
}

export default FoodBrand;