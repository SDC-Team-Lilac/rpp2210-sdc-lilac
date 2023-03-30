// import * as React from 'react';
import React, { useState, useEffect } from 'react';
import ProductGallery from './ProductGallery.jsx';
import ProductSelected from './ProductSelected.jsx';
import ProductDetails from './ProductDetails.jsx';
const axios = require('axios');

const Overview = ( { productId, styleId, averageStarRating, totalNumberReviews, productFeatures } ) => {

  // console.log('Product ID in Overview: ', productId);

  const [productDetails, setProductDetails] = useState({id: null, name: '', slogan: '', description: '', category: '', default_price: '', features: []});
  const [productStyles, setProductStyles] = useState([{name: '', photos: [{thumbnail_url: '', url: ''}]}]);
  const [selectedStyle, setSelectedStyle] = useState({name: '', photos: [{thumbnail_url: '', url: ''}], skus: {null: {quantity: null, size: null}} });

  useEffect(() => {
    console.log('Overview Rendering!!!!!!!');
    getProductDetails(productId);
    setProductStylesDetails(productId);
  }, [productId]);

  const getProductDetails = (product_id) => {
    axios.get(`/products/${product_id}`)
      .then(productDetailsData => {
        setProductDetails(productDetailsData.data);
      })
      .catch(error => {
        console.error('Error getting product details in Overview component');
      });
  };

  const setProductStylesDetails = (product_id) => {
    axios.get(`/products/${product_id}/styles`)
      .then(productStylesData => {
        setProductStyles(productStylesData.data.results);
        setSelectedStyle(productStylesData.data.results[0]);
      })
      .catch(error => {
        console.error('Error getting product styles in Overview component');
      });
  };

  const updateSelectedStyle = (e) => {
    e.preventDefault();
    setSelectedStyle(productStyles[e.target.id]);
  }

  return (
    <div id="overview">
      <div id="overview_top">
        <ProductGallery productPhotos={selectedStyle.photos} productName={productDetails.name} styleName={selectedStyle.name}/>
        <ProductSelected productDetails={productDetails} selectedStyle={selectedStyle} productStyles={productStyles} averageStarRating={averageStarRating} totalNumberReviews={totalNumberReviews} updateSelectedStyle={updateSelectedStyle} />
      </div>
      {productDetails.features.length > 0 ? <ProductDetails slogan={productDetails.slogan} description={productDetails.description} features={productDetails.features}/> : null}
    </div>
  );
}

export default Overview;
