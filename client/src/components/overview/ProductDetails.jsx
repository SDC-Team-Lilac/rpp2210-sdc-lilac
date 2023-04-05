import React from 'react';
import ProductInformation from './ProductInformation.jsx';
import ProductFeatures from './ProductFeatures.jsx';

const ProductDetails = ( { slogan, description, features } ) => {

  return (
    <div className="overview_product_details">
      <ProductInformation slogan={slogan} description={description}/>
      <div className="product_details_separator"></div>
      <ProductFeatures features={features}/>
    </div>
  )
}

export default ProductDetails;
