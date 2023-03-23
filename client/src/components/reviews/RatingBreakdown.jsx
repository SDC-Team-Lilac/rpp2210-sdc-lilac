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

  const getBarWidths = (ratingNumber) => {
    let greenBar = ((reviewsMeta.ratings[ratingNumber]/totalNumberReviews) * 100).toFixed(2)
    let grayBar = 100 - greenBar;
    return {greenWidth: `${greenBar}%`, grayWidth: `${grayBar}%`}
  }

  const fiveStar = getBarWidths

  console.log('THE THING', getBarWidths(5).greenWidth)

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
      Rating Breakdown!
      <div className="reviews ratingBreakdown" >
        <div className="reviews allRatingBars">
          <div className="reviews fullRatingBar">
            <div className="reviews leftRatingBar">5 Stars:</div>
            <div className="reviews bar rating5Bar">
              <div className="reviews bar rating5Bar green" style={{width: `${getBarWidths(5).greenWidth}`}}></div>
              <div className="reviews bar rating5Bar gray" style={{width: `${getBarWidths(5).grayWidth}`}}></div>
              </div>
              <div className="reviews rightRatingBar">{reviewsMeta.ratings[5]}</div>
          </div>
          <div className="reviews fullRatingBar">
            <div className="reviews leftRatingBar">4 Stars:</div>
            <div className="reviews bar rating4Bar">
              <div className="reviews bar rating4Bar green" style={{width: `${getBarWidths(4).greenWidth}`}}></div>
              <div className="reviews bar rating4Bar gray" style={{width: `${getBarWidths(4).grayWidth}`}}></div>
              </div>
              <div className="reviews rightRatingBar">{reviewsMeta.ratings[4]}</div>
          </div>
          <div className="reviews fullRatingBar">
            <div className="reviews leftRatingBar">3 Stars:</div>
            <div className="reviews bar rating3Bar">
              <div className="reviews bar rating3Bar green" style={{width: `${getBarWidths(3).greenWidth}`}}></div>
              <div className="reviews bar rating3Bar gray" style={{width: `${getBarWidths(3).grayWidth}`}}></div>
              </div>
              <div className="reviews rightRatingBar">{reviewsMeta.ratings[3]}</div>
          </div>
          <div className="reviews fullRatingBar">
            <div className="reviews leftRatingBar">2 Stars:</div>
            <div className="reviews bar rating2Bar">
              <div className="reviews bar rating2Bar green" style={{width: `${getBarWidths(2).greenWidth}`}}></div>
              <div className="reviews bar rating2Bar gray" style={{width: `${getBarWidths(2).grayWidth}`}}></div>
              </div>
              <div className="reviews rightRatingBar">{reviewsMeta.ratings[2]}</div>
          </div>
          <div className="reviews fullRatingBar">
            <div className="reviews leftRatingBar">1 Stars:</div>
            <div className="reviews bar rating1Bar">
              <div className="reviews bar rating1Bar green" style={{width: `${getBarWidths(1).greenWidth}`}}></div>
              <div className="reviews bar rating1Bar gray" style={{width: `${getBarWidths(1).grayWidth}`}}></div>
              </div>
              <div className="reviews rightRatingBar">{reviewsMeta.ratings[1]}</div>
          </div>
        </div>
      </div>
      <div>{recommended}% recommend this product!</div>
      <ProductBreakdown />
    </div>
  )
}

export default RatingBreakdown;