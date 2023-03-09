import React from 'react';
import ProductGallery from './ProductGallery.jsx';
import ProductSelected from './ProductSelected.jsx';
import ProductDetails from './ProductDetails.jsx';

const Overview = () => {

  return (
    <div>
      <h1>This is the Overview Component!</h1>
      <ProductGallery />
      <ProductSelected />
      <ProductDetails />
    </div>
  )
}

export default Overview;
