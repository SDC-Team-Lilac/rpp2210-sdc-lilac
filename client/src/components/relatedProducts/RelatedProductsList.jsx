import React from 'react';
import CardStructure from './CardStructure.jsx';
import { LeftArrow, RightArrow } from './CardButtons.jsx';

const RelatedProductsList = (props) => {
  var currentProduct = props.currentProduct;
  var list = props.relatedProducts.map((product) => {
    return <CardStructure product={product} listName={'product'} currentProduct={currentProduct}/>;
  })
  return (
    <div className='sarah-products-list'>
      <h2 className='sarah-products-list-title'>Related Products</h2>
      <div>
        {LeftArrow()}
        {list}
        {RightArrow()}
      </div>
    </div>
  )
}

export default RelatedProductsList;