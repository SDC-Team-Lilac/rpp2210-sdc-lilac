import React from 'react';
import axios from 'axios';
import StarRating from './StarRating.jsx'
const ReviewTile = ({ review, updateReviews }) => {


//TODO: Implement only clicking helpfulness once.
  const handleHelpful = (e) => {
    e.preventDefault();
    console.log('Marked Helpful')
    axios.put('/reviews/helpful', {id: review.review_id})
    .then((success) => {console.log('Marked Review as Helpful!'); updateReviews()})
    .catch((err) => {console.log('ERROR marking Review as Helpful!', err)})
  }

  const handleReport = (e) => {
    e.preventDefault();
    console.log('Reported Review')
    axios.put('/reviews/report', {id: review.review_id})
    .then((success) => {console.log('Reported Review!!'); updateReviews()})
    .catch((err) => {console.log('ERROR reporting review!', err)})
  }

  return (
    <div data-testid='reviewTile-1' className="reviews reviewTile fullTile">
      <div className="reviews reviewTile topRow">
      <div><StarRating rating={review.rating}/></div><div>{review.reviewer_name}, {review.date}</div>
      </div>
      <div>Summary: {review.summary}</div>
      <div>Body: {review.body}</div>

      <div>Was this review helpful? <a href='' onClick={handleHelpful}>Yes</a>{review.helpfulness}</div>
      {/* <div>Review Image: <img src={review.photos[0].url}/> </div> */}
      <button onClick={handleReport}>Report Review</button>
    </div>
  )
}

export default ReviewTile;