import React from 'react';
import { XButton, StarButton, OnCardClick } from './CardButtons.jsx';
import { ProductsListInfo } from './RelatedProductRequests.jsx';

const CardStructure = (props) => {
  var determine = () => {
    if (props.listName === 'outfit') {
      return XButton();
    } else {
      return StarButton(props.currentProduct, props.product);
    }
  }
  ProductsListInfo(props.product)
    .then ((results) => {
      return (
        <div className='sarah-product-card' onClick={() => {
          OnCardClick();
        }}>
          {determine()}
          <img className='sarah-product-image' src={results.image} width='100px' height='125px'></img>
          <h4 className='sarah-product-category'>{results.category}</h4>
          <h4 className='sarah-product-name'>{results.name}</h4>
          <h4 className='sarah-product-price'>{results.price}</h4>
          <h4 className='sarah-product-ratings'>{results.rating}</h4>
        </div>
      )
    })
    .catch((err) => {
      console.log('Error in CaardStructure: ', err);
    })
}

export default CardStructure;