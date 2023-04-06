import React, { useState, useEffect } from 'react';
import CardStructure from './CardStructure.jsx';
import { LeftArrow, RightArrow, PlusButton } from './CardButtons.jsx';
import { OutfitListInfo } from './RelatedProductRequests.jsx';

const YourOutfit = (props) => {
  const [outfitStartingIndex, setOutfitStartingIndex] = useState(0);
  return (
    <div className='sarah-outfit-list'>
      <h3 className='sarah-outfit-list-title'>Your Outfit</h3>
      <div className='sarah-outfit-list-container'>
        <div className='sarah-left-arrow-div'>
          <LeftArrow startingIndex={outfitStartingIndex} setStartingIndex={setOutfitStartingIndex} />
        </div>
        <div className='sarah-add-to-outfit-card'>
          <PlusButton updateSelectedProduct={props.updateSelectedProduct} currentProductId={props.currentProductId} setMyOutfit={props.setMyOutfit} OutfitListInfo={props.OutfitListInfo} currentProductId={props.currentProductId} setProductId={props.setProductId} setOutfitCards={props.setOutfitCards} inOutfit={props.inOutfit} setInOutfit={props.setInOutfit}/>
          <h4 className='sarah-add-to-outfit-title'>Add to Outfit</h4>
        </div>
        <div className='sarah-outfit-card-container'>
          {props.outfitCards[outfitStartingIndex]}
          {props.outfitCards[outfitStartingIndex + 1]}
          {props.outfitCards[outfitStartingIndex + 2]}
        </div>
        <div className='sarah-right-arrow-div'>
          <RightArrow startingIndex={outfitStartingIndex} setStartingIndex={setOutfitStartingIndex} relatedProductsCount={props.outfitCards.length} listName={'outfit'}/>
        </div>
      </div>
    </div>
  )
}

export default YourOutfit;