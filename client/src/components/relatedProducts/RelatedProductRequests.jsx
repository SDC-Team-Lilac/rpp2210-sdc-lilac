import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import { RatingCalculator } from './helperFunctions.jsx';
import { XButton, StarButton, OnCardClick } from './CardButtons.jsx';

const server = 'http://localhost:3000'

var ProductListInfo = async(relatedProducts, setProductCards) => {
var details = [];
var count = 0;

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
        count += 1;
        if (count === relatedProducts.length) {
          setProductCards(details);
        }
        return products;
      })
      .catch((err) => {
        console.log('Error in ProductListInfo: ', err);
      })
  }))
    .then((results) => {
      console.log('THESE ARE RESULTS: ', results);
    })
    .catch((err) => {
      console.log('ERROR IN MAP: ', err);
    })

  return list;
}

const ComparisonDetails = (product_id) => {
  axios.get(`${server}/products/product_id`, {
    params: {
      'product_id': product_id
    }
  })
    .then((results) => {
      return results.features;
    })
    .catch((err) => {
      console.log('Error in ComparisonDetails: ', err);
    })
}

export { ProductListInfo };
export { ComparisonDetails };
