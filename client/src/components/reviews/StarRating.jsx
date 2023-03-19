import React from 'react';

const StarRating = ({ rating }) => {


  return (
    <div data-testid='starRating-1' className="reviews allStars">
      <div className="reviews star"></div>
      <div className="reviews star"></div>
      <div className="reviews star"></div>
      <div className="reviews star"></div>
      <div className="reviews star"></div>

    </div>
  )
}

export default StarRating;
