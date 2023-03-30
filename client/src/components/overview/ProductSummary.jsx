import React, { useState } from 'react';
import StarRating from '../reviews/StarRating.jsx';

const ProductSummary = ( { productDetails, selectedStyle, averageStarRating, totalNumberReviews } ) => {

  // console.log('averageStarRating: ', averageStarRating);
  // To-Do: Sync with Christian regarding star rating implementation
  // To-Do: Sync with Christian regarding integration of # reviews, and component linking

  let productPrice;
  if (!selectedStyle.sale_price) {
    productPrice = <span>${selectedStyle.original_price}</span>
  } else {
    productPrice =
      <div>
        <span className="product_sale_price" data-testid="product_sale_price"> ${selectedStyle.sale_price}&ensp;</span>
        <span><s>${selectedStyle.original_price}</s></span>
      </div>
  }

  return (
    <div className="overview_product_summary">
      {/* <h3>This is the Product Summary Component!</h3> */}
      <div>
        {averageStarRating !== null ? <StarRating rating={averageStarRating}/> : null}
        <span>Read all {totalNumberReviews} reviews</span>
      </div><br></br>
      <span >{productDetails.category.toUpperCase()}</span><br></br>
      <span className="product_summary_title" data-testid="productTitle"><b>{productDetails.name}</b></span><br></br>
      {productPrice}
    </div>
  )
}

export default ProductSummary;
