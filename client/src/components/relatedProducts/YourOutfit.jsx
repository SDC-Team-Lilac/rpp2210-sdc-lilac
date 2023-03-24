import React, { useState, useEffect } from 'react';
import CardStructure from './CardStructure.jsx';
import { LeftArrow, RightArrow, PlusButton } from './CardButtons.jsx';
import { OutfitListInfo } from './RelatedProductRequests.jsx';

const YourOutfit = (props) => {
  const [outfitStartingIndex, setOutfitStartingIndex] = useState(0);
  useEffect(() => {
    OutfitListInfo(props.setOutfitCards, props.setProductId, props.productId, props.myOutfit, props.setMyOutfit, props.updateSelectedProduct);
  }, [props.myOutfit])
  return (
    <div className='sarah-outfit-list'>
      <h2 className='sarah-outfit-list-title'>Your Outfit</h2>
      <div className='sarah-outfit-list-container'>
      <LeftArrow startingIndex={outfitStartingIndex} setStartingIndex={setOutfitStartingIndex} />
        <div className='sarah-add-to-outfit-card'>
          {PlusButton(props.currentProductId, props.setMyOutfit)}
          <h4 className='sarah-add-to-outfit-title'>Add to Outfit</h4>
        </div>
        <div className='sarah-outfit-card-container'>
          {props.outfitCards[outfitStartingIndex]}
          {props.outfitCards[outfitStartingIndex + 1]}
          {props.outfitCards[outfitStartingIndex + 2]}
          {props.outfitCards[outfitStartingIndex + 3]}
        </div>
        <RightArrow startingIndex={outfitStartingIndex} setStartingIndex={setOutfitStartingIndex} relatedProductsCount={props.outfitCards.length} />
      </div>
    </div>
  )
}

export default YourOutfit;