import React, { useState, useEffect } from 'react';
import RatingBreakdown from './RatingBreakdown.jsx'
import ReviewList from './ReviewList.jsx'
import NewReview from './NewReview.jsx'
import { RatingCalculator } from '../relatedProducts/helperFunctions.jsx'
import axios from 'axios';

const Reviews = ({ productId, updateAverageRating }) => {

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
  const [nextPage, setNextPage] = useState(2)
  const [showMoreButton, setShowMoreButton] = useState(false)

  const getReviews = (page) => {
    return axios.get('/reviews', {
      params: {
        product_id: productId,
        count: 2,
        page: page
      }
    })
  }

  useEffect(() => {
    getReviews(1)
    .then((result) => {
      if (result.data.results.length !== 0) {
        setShowMoreButton(true)
        setReviews(result.data.results);
      }
    })
    .catch((err) => {console.log('Trouble getting reviews from client', err)});


    axios.get('/reviews/meta', {
      params: {
        product_id: productId
      }
    })
    .then((result) => {
      setReviewsMeta(result.data);
      var averageRating = RatingCalculator(result.data.ratings)
      updateAverageRating(averageRating)
    })
    .catch((err) => {console.log('Trouble getting reviews meta from client', err)});
  }, [])



  const checkAddReviews = (e) => {
    e.preventDefault()
    getReviews(nextPage)
    .then((result) => {
      console.log('Checking & Adding reviews', [...reviews, ...result.data.results])
      if (result.data.results.length !== 0) {
        setShowMoreButton(true);
        var additionalReviews = [...reviews, ...result.data.results]
        setReviews(additionalReviews)
      }
    })
    .catch((err) => {console.log('Error adding reviews:', err)})
    var updatePage = nextPage + 1;
    setNextPage(updatePage);
  }

  return (
    <div style={{border: '2px solid red'}}>
      <h1>Reviews!</h1>
      <RatingBreakdown reviewsMeta={reviewsMeta}/>
      <ReviewList reviews={reviews} showMoreButton={showMoreButton} checkAddReviews={checkAddReviews} />
      <NewReview productId={productId} reviewsMeta={reviewsMeta}/>
    </div>
  )
}

export default Reviews;