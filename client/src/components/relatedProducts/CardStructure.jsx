import React, { useState } from 'react';
import { XButton, StarButton, OnCardClick } from './CardButtons.jsx';
import StarRating from '../reviews/StarRating.jsx';

const CardStructure = (props) => {
  var price = '$' + props.product.price;
  if (props.product.image === null) {
    props.product.image = 'https://images.unsplash.com/photo-1556015048-4d3aa10df74c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';
  }
  var determine = () => {
    if (props.listName === 'outfit') {
      return <XButton setOutfitCards={props.setOutfitCards} currentProductId={props.currentProductId} myOutfit={props.myOutfit} updateSelectedProduct={props.updateSelectedProduct} productId={props.product.productId} setMyOutfit={props.setMyOutfit} OutfitListInfo={props.OutfitListInfo} inOutfit={props.inOutfit} setInOutfit={props.setInOutfit} myOutfit={props.myOutfit}/>
    } else {
      return StarButton(props.currentProductFeatures, props.product.productId, props.setRelatedProductFeatures, props.product.name, props.setRelatedProductName);
    }
  }
  if (props.product !== undefined) {
    if (props.listName === 'outfit') {
      return (
        <div className='sarah-product-card outfit' data-testid='card-action'>
          <div className='sarah-product-button-div outfit' >
            {determine()}
          </div>
          <div className="sarah-product-card-clickable outfit" onClick={() => {OnCardClick(props.product.productId, props.setProductId, props.updateSelectedProduct);}}>
            <div className='sarah-product-image-div outfit'>
              <img className='sarah-product-image outfit' data-testid='card-image' src={props.product.image} alt={props.product.name} width='200px' height='225px'></img>
            </div>
            <div className='sarah-product-details-container outfit'>
              <h4 className='sarah-product-category outfit' data-testid='card-category' >{props.product.category}</h4>
              <h4 className='sarah-product-name outfit' data-testid='card-name' >{props.product.name}</h4>
              <h4 className='sarah-product-price outfit' data-testid='card-price' >{price}</h4>
              <div className='sarah-product-ratings outfit' data-testid='card-rating' >
                <StarRating rating={props.product.rating}/>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className='sarah-product-card related' data-testid='card-action'>
          <div className='sarah-product-button-div related' >
            {determine()}
          </div>
          <div className="sarah-product-card-clickable related" onClick={() => {OnCardClick(props.product.productId, props.setProductId, props.updateSelectedProduct);}}>
            <div className='sarah-product-image-div related'>
              <img className='sarah-product-image related' data-testid='card-image' src={props.product.image} alt={props.product.name} width='200px' height='225px'></img>
            </div>
            <div className='sarah-product-details-container related'>
              <h4 className='sarah-product-category related' data-testid='card-category' >{props.product.category}</h4>
              <h4 className='sarah-product-name related' data-testid='card-name' >{props.product.name}</h4>
              <h4 className='sarah-product-price related' data-testid='card-price' >{price}</h4>
              <div className='sarah-product-ratings related' data-testid='card-rating' >
                <StarRating rating={props.product.rating}/>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default CardStructure;