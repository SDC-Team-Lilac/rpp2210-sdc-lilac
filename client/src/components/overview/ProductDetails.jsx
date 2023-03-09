import React from 'react';
import ProductInformation from './ProductInformation.jsx';
import ProductFeatures from './ProductFeatures.jsx';

const ProductDetails = () => {

  return (
    <div>
      <h2>This is the Product Details Component!</h2>
      <ProductInformation />
      <ProductFeatures />
    </div>
  )
}

export default ProductDetails;
