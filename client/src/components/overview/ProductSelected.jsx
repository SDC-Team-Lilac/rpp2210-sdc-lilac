import React, { useState } from 'react';
import ProductSummary from './ProductSummary.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';

const ProductSelected = ( { productDetails, selectedStyle, productStyles, averageStarRating, totalNumberReviews, updateSelectedStyle } ) => {

  // console.log('Product Details in ProductSelected: ', productDetails);
  // console.log('Product SelectedStyle in ProductSelected: ', selectedStyle);
  // console.log('Product Styles in ProductSelected: ', productStyles);

  return (
    <div className="overview_product_selected">
      {/* <h2>This is the Product Selected Component!</h2> */}
      <ProductSummary productDetails={productDetails} selectedStyle={selectedStyle} averageStarRating={averageStarRating} totalNumberReviews={totalNumberReviews}/>
      <StyleSelector selectedStyle={selectedStyle} productStyles={productStyles} updateSelectedStyle={updateSelectedStyle} />
      <AddToCart selectedStyle={selectedStyle} productStyles={productStyles} updateSelectedStyle={updateSelectedStyle}/>
    </div>
  )
}

export default ProductSelected;
