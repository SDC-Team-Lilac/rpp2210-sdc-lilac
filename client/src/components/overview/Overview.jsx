import React from 'react';
import ProductGallery from './ProductGallery.jsx';
import ProductSelected from './ProductSelected.jsx';
import ProductDetails from './ProductDetails.jsx';

const Overview = () => {

  return (
    <div id="overview">
      <h1>This is the Overview Component!</h1>
      <div id="overview_top">
        <ProductGallery />
        <ProductSelected />
      </div>
      <ProductDetails />
    </div>
  )
}

export default Overview;
