import React from 'react';
import ProductSummary from './ProductSummary.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';

const ProductSelected = () => {

  return (
    <div>
      <h2>This is the Product Selected Component!</h2>
      <ProductSummary />
      <StyleSelector />
      <AddToCart />
    </div>
  )
}

export default ProductSelected;
