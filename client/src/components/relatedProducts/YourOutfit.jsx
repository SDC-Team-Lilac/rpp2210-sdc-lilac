import React, { useState } from 'react';
import CardStructure from './CardStructure.jsx';
import { LeftArrow, RightArrow, PlusButton } from './CardButtons.jsx';

const YourOutfit = (props) => {
  const [outfitStartingIndex, setOutfitStartingIndex] = useState(0);
  // var list = props.myOutfit.outfits.map((outfit) => {
  //   return <CardStructure product={outfit} listName={'outfit'} />;
  // })
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
          {/* {list} */}
        </div>
        <RightArrow startingIndex={outfitStartingIndex} setStartingIndex={setOutfitStartingIndex} />
      </div>
    </div>
  )
}

export default YourOutfit;