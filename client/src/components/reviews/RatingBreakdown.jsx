import React, { useState, useEffect } from 'react';
import ProductBreakdown from './ProductBreakdown.jsx'
import StarRating from './StarRating.jsx'

const RatingBreakdown = ({ reviewsMeta, averageStarRating, updateTotalNumberReviews, totalNumberReviews }) => {

  /*  This Component will:
      1)
   */

  const [recommended, setRecommended] = useState(null);

  const percentRecommend = () => {
    var total = Number(reviewsMeta.recommended.false) + Number(reviewsMeta.recommended.true);
    var recommend = Number(reviewsMeta.recommended.true);
    var percent = Math.round(((recommend/total) * 100))
    setRecommended(percent)
  }
  const countReviews = () => {
    var count = 0;
    for (var key in reviewsMeta.ratings) {
      count += Number(reviewsMeta.ratings[key]);
    }
    updateTotalNumberReviews(count);
  }

  useEffect(() => {
    countReviews()
    percentRecommend()
  }, [])

  useEffect(() => {
    countReviews()
    percentRecommend()
  }, [reviewsMeta])


  return (
    <div data-testid='ratingBreakdown-1' style={{border: '5px solid green'}}> Ratings & Reviews
      <div className="reviews ratingSummary">
        <div> {averageStarRating ? averageStarRating.toFixed(1) : null} </div>
        <StarRating rating={averageStarRating}/>
      </div>
      <div>There are {totalNumberReviews} reviews!</div>
      <div className="reviews ratingBreakdown" style={{border: '2px solid blue'}}>
        {/* Rating Breakdown! */}
        <div className="reviews allLeftRatingBars">
          <div className="reviews leftRatingBar">5 Stars:</div>
          <div className="reviews leftRatingBar">4 Stars:</div>
          <div className="reviews leftRatingBar">3 Stars:</div>
          <div className="reviews leftRatingBar">2 Stars:</div>
          <div className="reviews leftRatingBar">1 Stars:</div>
        </div>
        <div className="reviews allRatingBars">
          <div className="reviews ratingBar"></div>
          <div className="reviews ratingBar"></div>
          <div className="reviews ratingBar"></div>
          <div className="reviews ratingBar"></div>
          <div className="reviews ratingBar"></div>
        </div>
        <div className="reviews allRatingBars">
          <div>{reviewsMeta.ratings[5]}</div>
          <div>{reviewsMeta.ratings[4]}</div>
          <div>{reviewsMeta.ratings[3]}</div>
          <div>{reviewsMeta.ratings[2]}</div>
          <div>{reviewsMeta.ratings[1]}</div>
        </div>
      </div>
      <div>{recommended}% recommend this product!</div>
      <ProductBreakdown />
    </div>
  )
}

export default RatingBreakdown;