import React from 'react';
import CardStructure from './CardStructure.jsx';
import { LeftArrow, RightArrow, PlusButton } from './CardButtons.jsx';

const YourOutfit = (props) => {
  var list = props.myOutfit.outfits.map((outfit) => {
    return <CardStructure product={outfit} listName={'outfit'} />;
  })
  return (
    <div className='sarah-outfit-list'>
      <h2 className='sarah-outfit-list-title'>Your Outfit</h2>
      <div>
        {LeftArrow()}
        <div className='sarah-add-to-outfit-card'>
          {PlusButton()}
          <h4 className='sarah-add-to-outfit-title'>Add to Outfit</h4>
        </div>
        {list}
        {RightArrow()}
      </div>
    </div>
  )
}

export default YourOutfit;