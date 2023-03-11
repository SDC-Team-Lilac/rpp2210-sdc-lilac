import React, { useState } from 'react';

const NewReview = () => {

  /* This component will:
    1) Need to control the inputs of each field in their own state
    2) Need to send a post request to reviews
    3) Need data:
      - product name
      - product characteristics
   */

  const [overall, setOverall] = useState('')
  const [recommend, setRecommend] = useState(false)
  const [characteristics, setCharacteristics] = useState({})
  const [summary, setSummary] = useState('')
  const [body, setBody] = useState('')
  const [photos, setPhotos] = useState([])
  const [nickname, setNickname] = useState('')
  const [email, setEmail] = useState('')


  return (
    <div style={{border: '5px solid orange'}} > NewReview!
      <form>
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
          <label>Characteristics</label>
          <input type="text"></input>
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