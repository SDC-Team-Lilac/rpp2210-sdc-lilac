import React from 'react';
import axios from 'axios';
import StarRating from './StarRating.jsx'
const ReviewTile = ({ review, updateReviews }) => {

  /* This component:
    1) needs an individual review
    2) Will render data for: star rating, date of review, review summary, review body, recommend, reviewer name, response to review, rating helpfulness
    3) Needs to have an option for them to click if this rating was helpful then send put request
    4) Needs to have an option for them to click and report this then send put request
    */

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
    <div className="reviews reviewTile" style={{border: '2px solid purple'}}>
      <StarRating rating={review.rating}/>
      <div>Summary: {review.summary}</div>
      <div>Body: {review.body}</div>
      <div>Reviewer Name: {review.reviewer_name}</div>
      <div>Date Reviewed: {review.date}</div>
      <div>Helpfulness Rating: {review.helpfulness}</div>
      {/* <div>Review Image: <img src={review.photos[0].url}/> </div> */}
      <button onClick={handleHelpful}>Mark as Helpful</button>
      <button onClick={handleReport}>Report Review</button>
    </div>
  )
}

export default ReviewTile;