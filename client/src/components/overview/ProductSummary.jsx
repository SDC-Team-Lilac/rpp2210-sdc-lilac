import React, { useState, useEffect, useRef } from 'react';
import StarRating from '../reviews/StarRating.jsx';

const ProductSummary = ( { productDetails, selectedStyle, averageStarRating, totalNumberReviews, reviewsRef } ) => {

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

  const handleTotalReviewsClick = (e) => {
    e.preventDefault();
    reviewsRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="overview_product_summary">
      {totalNumberReviews > 0 ? <div className="overview_product_rating">
        <StarRating rating={averageStarRating}/>
        <span className="overview_total_reviews" onClick={handleTotalReviewsClick}>Read all {totalNumberReviews} reviews</span></div> : <div className="overview_product_rating_empty"></div>}
      <br></br>
      <span >{productDetails.category.toUpperCase()}</span><br></br>
      <span className="product_summary_title" data-testid="productTitle"><b>{productDetails.name}</b></span><br></br>
      {productPrice}
    </div>
  )
}

export default ProductSummary;
