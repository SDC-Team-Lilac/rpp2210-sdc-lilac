import React from 'react';
import ComparisonModal from './ComparisonModal.jsx';
import $ from 'jquery';
import { ComparisonDetails } from './RelatedProductRequests.jsx';
import { OutfitListInfo } from './RelatedProductRequests.jsx';
const axios = require('axios');

const XButton = (props) => {
  var onClick = () => {
    console.log('X CLICK');
    var currentOutfitList = JSON.parse(localStorage.getItem("outfitList"));
    var index = currentOutfitList.indexOf(props.productId);
    currentOutfitList.splice(index, 1);
    localStorage.removeItem("outfitList");
    localStorage.setItem("outfitList", JSON.stringify(currentOutfitList));
    props.setMyOutfit(currentOutfitList);
    return axios.get('/relatedProducts/info', {
      params: {
        relatedProducts: currentOutfitList,
        productId: props.productId,
        listName: 'outfit'
      }
    })
    .then((results) => {
      return props.OutfitListInfo(props.setOutfitCards, props.setProductId, props.currentProductId, results.data, props.setMyOutfit, props.updateSelectedProduct);
    })
  }
  var styleSettings ={
    'backgroundColor': 'transparent',
    'border': 'none'
  }
  return (
    <button className='sarah-x-button' style={styleSettings} data-testid='x-button' onClick={() => {onClick()}}>&#10006;</button>
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

const PlusButton = (props) => {
  var onClick = () => {
    console.log('PLUS CLICK');
    var currentOutfitList = JSON.parse(localStorage.getItem("outfitList"));
    console.log('currentList: ', currentOutfitList, props.currentProductId);
    if (typeof currentOutfitList === 'number') {
      currentOutfitList = [currentOutfitList];
    }
    var newOutfitList = [];
    if (currentOutfitList === null) {
      newOutfitList.push(props.currentProductId);
      var stringNew = JSON.stringify(newOutfitList);
      localStorage.setItem("outfitList", stringNew);
      props.setMyOutfit(newOutfitList);
      return axios.get('/relatedProducts/info', {
        params: {
          relatedProducts: newOutfitList,
          productId: props.currentProductId,
          listName: 'outfit'
        }
      })
      .then((results) => {
        console.log('1 ', results.data);
        return props.OutfitListInfo(props.setOutfitCards, props.setProductId, props.currentProductId, results.data, props.setMyOutfit, props.updateSelectedProduct);
      })
    } else if (currentOutfitList.indexOf(props.currentProductId) < 0) {
      currentOutfitList.push(props.currentProductId);
      var stringOld = JSON.stringify(currentOutfitList);
      localStorage.removeItem("outfitList");
      localStorage.setItem("outfitList", stringOld);
      props.setMyOutfit(currentOutfitList);
      return axios.get('/relatedProducts/info', {
        params: {
          relatedProducts: currentOutfitList,
          productId: props.currentProductId,
          listName: 'outfit'
        }
      })
      .then((results) => {
        console.log('2 ', results.data);
        return props.OutfitListInfo(props.setOutfitCards, props.setProductId, props.currentProductId, results.data, props.setMyOutfit, props.updateSelectedProduct);
      })
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
    console.log('COUNTING: ', count, props.listName);
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