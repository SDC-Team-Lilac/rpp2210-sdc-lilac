import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import { RatingCalculator } from './helperFunctions.jsx';
import { XButton, StarButton, OnCardClick } from './CardButtons.jsx';
import ComparisonModalList from './ComparisonModalList.jsx';
import CardStructure from './CardStructure.jsx';

const server = 'http://localhost:3000'

var ProductListInfo = async(relatedProducts, setProductCards, setRelatedProductFeatures, productFeatures) => {
  var details = [];
  var cardList = [];
  var count = 0;
  console.log('INSIDE');
  const list =  await Promise.all(relatedProducts.map(async function(product) {
    var products = {productId: product};
    await axios.get(`/products/${product}`, {
      params: {
        product_id: product
      }
    })
      .then((details) => {
        products['category'] = details.data.category;
        products['name'] = details.data.name;
        products['price'] = details.data.default_price;
        return axios.get(`/products/${product}/styles`)
      })
      .then((styles) => {
        products.image = styles.data.results[0].photos[0].url;
        return axios.get('/reviews/meta', {
          params: {
            product_id: product
          }
        })
      })
      .then((reviews) => {
        return RatingCalculator(reviews.data.ratings);
      })
      .then((rating) => {
        products.rating = rating;
        details.push(products);
        cardList.push(<CardStructure product={products} setRelatedProductFeatures={setRelatedProductFeatures} listName={'product'} currentProductFeatures={productFeatures}/>)
        count += 1;
        if (count === relatedProducts.length) {
          setProductCards(cardList);
        }
        return cardList;
      })
      .catch((err) => {
        console.log('Error in ProductListInfo: ', err);
      })
  }))
    .then((results) => {
      return;
    })
    .catch((err) => {
      console.log('ERROR IN MAP: ', err);
    })

  return list;
}

const ComparisonDetails = (currentProductFeatures, product_id, setRelatedProductFeatures) => {
  if (product_id === null) {
    return;
  }
  axios.get(`/products/${product_id}`, {
    params: {
      'product_id': product_id
    }
  })
    .then((results) => {
      setRelatedProductFeatures(results.data.features)
      var modalElement = document.getElementById('sarah-modal');
      var overlayElement = document.getElementById('sarah-overlay');
      var body = document.querySelector("body")
      modalElement.classList.add('active');
      overlayElement.classList.add('active');
      body.classList.add('active');
    })
    .catch((err) => {
      console.log('Error in ComparisonDetails: ', err);
    })
}

export { ProductListInfo };
export { ComparisonDetails };
