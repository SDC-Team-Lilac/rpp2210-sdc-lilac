import React from 'react';
import ComparisonModal from './ComparisonModal.jsx';
import $ from 'jquery';
import { ComparisonDetails } from './RelatedProductRequests.jsx';
import { OutfitListInfo } from './RelatedProductRequests.jsx';
const axios = require('axios');

const DeleteFromOutfitList = (currentProductId, setMyOutfit, setOutfitCards, setProductId, updateSelectedProduct, inOutfit, setInOutfit, myOutfit, productId) => {
  if (productId === undefined) {
    productId = currentProductId;
  }
  var currentOutfitList = JSON.parse(localStorage.getItem("outfitList"));
  var listDetails = JSON.parse(localStorage.getItem("outfitListDetails"));
  var indexOutfitList;
  var indexOutfitDetails;
  console.log('before: ', currentOutfitList);
  console.log('listDetails: ', listDetails);
  console.log('product clicked: ', productId);
  console.log('currentProductId: ', currentProductId);
  if (typeof productId === 'string') {
    productId = Number(productId);
  }
  if (productId === currentProductId) {
    setInOutfit(false);
    indexOutfitList = currentOutfitList.indexOf(currentProductId);
  } else {
    indexOutfitList = currentOutfitList.indexOf(productId);
  }
  for (var i = 0; i < listDetails.length; i++) {
    if (Number(listDetails[i].productId) === productId) {
      indexOutfitDetails = i;
    }
  }
  if (indexOutfitList < 0) {
    return OutfitListInfo(setOutfitCards, setProductId, currentProductId, listDetails, setMyOutfit, updateSelectedProduct, inOutfit, setInOutfit);
  }
  currentOutfitList.splice(indexOutfitList, 1);
  var newOutfit = listDetails;
  newOutfit.splice(indexOutfitDetails, 1);
  localStorage.removeItem("outfitListDetails");
  localStorage.setItem("outfitListDetails", JSON.stringify(newOutfit));
  localStorage.removeItem("outfitList");
  localStorage.setItem("outfitList", JSON.stringify(currentOutfitList));
  console.log('index: ', indexOutfitList);
  console.log('listDetails Index: ', indexOutfitDetails);
  console.log('after: ', currentOutfitList);
  console.log('listDetails After: ', newOutfit);
  if (currentOutfitList.length === 0) {
    return OutfitListInfo(setOutfitCards, setProductId, currentProductId, [], setMyOutfit, updateSelectedProduct, inOutfit, setInOutfit);
  } else {
    return OutfitListInfo(setOutfitCards, setProductId, currentProductId, newOutfit, setMyOutfit, updateSelectedProduct, inOutfit, setInOutfit);
  }
};

const AddToOutfitList = (currentProductId, setMyOutfit, setOutfitCards, setProductId, updateSelectedProduct, inOutfit, setInOutfit, myOutfit) => {
  var currentOutfitList = JSON.parse(localStorage.getItem("outfitList"));
  var listDetails = JSON.parse(localStorage.getItem("outfitListDetails"));
  setInOutfit(!inOutfit);
  var newOutfitList = [];
  if (currentOutfitList === null) {
    newOutfitList.push(currentProductId);
    var stringNew = JSON.stringify(newOutfitList);
    localStorage.setItem("outfitList", stringNew);
  } else if (currentOutfitList.indexOf(currentProductId) < 0) {
    currentOutfitList.push(currentProductId);
    var stringNew = JSON.stringify(currentOutfitList);
    localStorage.removeItem("outfitList");
    localStorage.setItem("outfitList", stringNew);
  } else {
    return;
  }
  var localStorageProduct = JSON.parse(localStorage.getItem(currentProductId));
    if (localStorageProduct === undefined || localStorageProduct === null) {
      return axios.get('/relatedProducts/info', {
        params: {
          relatedProducts: [currentProductId],
          productId: currentProductId,
          listName: 'outfit'
        }
      })
      .then((results) => {
        var newList = listDetails.concat(results.data);
        localStorage.removeItem("outfitListDetails");
        localStorage.setItem("outfitListDetails", JSON.stringify(newList));
        return OutfitListInfo(setOutfitCards, setProductId, currentProductId, newList, setMyOutfit, updateSelectedProduct, inOutfit, setInOutfit);
      })
    } else {
      var array = [localStorageProduct]
      var newList = listDetails.concat(array);
      localStorage.removeItem("outfitListDetails");
      localStorage.setItem("outfitListDetails", JSON.stringify(newList));
      return OutfitListInfo(setOutfitCards, setProductId, currentProductId, newList, setMyOutfit, updateSelectedProduct, inOutfit, setInOutfit);
    }
}

