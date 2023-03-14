import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Overview from './components/overview/Overview.jsx'
import QA from './components/qa/QA.jsx'
import RelatedProducts from './components/relatedProducts/RelatedProducts.jsx'
import Reviews from './components/reviews/Reviews.jsx'

const axios = require('axios');

const domNode = document.getElementById('root');
const root = createRoot(domNode);

const App = () => {

  // Change this later to no longer hard-code starting productId
  const [productId, setProductId] = useState(71697);
  const [styleId, setStyleId] = useState(null);
  const [averageStarRating, setAverageStarRating] = useState(null);
  const [totalNumberReviews, setTotalNumberReviews] = useState(null);
  const [myOutfit, setMyOutfit] = useState({});
  const [productFeatures, setProductFeatures] = useState([]);
  const [realtedProducts, setRelatedProducts] = useState([]);
  const [productDefaultImg, setProductDefaultImg] = useState('');

  // To-Do: Add function to start initial rendering of app in real-time ***
  const updateSelectedProduct = (product_id) => {
    axios.get(`/products/${product_id}`, {
      params: {
        product_id: product_id
      }
    })
      .then(productData => {
        setProductId(productData.data.id);
        setProductFeatures(productData.data.features);
        axios.get(`/products/${product_id}/related`, {
          params: {
            product_id: product_id
          }
        })
      })
      .then(realtedProductsData => {
        setRelatedProducts(realtedProductsData.data);
      })
      .catch(error => {
        console.error('Error in updateSelectedProduct: ', error);
      })
  }

  return (
    <div>
      Hello World!
      <Overview productId={productId} updateSelectedProduct={updateSelectedProduct}/>
      <RelatedProducts productId={productId}/>
      <QA productId={productId}/>
      <Reviews productId={productId}/>
    </div>
  );
};

root.render(<App />);