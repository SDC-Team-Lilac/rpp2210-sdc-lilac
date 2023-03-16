import React from 'react';
import ProductInformation from './ProductInformation.jsx';
import ProductFeatures from './ProductFeatures.jsx';

const ProductDetails = ( { slogan, description, features } ) => {
  // console.log('Features in productDetails: ', features);

  return (
    <div className="overview_product_details">
      {/* <h2>This is the Product Details Component!</h2> */}
      <ProductInformation slogan={slogan} description={description}/>
      <ProductFeatures features={features}/>
    </div>
  )
}

export default ProductDetails;
