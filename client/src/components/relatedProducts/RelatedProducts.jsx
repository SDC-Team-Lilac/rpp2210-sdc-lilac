import React from 'react';
import YourOutfit from './YourOutfit.jsx';
import CardStructure from './CardStructure.jsx';
import RelatedProductsRequests from './RelatedProductRequests.jsx';
import { StarButton, XButton, OnCardClick, LeftArrow, RightArrow, PlusButton } from './CardButtons.jsx';
import ComparisonModal from './ComparisonModal.jsx';
import RelatedProductsList from './RelatedProductsList.jsx';

const RelatedProducts = (props) => {
  var outfits = ['Fake-Outfit'];
  return (
    <div>
      <RelatedProductsList productId={props.productId} currentProduct={props.productFeatures} relatedProducts={props.relatedProducts}/>
      <YourOutfit myOutfit={props.myOutfit}/>
    </div>
  )
}

export default RelatedProducts;