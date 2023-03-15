import React from 'react';
import ProductSummary from './ProductSummary.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';

const ProductSelected = ( { productDetails, selectedStyle, productStyles, updateSelectedStyle } ) => {

  // console.log('Product in ProductSelected: ', product);
  // console.log('Test Product Style in ProductSelected: ', testProductStyle);
  // console.log('Test style options in ProductSelected: ', testProductStyleOptions);

  return (
    <div className="overview_product_selected">
      <h2>This is the Product Selected Component!</h2>
      <ProductSummary productDetails={productDetails}/>
      <StyleSelector selectedStyle={selectedStyle} />
      <AddToCart selectedStyle={selectedStyle} productStyles={productStyles} updateSelectedStyle={updateSelectedStyle}/>
    </div>
  )
}

export default ProductSelected;
