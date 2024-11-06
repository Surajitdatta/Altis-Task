import React from 'react'
import CategoryCarosal from './CategoryCarosal'
import CategoryHeader from './CategoryHeader'

const CategoryMain = () => {
  return (
    
        <div className='productsMain'>
          <CategoryHeader/>
          {/* <CategoryHeader/> */}
          <CategoryCarosal/>
        </div>
   
  )
}

export default CategoryMain