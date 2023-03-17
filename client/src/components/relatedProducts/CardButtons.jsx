import React from 'react';
import ComparisonModal from './ComparisonModal.jsx';
import $ from 'jquery';
import { ComparisonDetails } from './RelatedProductRequests.jsx'

const XButton = () => {
  var onClick = () => {
    console.log('The X button was clicked!')
  }
  return (
    <button className='sarah-x-button' onClick={() => {onClick()}}>&#10006;</button>
  )
}

const OnCardClick = () => {
  console.log('The product card was clicked!')
}

const StarButton = (currentProduct, clickedProduct, setRelatedProductId) => {
  //currentProduct will be current product features passed by state
  var onClick = () => {
    ComparisonDetails(currentProduct, clickedProduct, setRelatedProductId);
  }
  return (
    <button className='sarah-star-button' onClick={() => {onClick()}}>&#11088;</button>
  )
}

const PlusButton = () => {
  var onClick = () => {
    console.log('The plus button was clicked!')
  }
  return (
    <button className='sarah-plus-button' onClick={() => {onClick()}}>&#10133;</button>
  )
}

const LeftArrow = () => {
  var onClick = () => {
    console.log('The left arrow button was clicked!')
  }
  return (
    <button className='sarah-plus-button' onClick={() => {onClick()}}>&#11013;</button>
  )
}

const RightArrow = () => {
  var onClick = () => {
    console.log('The right arrow button was clicked!')
  }
  return (
    <button className='sarah-plus-button' onClick={() => {onClick()}}>&#10145;</button>
  )
}

export { XButton };
export { OnCardClick };
export { StarButton };
export { PlusButton };
export { LeftArrow };
export { RightArrow };