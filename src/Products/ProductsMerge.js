import React from 'react'
import ProductsHeader from './ProductsHeader';
import Products from './Products';
import "./ProductsMerge.css"

const ProductsMerge = () => {
  return (
    <div className='productsMain'>
        <ProductsHeader/>
        <Products/>
    </div>
  )
}

export default ProductsMerge;