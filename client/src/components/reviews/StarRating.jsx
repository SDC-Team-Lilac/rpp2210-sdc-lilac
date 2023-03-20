import React from 'react';

const StarRating = ({ rating }) => {

// console.log(starImage)


  return (
    <div data-testid='starRating-1' className="reviews starRatings">
      <span style={{width: '50%'}}className="fullStars" >
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      &#9734;&#9734;&#9734;&#9734;&#9734;
    </div>
  )
}





export default StarRating;
