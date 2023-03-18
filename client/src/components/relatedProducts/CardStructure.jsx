import React from 'react';
import { XButton, StarButton, OnCardClick } from './CardButtons.jsx'

const CardStructure = (props) => {
  if (props.product.image === null) {
    props.product.image = 'https://wallpapers-clan.com/wp-content/uploads/2022/08/default-pfp-16.jpg';
  }
  var determine = () => {
    if (props.listName === 'outfit') {
      return XButton();
    } else {
      return StarButton(props.currentProductFeatures, props.product.productId, props.setRelatedProductFeatures);
    }
  }
  if (props.product !== undefined) {
    return (
      <div className='sarah-product-card' onClick={() => {
        OnCardClick();
      }}>
        <div className='sarah-product-button-div'>
          {determine()}
        </div>
        <div className='sarah-product-image-div'>
          <img className='sarah-product-image' src={props.product.image} width='200px' height='225px'></img>
        </div>
        <h4 className='sarah-product-category'>{props.product.category}</h4>
        <h4 className='sarah-product-name'>{props.product.name}</h4>
        <h4 className='sarah-product-price'>{props.product.price}</h4>
        <h4 className='sarah-product-ratings'>{props.product.rating}</h4>
      </div>
    );
  }
}

export default CardStructure;