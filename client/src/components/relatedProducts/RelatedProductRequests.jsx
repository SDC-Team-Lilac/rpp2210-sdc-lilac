import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import { RatingCalculator } from './helperFunctions.jsx';
import { XButton, StarButton, OnCardClick } from './CardButtons.jsx';
import ComparisonModalList from './ComparisonModalList.jsx';
import CardStructure from './CardStructure.jsx';

const server = 'http://localhost:3000'

var ProductListInfo = (relatedProducts = [], setRelatedProductFeatures, productFeatures, setRelatedProductName, setProductId, updateSelectedProduct, productId, setProductCards) => {
  const list = relatedProducts.map((product) => {
    product.rating = RatingCalculator(product.rating);
    return <CardStructure product={product} setRelatedProductName={setRelatedProductName} setRelatedProductFeatures={setRelatedProductFeatures} listName={'product'} currentProductFeatures={productFeatures} relatedProductId={product.productId} setProductId={setProductId} updateSelectedProduct={updateSelectedProduct}/>
  })
  setProductCards(list);
  return;
}

var OutfitListInfo = (setOutfitCards, setProductId, productId, myOutfit, setMyOutfit, updateSelectedProduct, inOutfit, setInOutfit, outfitCards) => {
  const list = myOutfit.map((outfit) => {
    if (typeof outfit.rating === 'object') {
      outfit.rating = RatingCalculator(outfit.rating);
    }
    return <CardStructure product={outfit} listName={'outfit'} currentProductId={productId} setProductId={setProductId} setMyOutfit={setMyOutfit} updateSelectedProduct={updateSelectedProduct} setOutfitCards={setOutfitCards} OutfitListInfo={OutfitListInfo} inOutfit={inOutfit} setInOutfit={setInOutfit} myOutfit={myOutfit}/>
  })
  setOutfitCards(list);
  return;
}

const ComparisonDetails = (currentProductFeatures, product_id, setRelatedProductFeatures) => {
  if (product_id === null) {
    return;
  }
  axios.get(`/products/${product_id}`, {
    params: {
      'product_id': product_id
    }
  })
    .then((results) => {
      setRelatedProductFeatures(results.data.features)
      var modalElement = document.getElementById('sarah-modal');
      var overlayElement = document.getElementById('sarah-overlay');
      var body = document.querySelector("body")
      modalElement.classList.add('active');
      overlayElement.classList.add('active');
      body.classList.add('active');
    })
    .catch((err) => {
      console.log('Error in ComparisonDetails: ', err);
    })
}

export { ProductListInfo };
export { ComparisonDetails };
export { OutfitListInfo };