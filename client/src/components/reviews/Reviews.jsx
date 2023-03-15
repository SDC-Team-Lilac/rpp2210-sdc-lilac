import React, { useState, useEffect } from 'react';
import RatingBreakdown from './RatingBreakdown.jsx'
import ReviewList from './ReviewList.jsx'
import NewReview from './NewReview.jsx'
import axios from 'axios';

const Reviews = ({ productId }) => {

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
  const [reviewsMeta, setReviewsMeta] = useState({})

  const countAllReviews = (ratings) => {
    var total = Number(ratings[1]) + Number(ratings[2]) + Number(ratings[3]) + Number(ratings[4]) + Number(ratings[5])
  }
  const getReviews = (count) => {
    return axios.get('/reviews', {
      params: {
        product_id: productId,
        count: count
      }
    })
  }

  useEffect(() => {
    getReviews(2)
    .then((result) => {
      setReviews(result.data.results);
    })
    .catch((err) => {console.log('Trouble getting reviews from client', err)});

    axios.get('/reviews/meta', {
      params: {
        product_id: productId
      }
    })
    .then((result) => {
      setReviewsMeta(result.data);
      console.log(result.data.ratings)
      countAllReviews(result.data.ratings)
    })
    .catch((err) => {console.log('Trouble getting reviews meta from client', err)});
  }, [])

  // useEffect(() => {
  //   countAllReviews(reviewsMeta)
  // }, [reviewsMeta])


  return (
    <div style={{border: '2px solid red'}}>
      <h1>Reviews!</h1>
      <RatingBreakdown reviewsMeta={reviewsMeta}/>
      <ReviewList reviews={reviews}/>
      <NewReview productId={productId} reviewsMeta={reviewsMeta}/>
    </div>
  )
}

export default Reviews;