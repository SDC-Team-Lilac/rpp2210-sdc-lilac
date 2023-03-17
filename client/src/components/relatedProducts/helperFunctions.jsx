import React from 'react';
import { ComparisonDetails } from './RelatedProductRequests.jsx';
import { RelatedProductsList } from './RelatedProductRequests.jsx';

//rating calculator
const RatingCalculator = (ratings) => {
  var count = 0;
  var total = 0;
  for (var key in ratings) {
    count += Number(ratings[key]);
    total += ratings[key] * key;
  }
  return Math.round((total / count) * 100) / 100;
}
//move on card click?

//comparison detail stuff
const Compare = (product1, product2) => {
  var features = [];
  var featureName = [];
  for (var i = 0; i < product1.length; i++) {
    features.push({
      'currentProduct': product1[i].value,
      'feature': product1[i].feature
    });
    featureName.push(product1[i].feature);
  }
  for (var i = 0; i < product2.length; i++) {
    var index = featureName.indexOf(product2[i].feature)
    if (index >= 0) {
      features[index]['comparedProduct'] = product2[i].value;
    } else {
      features.push({
        'comparedProduct': product[i].value,
        'feature': product[i].feature
      })
    }
  }

  return features;
}

//send request for compared product details
const CompareFeatures = (product1, product_id) => {
  ComparisonDetails(product_id)
    .then((results) => {
      Compare(product1, results);
    })
    .catch((err) => {
      console.log('Error in CompareFeatures: ', err);
    })
}

export { RatingCalculator };
export { CompareFeatures };