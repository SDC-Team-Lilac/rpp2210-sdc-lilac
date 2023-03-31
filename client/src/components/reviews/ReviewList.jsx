import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import ReviewTile from './ReviewTile.jsx';
import KeywordSearch from './KeywordSearch.jsx';
import SortOptions from './SortOptions.jsx';
import NewReview from './NewReview.jsx';


const ReviewsList = ( { reviews, sortReviews, updateReviews, reviewsMeta, updateReviewCount, characteristicSelections, productName }) => {

  const [currentReviews, setCurrentReviews] = useState([]);
  const [maxReviews, setMaxReviews] = useState(2);
  const [showMoreButton, setShowMoreButton] = useState(false)
  const [showNewReview, setShowNewReview] = useState(false)

  const updateCurrentReviews = (reviews) => {
    var reviewsHolder = []
    for (let i = 0; i < maxReviews; i ++) {
      if (reviews[i]) {
        reviewsHolder.push(reviews[i]);
      }
    }
    setCurrentReviews(reviewsHolder);
  }
  const updateShowMoreButton = () => {
    if (reviews.length !== 0) {
      setShowMoreButton(true);
    }
  }
  const addReviews = (e) => {
    e.preventDefault();
    setMaxReviews(maxReviews + 2)
  }
  const showModal = (e) => {
    e.preventDefault();
    setShowNewReview(true);
  }

  const hideModal = (e) => {
    e.preventDefault();
    setShowNewReview(false);
  }

  useEffect(() => {
    updateCurrentReviews(reviews);
    updateShowMoreButton()
  }, [])

  useEffect(() => {
    updateCurrentReviews(reviews)
    if (maxReviews >= reviews.length) {
      setShowMoreButton(false);
    }
  }, [maxReviews])

  useEffect(() => {
    updateCurrentReviews(reviews)
  }, [reviews])


  return (

    <div data-testid='reviewList-1' className="reviews reviewList">
      <SortOptions sortReviews={sortReviews}/>
      {/* <KeywordSearch /> */}
      <div style={{maxHeight: '450px', overflowY: 'auto'}} className="reviews fullReviewList">
        {currentReviews.map((review) => {
          return (
            <ReviewTile key={review.review_id} review={review} updateReviews={updateReviews}/>
          )
        })}
      </div>
      <div className="reviews reviewListButtons">
        {showMoreButton ? <button onClick={addReviews}>More Reviews</button>  : null}
        <button onClick={showModal}>Add Review</button>
      </div>
      {showNewReview && createPortal(
        <NewReview reviewsMeta={reviewsMeta} characteristicSelections={characteristicSelections} productName={productName} onClose={hideModal}/>,
        document.body
      )}

    </div>
  )
}

export default ReviewsList;