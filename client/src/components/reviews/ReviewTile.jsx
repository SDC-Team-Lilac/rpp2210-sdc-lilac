import React from 'react';
import axios from 'axios';
import StarRating from './StarRating.jsx'
const ReviewTile = ({ review, updateReviews }) => {


  const renderImages = () => {
    let photoResults = [];
    if (review.photos.length === 0) {
      return null;
    } else {
      for (let i = 0; i < review.photos.length; i ++) {
        let image = review.photos[i];
        console.log('----image', image)
        if (typeof image === 'object'){
           photoResults.push(<a target="_blank" href={image.url}><img className="reviews image" src={image.url} alt="Image of reviewed item."/></a>)
        } else {
          hotoResults.push(<a target="_blank" href={image}><img className="reviews image" src={image} alt="Image of reviewed item."/></a>)
        }
      }
    }
    return photoResults;

  }

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
      <div className="reviews reviewTile summary">{review.summary}</div>
      <div className="reviews reviewTile body" >{review.body}</div>
      <div className="reviews reviewTile helpfulReport">Helpful? <a href='' onClick={handleHelpful}> Yes {review.helpfulness}</a> | <a href='' onClick={handleReport}>Report</a></div>
      <div>{renderImages()} </div>
    </div>
  )
}

export default ReviewTile;