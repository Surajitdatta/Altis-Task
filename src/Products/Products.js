import React from 'react';
import "./Products.css";
import data from "./Products.json";

const Products = () => {
  return (
    <div className='productsItem'>
      {data.map((v, i) => (
        <div key={i} className='productItem'>
          <div className='productStock'>
            {!v.stock && <span>Out Of Stock</span>}
          </div>
          <div className='productImage'>
            <img src={v.image} alt={v.title} height="200px" width="100%" />
          </div>
          <div className='productCardBottom'>
            <div className='productRating'>
              {/* Assuming a rating value from the data, add stars based on the rating */}
              {'★'.repeat(v.rating) + '☆'.repeat(5 - v.rating)}
            </div>
            <div className='productTitle'>{v.title}</div>
            <div className='productPrice'>₹{v.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
