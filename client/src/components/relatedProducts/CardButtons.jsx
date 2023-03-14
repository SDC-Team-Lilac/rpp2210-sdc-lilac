import React from 'react';
import ComparisonModal from './ComparisonModal.jsx';

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

const StarButton = (currentProduct, clickedProduct) => {
  //currentProduct will be current product id passed by state
  var onClick = () => {
    ComparisonModal(currentProduct, clickedProduct);
    var modalElement = document.getElementById('sarah-modal');
    var overlayElement = document.getElementById('sarah-overlay');
    modalElement.classList.add('active');
    overlayElement.classList.add('active');
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