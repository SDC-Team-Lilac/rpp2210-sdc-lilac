import React from 'react';
import { XButton, StarButton, OnCardClick } from './CardButtons.jsx';
import StarRating from '../reviews/StarRating.jsx';

const CardStructure = (props) => {
  if (props.product.image === null) {
    props.product.image = 'https://wallpapers-clan.com/wp-content/uploads/2022/08/default-pfp-16.jpg';
  }
  var determine = () => {
    if (props.listName === 'outfit') {
      return XButton();
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
        <div onClick={() => {OnCardClick(props.relatedProductId, props.setProductId, props.updateSelectedProduct);}}>
          <div className='sarah-product-image-div'>
            <img className='sarah-product-image' data-testid='card-image' src={props.product.image} width='200px' height='225px'></img>
          </div>
          <h4 className='sarah-product-category' data-testid='card-category' >{props.product.category}</h4>
          <h4 className='sarah-product-name' data-testid='card-name' >{props.product.name}</h4>
          <h4 className='sarah-product-price' data-testid='card-price' >{props.product.price}</h4>
          <h4 className='sarah-product-ratings' data-testid='card-rating' >{StarRating(props.product.rating)}</h4>
        </div>
      </div>
    );
  }
}

export default CardStructure;