import React from 'react';
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

export { RatingCalculator };