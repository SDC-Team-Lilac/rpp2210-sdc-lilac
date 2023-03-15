import React from 'react';

const ProductSummary = ( { productDetails } ) => {

  // To-Do: Sync with Christian regarding star rating implementation
  // To-Do: Sync with Christian regarding integration of # reviews, and component linking

  return (
    <div className="overview_product_summary">
      {/* <h3>This is the Product Summary Component!</h3> */}
      <div>
        <span>&#x2B50; &#x2B50; &#x2B50; &#x2B50; &#x2B50; &emsp;</span>
        <span>Read all [#] reviews </span>
      </div><br></br>
      <span>{productDetails.category.toUpperCase()}</span><br></br>
      <span className="product_summary_title"><b>{productDetails.name}</b></span><br></br>
      <span>${productDetails.default_price}</span>
    </div>
  )
}

export default ProductSummary;
