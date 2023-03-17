import React, { useState } from 'react';
import CardStructure from './CardStructure.jsx';
import { ProductListInfo } from './RelatedProductRequests.jsx';
import $ from 'jquery';
import { LeftArrow, RightArrow, OnCardClick, StarButton, XButton } from './CardButtons.jsx';
import ComparisonModal from './ComparisonModal.jsx';

const RelatedProductsList = (props) => {
  console.log('relatedProducts: ', props.relatedProducts);
  const [relatedProductFeatures, setRelatedProductFeatures] = useState([]);
  return (
    <div className='sarah-products-list' id='sarah-products-list'>
      <h2 className='sarah-products-list-title'>Related Products</h2>
      <div>
        {LeftArrow()}
        <div>
          {props.productCards.map((product) => {
            return <CardStructure setRelatedProductFeatures={setRelatedProductFeatures} product={product} listName={'product'} currentProductFeatures={props.currentProductFeatures}/>
          })}
        </div>
        {RightArrow()}
      </div>
      <div className='sarah-overlay' id='sarah-overlay' onClick={() => {
        var modalElement = document.getElementById('sarah-modal');
        var overlayElement = document.getElementById('sarah-overlay');
        var body = document.querySelector("body");
        modalElement.classList.remove('active');
        overlayElement.classList.remove('active');
        body.classList.remove('active');
      }}></div>
      <ComparisonModal relatedProductFeatures={relatedProductFeatures} currentProductFeatures={props.currentProductFeatures}/>
    </div>
  )
}

export default RelatedProductsList;