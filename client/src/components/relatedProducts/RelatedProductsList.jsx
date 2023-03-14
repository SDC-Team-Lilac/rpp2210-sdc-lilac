import React from 'react';
import CardStructure from './CardStructure.jsx';
import { ProductListInfo } from './RelatedProductRequests.jsx';
import $ from 'jquery';
import { LeftArrow, RightArrow, OnCardClick, StarButton, XButton } from './CardButtons.jsx';

const RelatedProductsList = (props) => {
  console.log('PRODUCT CARDS: ', props.productCards);
  return (
    <div className='sarah-products-list'>
      <h2 className='sarah-products-list-title'>Related Products</h2>
      <div>
        {LeftArrow()}
        <div>
          {props.productCards.map((product) => {
            return <CardStructure product={product} listName={'product'} currentProduct={props.currentProduct}/>
          })}
        </div>
        {RightArrow()}
      </div>
    </div>
  )
}

export default RelatedProductsList;