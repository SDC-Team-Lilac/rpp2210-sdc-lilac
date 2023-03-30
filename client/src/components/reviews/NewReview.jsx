import React, { useState } from 'react';
import axios from 'axios';
import Characteristics from './Characteristics.jsx'

const NewReview = ({reviewsMeta, onClose, characteristicSelections }) => {

  /* This component will:
    1) Need to control the inputs of each field in their own state
    2) Need to send a post request to reviews
    3) Need data:
      - product name
      - product characteristics
   */

  const [overall, setOverall] = useState(null)
  const [ratingDescription, setRatingDescription] = useState(null);
  const [recommend, setRecommend] = useState(false)
  const [characteristics, setCharacteristics] = useState({})
  const [summary, setSummary] = useState('Test Summary')
  const [body, setBody] = useState('Test body')
  const [photos, setPhotos] = useState([])
  const [nickname, setNickname] = useState('Nickname')
  const [email, setEmail] = useState('myemail@email.com')
  const [starPercentage, setStarPercentage] = useState('0%')





  var fullReview = {
    product_id: Number(reviewsMeta.product_id),
    rating: overall,
    summary: summary,
    body: body,
    recommend: recommend,
    name: nickname,
    email: email,
    photos: photos,
    characteristics: characteristics
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/reviews', fullReview)
    .then((success) => {console.log('Succesfully added new review')})
    .catch((err) => {console.log('ERROR adding new review', err)})
    onClose();
  }

  const handleChange = (e) => {
    e.preventDefault();
    var input = e.target.value
  }


  //POTENTIAL REFACTOR, MAKE ONE HANDLE CLICK TACKLE ALL CASES

  const handleClick = (e, charValue) => {
    let attributeName = e.target.attributes.name.nodeValue;
    if (attributeName.slice(0, attributeName.length-1) === "star") {
      const starMapping = {
        star1: {percent: '20%', description: "Poor"},
        star2: {percent: '40%', description: "Fair"},
        star3: {percent: '60%', description: "Average"},
        star4: {percent: '80%', description: "Good"},
        star5: {percent: '100%', description: "Great"}
      }
      setStarPercentage(starMapping[attributeName].percent)
      setOverall(Number(attributeName.slice(-1)))
      setRatingDescription(starMapping[attributeName].description)
    } else if (attributeName === "recommend") {
      let option = e.target.value;
      const recommendMap = {
        Yes: true,
        No: false
      }
      setRecommend(recommendMap[option])
    } else {
      let newCharacteristicRatings = {...characteristics, ...{[attributeName]: charValue}};
      setCharacteristics(newCharacteristicRatings);
    }
  }

  const loadCharacteristics = () => {
    var characteristicReview = [];
    var characteristics = reviewsMeta.characteristics
    var key = 1;
    for (const individualCharacteristic in characteristics) {
      characteristicReview.push(<Characteristics key={key} handleClick={handleClick}characteristicId={characteristics[individualCharacteristic].id} characteristic={individualCharacteristic} characteristicSelections={characteristicSelections}/>)
      key+=1;
    }
    return characteristicReview;
  }

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   let starName = e.target.attributes.name.nodeValue;
  //   const starMapping = {
  //     star1: {percent: '20%', description: "Poor"},
  //     star2: {percent: '40%', description: "Fair"},
  //     star3: {percent: '60%', description: "Average"},
  //     star4: {percent: '80%', description: "Good"},
  //     star5: {percent: '100%', description: "Great"}
  //   }
  //   setStarPercentage(starMapping[starName].percent)
  //   setOverall(Number(starName.slice(-1)))
  //   setRatingDescription(starMapping[starName].description)
  // }

  // const handleRecommendClick = (e) => {
  //   let option = e.target.value;
  //   const recommendMap = {
  //     Yes: true,
  //     No: false
  //   }
  //   setRecommend(recommendMap[option])
  // }

  // const handleCharacteristicClick = () => {

  // }

  return (
    <div data-testid='newReview-1' className="reviews newReview">
      <form onSubmit={handleSubmit}>
        Write your review about PRODUCT_NAME
        <div className="reviews newReviewItem overall">
          <label >Overall Rating</label>
          <div className="reviews newReviewItem stars">
            <span style={{width: starPercentage}} className="newReviewStars" >
            <span className="reviews newReviewItem fullStar1" name="star1" onClick={handleClick}>&#9733;</span>
            <span className="reviews newReviewItem fullStar2" name="star2" onClick={handleClick}>&#9733;</span>
            <span className="reviews newReviewItem fullStar3" name="star3" onClick={handleClick}>&#9733;</span>
            <span className="reviews newReviewItem fullStar4" name="star4" onClick={handleClick}>&#9733;</span>
            <span className="reviews newReviewItem fullStar5" name="star5" onClick={handleClick}>&#9733;</span>
            </span>
            <span className="reviews newReviewItem star1" name="star1" onClick={handleClick}>&#9734;</span>
            <span className="reviews newReviewItem star2" name="star2" onClick={handleClick}>&#9734;</span>
            <span className="reviews newReviewItem star3" name="star3" onClick={handleClick}>&#9734;</span>
            <span className="reviews newReviewItem star4" name="star4" onClick={handleClick}>&#9734;</span>
            <span className="reviews newReviewItem star5" name="star5" onClick={handleClick}>&#9734;</span>
          </div>
          {ratingDescription ? <div> {ratingDescription} </div>: null}
        </div>
        <div className="reviews newReviewItem recommend">
          <label>Do you recommend this product?</label>
            <label for="Yes">Yes</label>
            <input type="radio" name="recommend" value="Yes" onClick={handleClick}></input>
          <label for="No">No</label>
            <input type="radio" name="recommend" value="No" onClick={handleClick}></input>
        </div>
        <div className="reviews newReviewItem characteristic">
          {/* <Characteristics characteristics={reviewsMeta.characteristics} characteristicSelections={characteristicSelections}/> */}
          Please rate the following Characteristics!
          {loadCharacteristics()}
        </div>
        <div className="reviews newReviewItem summary">
          <label>Review Summary</label>
          <input type="text"></input>
        </div>
        <div className="reviews newReviewItem body">
          <label>Review Body</label>
          <input type="text"></input>
        </div>
        <div className="reviews newReviewItem photos">
          <label>Upload Your Photos</label>
          <input type="text"></input>
        </div>
        <div className="reviews newReviewItem nickname">
          <label>What is your nickname?</label>
          <input type="text"></input>
        </div>
        <div className="reviews newReviewItem email">
          <label>What is your email?</label>
          <input type="text"></input>
        </div>
        <div className="reviews newReviewItem submit">
          <label>Submit Review</label>
          <input type="submit"></input>
        </div>
        <button onClick={onClose}>Close</button>
      </form>
    </div>
  )
}

export default NewReview;