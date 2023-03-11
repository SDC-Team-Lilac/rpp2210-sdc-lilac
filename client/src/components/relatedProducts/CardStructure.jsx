import React from 'react';
import { XButton, StarButton, OnCardClick } from './CardButtons.jsx'

const CardStructure = (props) => {
  var productClass = `sarah-${props.product}`;
  var determine = () => {
    if (props.listName === 'outfit') {
      return XButton();
    } else {
      return StarButton(productClass);
    }
  }
  return (
    <div className='sarah-product-card' onClick={() => {
      OnCardClick();
    }}>
      {determine()}
      <img className='sarah-product-image' src='https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80' width='100px' height='125px'></img>
      <h4 className='sarah-product-category'>Category Name</h4>
      <h4 className='sarah-product-name'>Product Name</h4>
      <h4 className='sarah-product-price'>$$$</h4>
      <h4 className='sarah-product-ratings'>Rating</h4>
    </div>
  )
}

export default CardStructure;