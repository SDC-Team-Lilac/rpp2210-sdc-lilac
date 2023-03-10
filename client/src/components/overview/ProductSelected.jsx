import React from 'react';
import ProductSummary from './ProductSummary.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';

const ProductSelected = ( { product, testProductStyle } ) => {

  return (
    <div className="overview_product_selected">
      <h2>This is the Product Selected Component!</h2>
      <ProductSummary product={product} />
      <StyleSelector />
      <AddToCart />
    </div>
  )
}

export default ProductSelected;
