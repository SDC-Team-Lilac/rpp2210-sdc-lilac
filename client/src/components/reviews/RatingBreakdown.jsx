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
    // console.log('wahts the count then', count)
    updateTotalNumberReviews(count);
  }

  useEffect(() => {
    // console.log('Ran useEffect in ratingbreakdown')
    countReviews()
    percentRecommend()
  }, [])

  return (
    <div data-testid='ratingBreakdown-1' style={{border: '5px solid green'}}> RatingBreakdown!
      <div className="ratingSummary" style={{border: '2px solid blue'}}>
        <div> {averageStarRating ? averageStarRating.toFixed(1) : null} </div>
        <StarRating rating={averageStarRating}/>
      </div>
      <div>There are {totalNumberReviews} reviews!</div>
      <div style={{border: '2px solid blue'}}>
      <div>5 stars: {reviewsMeta.ratings[5]}</div>
      <div>4 stars: {reviewsMeta.ratings[4]}</div>
      <div>3 stars: {reviewsMeta.ratings[3]}</div>
      <div>2 stars: {reviewsMeta.ratings[2]}</div>
      <div>1 stars: {reviewsMeta.ratings[1]} </div>
      <div>{recommended}% recommend this product!</div>
      </div>
      <ProductBreakdown />
    </div>
  )
}

export default RatingBreakdown;