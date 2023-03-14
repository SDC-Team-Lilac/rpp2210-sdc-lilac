import React from 'react';
import YourOutfit from './YourOutfit.jsx';
import CardStructure from './CardStructure.jsx';
import RelatedProductsRequests from './RelatedProductRequests.jsx';
import { StarButton, XButton, OnCardClick, LeftArrow, RightArrow, PlusButton } from './CardButtons.jsx';
import ComparisonModal from './ComparisonModal.jsx';
import RelatedProductsList from './RelatedProductsList.jsx';

const RelatedProducts = (props) => {
  var currentProduct = props.productFeatures;
  var outfits = ['Fake-Outfit'];
  return (
    <div>
      <RelatedProductsList products={products} currentProduct={props.productFeatures}/>
      <YourOutfit outfits={outfits}/>
    </div>
  )
}

export default RelatedProducts;