import React from 'react';
import RatingBreakdown from './RatingBreakdown.jsx'
import ReviewTile from './ReviewTile.jsx'
import SortOptions from './SortOptions.jsx'
import ReviewList from './ReviewList.jsx'
import NewReview from './NewReview.jsx'
import KeywordSearch from './KeywordSearch.jsx'

const Reviews = () => {

  return (
    <div>
      <h1>Reviews!</h1>
      <RatingBreakdown />
      <ReviewList/>
    </div>
  )
}

export default Reviews;