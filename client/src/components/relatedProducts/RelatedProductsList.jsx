import React, { useState, useEffect } from 'react';
import { ProductListInfo } from './RelatedProductRequests.jsx';
import $ from 'jquery';
import { LeftArrow, RightArrow, OnCardClick, StarButton, XButton } from './CardButtons.jsx';
import ComparisonModal from './ComparisonModal.jsx';
const axios = require('axios');

const RelatedProductsList = (props) => {
  const [startingIndex, setStartingIndex] = useState(0);
  // useEffect(() => {
  //   props.updateSelectedProduct(props.productId);
  // }, [props.productId])
  return (
    <div className='sarah-products-list' id='sarah-products-list' data-testid='product-list-container'>
      <h2 className='sarah-products-list-title'  data-testid='product-list-title'>Related Products</h2>
      <div className='sarah-list-with-arrows'>
        <LeftArrow startingIndex={startingIndex} setStartingIndex={setStartingIndex} />
        <div className='sarah-product-cards-container'  data-testid='product-cards-container'>
          {props.productCards[startingIndex]}
          {props.productCards[startingIndex + 1]}
          {props.productCards[startingIndex + 2]}
          {props.productCards[startingIndex + 3]}
        </div>
        <RightArrow startingIndex={startingIndex} setStartingIndex={setStartingIndex} relatedProductsCount={props.productCards.length}/>
      </div>
      <div data-testid='product-list-overlay' className='sarah-overlay' id='sarah-overlay' onClick={() => {
        var modalElement = document.getElementById('sarah-modal');
        var overlayElement = document.getElementById('sarah-overlay');
        var body = document.querySelector("body");
        modalElement.classList.remove('active');
        overlayElement.classList.remove('active');
        body.classList.remove('active');
      }}></div>
      <ComparisonModal relatedProductName={props.relatedProductName} currentProductName={props.productName} relatedProductFeatures={props.relatedProductFeatures} currentProductFeatures={props.currentProductFeatures}/>
    </div>
  )
}

export default RelatedProductsList;