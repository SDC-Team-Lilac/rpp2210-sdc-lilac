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
  var styleSettings ={
    'backgroundColor': 'transparent',
    'border': 'none',
    'fontSize': '20px'
  }
  return (
    <button style={styleSettings} className='sarah-star-button' onClick={() => {onClick()}}>&#11088;</button>
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

const LeftArrow = (props) => {
  var onClick = () => {
    props.setStartingIndex(startingIndex + 1);
  }
  var styleHidden = {
    'backgroundColor': 'transparent',
    'border': 'none',
    'fontSize': '35px',
    'display': 'none'
  }
  var styleView = {
    'backgroundColor': 'transparent',
    'border': 'none',
    'fontSize': '35px'
  }
  var determineStyle = () => {
    if (props.startingIndex === 0) {
      return styleHidden;
    } else {
      return styleView;
    }
  }
  return (
    <button style={determineStyle()} className='sarah-left-arrow' onClick={() => {onClick()}}>&#60;</button>
  )
}

const RightArrow = (props) => {
  var onClick = () => {
    props.setStartingIndex(startingIndex - 1);
  }
  var styleHidden = {
    'backgroundColor': 'transparent',
    'border': 'none',
    'fontSize': '35px',
    'display': 'none'
  }
  var styleView = {
    'backgroundColor': 'transparent',
    'border': 'none',
    'fontSize': '35px'
  }
  var determineStyle = () => {
    if (props.startingIndex === 0) {
      return styleHidden;
    } else {
      return styleView;
    }
  }
  return (
    <button style={determineStyle()} className='sarah-right-arrow' onClick={() => {onClick()}}>&#62;</button>
  )
}

export { XButton };
export { OnCardClick };
export { StarButton };
export { PlusButton };
export { LeftArrow };
export { RightArrow };