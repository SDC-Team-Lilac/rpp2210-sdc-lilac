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
      <YourOutfit inOutfit={props.inOutfit} setInOutfit={props.setInOutfit} OutfitListInfo={props.OutfitListInfo} outfitCards={props.outfitCards} setMyOutfit={props.setMyOutfit} currentProductId={props.productId} currentProductId={props.productId} setProductId={props.setProductId} setOutfitCards={props.setOutfitCards} />
      <div data-testid='product-list-overlay' className='sarah-overlay' id='sarah-overlay' onClick={() => {
        var modalElement = document.getElementById('sarah-modal');
        var overlayElement = document.getElementById('sarah-overlay');
        var body = document.querySelector("body");
        modalElement.classList.remove('active');
        overlayElement.classList.remove('active');
        body.classList.remove('active');
      }}></div>
    </div>
  )
}

export default RelatedProducts;