import React, { useState } from 'react';
import axios from 'axios';
import Characteristics from './Characteristics.jsx'

const NewReview = ({ productId, reviewsMeta }) => {

  /* This component will:
    1) Need to control the inputs of each field in their own state
    2) Need to send a post request to reviews
    3) Need data:
      - product name
      - product characteristics
   */
  // console.log('reviewsMeta', reviewsMeta)

  const [overall, setOverall] = useState('1')
  const [recommend, setRecommend] = useState(false)
  const [characteristics, setCharacteristics] = useState({})
  const [summary, setSummary] = useState('Test Summary')
  const [body, setBody] = useState('Test body')
  const [photos, setPhotos] = useState([])
  const [nickname, setNickname] = useState('Nickname')
  const [email, setEmail] = useState('myemail@email.com')






  var fullReview = {
    product_id: productId,
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
    console.log('Sumitted Review')
    console.log('fullReview', fullReview)
    axios.post('/reviews', fullReview)
    .then((success) => {console.log('Succesfully added new review')})
    .catch((err) => {console.log('ERROR adding new review', err)})
  }


  const handleChange = (e) => {
    e.preventDefault();
    var input = e.target.value
  }
  return (
    <div style={{border: '5px solid orange'}} > NewReview!
      <form onSubmit={handleSubmit}>
        Write your review about PRODUCT_NAME
        <div>
          <label>Overall Rating</label>
          <input type="text"></input>
        </div>
        <div>
          <label>Do you recommend this product?</label>
          <input type="text"></input>
        </div>
        <div>
          <Characteristics characteristics={reviewsMeta.characteristics}/>
        </div>
        <div>
          <label>Review Summary</label>
          <input type="text"></input>
        </div>
        <div>
          <label>Review Body</label>
          <input type="text"></input>
        </div>
        <div>
          <label>Upload Your Photos</label>
          <input type="text"></input>
        </div>
        <div>
          <label>What is your nickname?</label>
          <input type="text"></input>
        </div>
        <div>
          <label>What is your email?</label>
          <input type="text"></input>
        </div>
        <div>
          <label>Submit Review</label>
          <input type="submit"></input>
        </div>
      </form>
    </div>
  )
}

export default NewReview;