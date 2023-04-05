import React, { useState } from 'react';
import { XButton, StarButton, OnCardClick } from './CardButtons.jsx';
import StarRating from '../reviews/StarRating.jsx';

const CardStructure = (props) => {
  if (props.product.image === null) {
    props.product.image = 'https://wallpapers-clan.com/wp-content/uploads/2022/08/default-pfp-16.jpg';
  }
  var determine = () => {
    if (props.listName === 'outfit') {
      return <XButton setOutfitCards={props.setOutfitCards} currentProductId={props.currentProductId} myOutfit={props.myOutfit} updateSelectedProduct={props.updateSelectedProduct} productId={props.product.productId} setMyOutfit={props.setMyOutfit} OutfitListInfo={props.OutfitListInfo} inOutfit={props.inOutfit} setInOutfit={props.setInOutfit} />
    } else {
      return StarButton(props.currentProductFeatures, props.product.productId, props.setRelatedProductFeatures, props.product.name, props.setRelatedProductName);
    }
  }
  if (props.product !== undefined) {
    return (
      <div className='sarah-product-card' data-testid='card-action'>
        <div className='sarah-product-button-div' >
          {determine()}
        </div>
        <div className="sarah-product-card-clickable" onClick={() => {OnCardClick(props.product.productId, props.setProductId, props.updateSelectedProduct);}}>
          <div className='sarah-product-image-div'>
            <img className='sarah-product-image' data-testid='card-image' src={props.product.image} alt={props.product.name} width='200px' height='225px'></img>
          </div>
          <div className='sarah-product-details-container'>
            <h4 className='sarah-product-category' data-testid='card-category' >{props.product.category}</h4>
            <h4 className='sarah-product-name' data-testid='card-name' >{props.product.name}</h4>
            <h4 className='sarah-product-price' data-testid='card-price' >{props.product.price}</h4>
            <div className='sarah-product-ratings' data-testid='card-rating' >
              <StarRating rating={props.product.rating}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardStructure;