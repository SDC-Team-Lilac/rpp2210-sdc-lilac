import React, { useState } from 'react';
import RatingBreakdown from './RatingBreakdown.jsx'
import ReviewList from './ReviewList.jsx'
import NewReview from './NewReview.jsx'

const Reviews = ({ product_id }) => {

  /*  This Component will need the below from it's parent:
        -) product_id, product name, product characteristics (latter two needed for NewReview)
      This Component will request the below from the API:
        -) Reviews from GET /reviews/
        -) Review Metadata from GET /reviews/meta
      This Component will store the following state:
        -) Reviews
        -) Reviews Metadata
      This Component will send the following state:
        -) Reviews TO ReviewList
        -) Reviews Metadata to RatingBreakdown
      This Component's state can be updated by the following components:
        -) SortOptions (can sort by dropdown)
        -) ReviewTile (can mark as helpful)
        -) **UNSURE RatingBreakdown (can filter for reviews with specific ratings, additive)
        -) KeywordSearch
    Note: Will need to make functions for subsequent calls to getReviews API to filter & sort the results
  */


     // //array of review objects
  const [reviews, setReviews] = useState([])
  const [reviewsMeta, setReviewsMeta] = useState([])


  return (
    <div style={{border: '2px solid red'}}>
      <h1>Reviews!</h1>
      <RatingBreakdown />
      <ReviewList reviews = {reviews}/>
      <NewReview/>
    </div>
  )
}

export default Reviews;