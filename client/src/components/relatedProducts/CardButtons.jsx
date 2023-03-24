import React from 'react';
import ComparisonModal from './ComparisonModal.jsx';
import $ from 'jquery';
import { ComparisonDetails } from './RelatedProductRequests.jsx';
import { OutfitListInfo } from './RelatedProductRequests.jsx';

const XButton = (productId, setMyOutfit) => {
  var onClick = () => {
    var currentOutfitList = JSON.parse(localStorage.getItem("outfitList"));
    var index = currentOutfitList.indexOf(productId);
    currentOutfitList.splice(index, 1);
    localStorage.removeItem("outfitList");
    localStorage.setItem("outfitList", JSON.stringify(currentOutfitList));
    setMyOutfit(currentOutfitList);
  }
  return (
    <button className='sarah-x-button' data-testid='x-button' onClick={() => {onClick()}}>&#10006;</button>
  )
}

const OnCardClick = (productId, setProductId, updateSelectedProduct) => {
  setProductId(productId);
  updateSelectedProduct(productId);
}

const StarButton = (currentProduct, clickedProduct, setRelatedProductId, clickedProductName, setRelatedProductName) => {
  //currentProduct will be current product features passed by state
  var onClick = () => {
    setRelatedProductName(clickedProductName);
    ComparisonDetails(currentProduct, clickedProduct, setRelatedProductId);
  }
  var styleSettings ={
    'backgroundColor': 'transparent',
    'border': 'none',
    'fontSize': '20px'
  }
  return (
    <button style={styleSettings} className='sarah-star-button' data-testid='star-button' onClick={() => {onClick()}}>&#11088;</button>
  )
}

const PlusButton = (currentProductId, setMyOutfit) => {
  var onClick = () => {
    var currentOutfitList = JSON.parse(localStorage.getItem("outfitList"));
    if (typeof currentOutfitList === 'number') {
      currentOutfitList = [currentOutfitList];
    }
    var newOutfitList = [];
    if (currentOutfitList === null) {
      newOufitList.push(currentProductId);
      var stringNew = JSON.stringify(newOutfitList);
      localStorage.setItem("outfitList", stringNew);
      setMyOutfit(newOutfitList);
    } else if (currentOutfitList.indexOf(currentProductId) < 0) {
      currentOutfitList.push(currentProductId);
      var stringOld = JSON.stringify(currentOutfitList);
      localStorage.removeItem("outfitList");
      localStorage.setItem("outfitList", stringOld);
      setMyOutfit(currentOutfitList);
    } else {
      return;
    }
  }
  return (
    <button className='sarah-plus-button' data-testid='plus-button' onClick={() => {onClick()}}>&#10133;</button>
  )
}

const LeftArrow = (props) => {
  var onClick = () => {
    props.setStartingIndex(props.startingIndex - 1);
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
    <button style={determineStyle()} className='sarah-left-arrow' data-testid='left-arrow' onClick={() => {onClick()}}>&#60;</button>
  )
}

const RightArrow = (props) => {
  var onClick = () => {
    props.setStartingIndex(props.startingIndex + 1);
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
    if (props.relatedProductsCount - 4 <= props.startingIndex) {
      return styleHidden;
    } else {
      return styleView;
    }
  }
  return (
    <button style={determineStyle()} className='sarah-right-arrow' data-testid='right-arrow' onClick={() => {onClick()}}>&#62;</button>
  )
}

export { XButton };
export { OnCardClick };
export { StarButton };
export { PlusButton };
export { LeftArrow };
export { RightArrow };