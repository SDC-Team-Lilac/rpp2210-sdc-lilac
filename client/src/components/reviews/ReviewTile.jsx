import React from 'react';

const ReviewTile = ({ review }) => {

  /* This component:
    1) needs an individual review
    2) Will render data for: star rating, date of review, review summary, review body, recommend, reviewer name, response to review, rating helpfulness
   */

    console.log(review.photos[0].url)
  return (
    <div style={{border: '2px solid purple'}}>
    <div>Summary: {review.summary}</div>
    <div>Body: {review.body}</div>
    <div>Reviewer Name: {review.reviewer_name}</div>
    <div>Date Reviewed: {review.date}</div>
    <div>Helpfulness Rating: {review.helpfulness}</div>
    <div>Review Image: <img src={review.photos[0].url}/> </div>
    </div>
  )
}

export default ReviewTile;