import React, { useState, useEffect } from 'react';
import ProductBreakdown from './ProductBreakdown.jsx'
import StarRating from './StarRating.jsx'

const RatingBreakdown = ({ reviewsMeta, averageStarRating, updateTotalNumberReviews, totalNumberReviews, updateFilters, filters,  characteristicSelections}) => {

  /*  This Component will:
      1)
   */

  const [recommended, setRecommended] = useState(null);
  const [mousedOver, setMousedOver] = useState(false);

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

  const handleMouseOver = (e) => {
    e.preventDefault();
    e.currentTarget.style.backgroundColor = '#89CFF0'
  }

  const handleMouseOut = (e) => {
    e.preventDefault();
    e.currentTarget.style.backgroundColor = null
  }



  const showBarSelection = (filters, star) => {
    if (filters.includes(star)) {
      return " selected"
    } else {
      return ""
    }
  }

  useEffect(() => {
    countReviews()
    percentRecommend()
  }, [])

  useEffect(() => {
    countReviews()
    percentRecommend()
  }, [reviewsMeta])

  // useEffect(() => {
  //   showBarSelection();
  // }, [filters])

  return (
    <div data-testid='ratingBreakdown-1'> Ratings & Reviews
      <div className="reviews ratingSummary">
        <div className="reviews rating"> {averageStarRating ? averageStarRating.toFixed(1) : null} </div>
        <StarRating rating={averageStarRating}/>
      </div>
      <div>There are {totalNumberReviews} reviews!</div>
      Rating Breakdown!
      <div className="reviews ratingBreakdown" >
        <div className="reviews allRatingBars">
          <div className={"reviews fullRatingBar" + showBarSelection(filters, 5)} onClick={(e) => {updateFilters(e, 5);}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div className="reviews leftRatingBar">5 Stars:</div>
            <div className="reviews bar rating5Bar">
              <div className="reviews bar rating5Bar green" style={{width: `${getBarWidths(5).greenWidth}`}}></div>
              <div className="reviews bar rating5Bar gray" style={{width: `${getBarWidths(5).grayWidth}`}}></div>
              </div>
              <div className="reviews rightRatingBar">{reviewsMeta.ratings[5]}</div>
          </div>
          <div className={"reviews fullRatingBar" + showBarSelection(filters, 4)} onClick={(e) => {updateFilters(e, 4);}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div className="reviews leftRatingBar">4 Stars:</div>
            <div className="reviews bar rating4Bar">
              <div className="reviews bar rating4Bar green" style={{width: `${getBarWidths(4).greenWidth}`}}></div>
              <div className="reviews bar rating4Bar gray" style={{width: `${getBarWidths(4).grayWidth}`}}></div>
              </div>
              <div className="reviews rightRatingBar">{reviewsMeta.ratings[4]}</div>
          </div>
          <div className={"reviews fullRatingBar" + showBarSelection(filters, 3)} onClick={(e) => {updateFilters(e, 3);}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div className="reviews leftRatingBar">3 Stars:</div>
            <div className="reviews bar rating3Bar">
              <div className="reviews bar rating3Bar green" style={{width: `${getBarWidths(3).greenWidth}`}}></div>
              <div className="reviews bar rating3Bar gray" style={{width: `${getBarWidths(3).grayWidth}`}}></div>
              </div>
              <div className="reviews rightRatingBar">{reviewsMeta.ratings[3]}</div>
          </div>
          <div className={"reviews fullRatingBar" + showBarSelection(filters, 2)} onClick={(e) => {updateFilters(e, 2);}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div className="reviews leftRatingBar">2 Stars:</div>
            <div className="reviews bar rating2Bar">
              <div className="reviews bar rating2Bar green" style={{width: `${getBarWidths(2).greenWidth}`}}></div>
              <div className="reviews bar rating2Bar gray" style={{width: `${getBarWidths(2).grayWidth}`}}></div>
              </div>
              <div className="reviews rightRatingBar">{reviewsMeta.ratings[2]}</div>
          </div>
          <div className={"reviews fullRatingBar" + showBarSelection(filters, 1)} onClick={(e) => {updateFilters(e, 1);}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
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
      <ProductBreakdown characteristics={reviewsMeta.characteristics} characteristicSelections={characteristicSelections}/>
    </div>
  )
}

export default RatingBreakdown;