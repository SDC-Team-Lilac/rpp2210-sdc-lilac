import React from 'react';
import YourOutfit from './YourOutfit.jsx';
import CardStructure from './CardStructure.jsx';
import RelatedProductsRequests from './RelatedProductRequests.jsx';
import { StarButton, XButton, OnCardClick, LeftArrow, RightArrow, PlusButton } from './CardButtons.jsx';
import ComparisonModal from './ComparisonModal.jsx';
import RelatedProductsList from './RelatedProductsList.jsx';

const RelatedProducts = (props) => {
  // var outfits = ['Fake-Outfit'];
  return (
    <div>
      <RelatedProductsList relatedProductFeatures={props.relatedProductFeatures} productCards={props.productCards} currentProductFeatures={props.productFeatures} productName={props.productName} relatedProductName={props.relatedProductName} />
      <YourOutfit OutfitListInfo={props.OutfitListInfo} outfitCards={props.outfitCards} setMyOutfit={props.setMyOutfit} currentProductId={props.productId} currentProductId={props.productId} setProductId={props.setProductId} setOutfitCards={props.setOutfitCards} />
    </div>
  )
}

export default RelatedProducts;