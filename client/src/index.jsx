import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Overview from './components/overview/Overview.jsx'
import QA from './components/qa/QA.jsx'
import RelatedProducts from './components/relatedProducts/RelatedProducts.jsx'
import Reviews from './components/reviews/Reviews.jsx'
import { ProductListInfo } from './components/relatedProducts/RelatedProductRequests.jsx';

const axios = require('axios');

const domNode = document.getElementById('root');
const root = createRoot(domNode);

const App = () => {

  // Change this later to no longer hard-code starting productId
  const [productId, setProductId] = useState(71697);
  const [styleId, setStyleId] = useState(null);
  const [averageStarRating, setAverageStarRating] = useState(null);
  const [totalNumberReviews, setTotalNumberReviews] = useState(null);
  const [myOutfit, setMyOutfit] = useState({outfits: []});
  const [productFeatures, setProductFeatures] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [productDefaultImg, setProductDefaultImg] = useState('');
  const [productCards, setProductCards] = useState([]);


  useEffect(() => {
    updateSelectedProduct(71697);
  }, [])

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
        return axios.get(`/products/${product_id}/related`, {
          params: {
            product_id: product_id
          }
        })
      })
      .then(relatedProductsData => {
        setRelatedProducts(relatedProductsData.data);
        return ProductListInfo(relatedProductsData.data, setProductCards);
      })
      .then((cards) => {
        console.log('Yay');
        // setProductCards(cards);
        // console.log('results? : ', cards);
      })
      .catch(error => {
        console.error('Error in updateSelectedProduct: ', error);
      })
  }

  const updateAverageRating = (averageRating) => {
    setAverageStarRating(averageRating)
  }

  return (
    <div>
      Hello World!
      <Overview productId={productId} updateSelectedProduct={updateSelectedProduct}/>
      <RelatedProducts productId={productId} productFeatures={productFeatures} myOutfit={myOutfit} productCards={productCards}/>
      <QA productId={productId}/>
      <Reviews productId={productId} updateAverageRating={updateAverageRating}/>
    </div>
  );
};

root.render(<App />);