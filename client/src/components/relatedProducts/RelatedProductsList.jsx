import React, { useState, useEffect } from 'react';
import { ProductListInfo } from './RelatedProductRequests.jsx';
import $ from 'jquery';
import { LeftArrow, RightArrow, OnCardClick, StarButton, XButton } from './CardButtons.jsx';
import ComparisonModal from './ComparisonModal.jsx';
const axios = require('axios');

const RelatedProductsList = (props) => {
  const [startingIndex, setStartingIndex] = useState(0);
  return (
    <div className='sarah-products-list' id='sarah-products-list' data-testid='product-list-container'>
      <h3 className='sarah-products-list-title'  data-testid='product-list-title'>Related Products</h3>
      <div className='sarah-list-with-arrows'>
        <div className='sarah-left-arrow-div'>
        <LeftArrow startingIndex={startingIndex} setStartingIndex={setStartingIndex} />
        </div>
        <div className='sarah-product-cards-container'  data-testid='product-cards-container'>
          {props.productCards[startingIndex]}
          {props.productCards[startingIndex + 1]}
          {props.productCards[startingIndex + 2]}
          {props.productCards[startingIndex + 3]}
        </div>
        <div className='sarah-right-arrow-div'>
          <RightArrow startingIndex={startingIndex} setStartingIndex={setStartingIndex} relatedProductsCount={props.productCards.length}/>
        </div>
      </div>
      <ComparisonModal relatedProductName={props.relatedProductName} currentProductName={props.productName} relatedProductFeatures={props.relatedProductFeatures} currentProductFeatures={props.currentProductFeatures}/>
    </div>
  )
}

export default RelatedProductsList;