const DetermineAction = (currentProductId, setMyOutfit, setOutfitCards, setProductId, updateSelectedProduct, inOutfit, setInOutfit, myOutfit) => {
  if (!inOutfit) {
    return AddToOutfitList(currentProductId, setMyOutfit, setOutfitCards, setProductId, updateSelectedProduct, inOutfit, setInOutfit, myOutfit);
  } else {
    return DeleteFromOutfitList(currentProductId, setMyOutfit, setOutfitCards, setProductId, updateSelectedProduct, inOutfit, setInOutfit, myOutfit);
  }
}

const XButton = (props) => {
  var onClick = () => {
    return DeleteFromOutfitList(props.currentProductId, props.setMyOutfit, props.setOutfitCards, props.setProductId, props.updateSelectedProduct, props.inOutfit, props.setInOutfit, props.myOutfit, props.productId);
  }
  var styleSettings ={
    'backgroundColor': 'transparent',
    'border': 'none',
    'color': '#D49E8D'
  }
  return (
    <button className='sarah-x-button' style={styleSettings} data-testid='x-button' onClick={() => {onClick()}}>&#10006;</button>
  )
}

const OnCardClick = (productId, setProductId, updateSelectedProduct) => {
  setProductId(productId);
  location.pathname=('/' + productId.toString());
  // updateSelectedProduct(productId);
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
    'fontSize': '28px',
    'color': '#D49E8D'
  }
  return (
    <button style={styleSettings} className='sarah-star-button' data-testid='star-button' onClick={() => {onClick()}}>&#9733;</button>
  )
}

const PlusButton = (props) => {
  var onClick = () => {
    return AddToOutfitList(props.currentProductId, props.setMyOutfit, props.setOutfitCards, props.setProductId, props.updateSelectedProduct, props.inOutfit, props.setInOutfit, props.myOutfit);
  }
  var styleSettings = {
    'color': '#B08401',
    'fontSize': '66px'
  }
  return (
    <button className='sarah-plus-button' style={styleSettings} data-testid='plus-button' onClick={() => {onClick()}}>&#43;</button>
  )
}

const LeftArrow = (props) => {
  var onClick = () => {
    props.setStartingIndex(props.startingIndex - 1);
  }
  var styleHidden = {
    'display': 'none'
  }
  var styleView = {
    'display': 'block'
  }
  var determineStyle = () => {
    if (props.startingIndex === 0) {
      return styleHidden;
    } else {
      return styleView;
    }
  }
  //&#9666; for triangle
  //&#60; for carrot
  return (
    <button style={determineStyle()} className='sarah-left-arrow' data-testid='left-arrow' onClick={() => {onClick()}}>
      <div className='sarah-left-arrow-text'>&#8249;</div>
    </button>
  )
}

const RightArrow = (props) => {
  var onClick = () => {
    props.setStartingIndex(props.startingIndex + 1);
  }
  var styleHidden = {
    'display': 'none'
  }
  var styleView = {
    'display': 'block'
  }
  var determineStyle = () => {
    var count;
    if (props.listName === 'outfit') {
      count = 3;
    } else {
      count = 4;
    }
    if (props.relatedProductsCount - count <= props.startingIndex) {
      return styleHidden;
    } else {
      return styleView;
    }
  }
  //&#9656; for triangle
  //&#62; for carrot
  return (
    <button style={determineStyle()} className='sarah-right-arrow' data-testid='right-arrow' onClick={() => {onClick()}}>
      <div className='sarah-right-arrow-text'>&#8250;</div>
    </button>
  )
}

export { XButton };
export { OnCardClick };
export { StarButton };
export { PlusButton };
export { LeftArrow };
export { RightArrow };
export { DetermineAction };