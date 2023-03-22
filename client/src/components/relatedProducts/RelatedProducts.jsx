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
      <RelatedProductsList relatedProductFeatures={props.relatedProductFeatures} productId={props.productId} productCards={props.productCards} currentProductFeatures={props.productFeatures} productName={props.productName} relatedProductName={props.relatedProductName}/>
      <YourOutfit myOutfit={props.myOutfit} setMyOutfit={props.setMyOutfit} currentProductId={props.productId}/>
    </div>
  )
}

export default RelatedProducts;