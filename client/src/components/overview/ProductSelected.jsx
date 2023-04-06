import React, { useState } from 'react';
import ProductSummary from './ProductSummary.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';

const ProductSelected = ( { productDetails, selectedStyle, productStyles, averageStarRating, totalNumberReviews, updateSelectedStyle, updateSelectedProduct, setMyOutfit, setOutfitCards, setProductId, inOutfit, setInOutfit, reviewsRef } ) => {

  return (
    <div className="overview_product_selected">
      <ProductSummary productDetails={productDetails} selectedStyle={selectedStyle} averageStarRating={averageStarRating} totalNumberReviews={totalNumberReviews} reviewsRef={reviewsRef}/>
      <StyleSelector selectedStyle={selectedStyle} productStyles={productStyles} updateSelectedStyle={updateSelectedStyle} />
      <AddToCart productDetails={productDetails} selectedStyle={selectedStyle} productStyles={productStyles} updateSelectedStyle={updateSelectedStyle} updateSelectedProduct={updateSelectedProduct} setMyOutfit={setMyOutfit} setOutfitCards={setOutfitCards} setProductId={setProductId} inOutfit={inOutfit} setInOutfit={setInOutfit} />
    </div>
  )
}

export default ProductSelected;
