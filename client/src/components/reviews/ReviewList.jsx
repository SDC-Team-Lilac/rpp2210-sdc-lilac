import React, { useState } from 'react';
import ReviewTile from './ReviewTile.jsx'
import KeywordSearch from './KeywordSearch.jsx'
import SortOptions from './SortOptions.jsx'

const ReviewsList = ( { reviews }) => {

  /*  This Component will:
      1) Render each reviewTile from reviews state
      2) Figure out what to do when More Reviews is clicked
      3) Render a popup overlay when  Add Review is clicked and render NewReview
   */

  return (
    <div style={{border: '5px solid blue'}}>
      ReviewsList!
      <SortOptions />
      <KeywordSearch />
      {reviews.map((review) => {
        return (
          <ReviewTile review={review}/>
        )
      })}
      <button>More Reviews</button>
      <button>Add Review</button>
    </div>
  )
}

export default ReviewsList;