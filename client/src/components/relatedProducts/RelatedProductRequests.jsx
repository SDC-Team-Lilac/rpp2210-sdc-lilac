import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import RatingCalculator from './helperFunctions.jsx';

const server = 'http://localhost:3000'

var ProductListInfo = (product_id) => {
  var product = {};
  axios.get(`${server}/products/:product_id`, {
    'product_id': product_id
  })
    .then((details) => {
      product.category = details.category;
      product.name = details.name;
      product.price = details.default_price;
      axios.get(`${server}/:product_id/styles`, {
        'product_id': product_id;
      })
    })
    .then((styles) => {
      product.image = styles.results[0].photos[0].url;
      axios.get(`${server}/reviews/meta`, {
        'product_id': product_id;
      })
    })
    .then((reviews) => {
      RatingCalculator(reviews.ratings);
    })
    .then((rating) => {
      product.rating = rating;
      return product;
    })
    .catch((err) => {
      console.log('Error in ProductListInfo: ', err);
    })
}

const ComparisonDetails = (product_id) => {
  axios.get(`${server}/products/product_id`, {
    'product_id': product_id
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
