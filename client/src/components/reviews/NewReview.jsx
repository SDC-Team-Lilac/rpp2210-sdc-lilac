import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Characteristics from './Characteristics.jsx'
import { storage } from '../qa/AddPhoto.jsx';
import { ref,  uploadBytes, getDownloadURL } from "firebase/storage";
import {v4} from 'uuid';


const NewReview = ({reviewsMeta, onClose, characteristicSelections, productName }) => {

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
  const [photos, setPhotos] = useState(null)
  const [photoURLs, setPhotoURLs] = useState([]);
  const [nickname, setNickname] = useState('Nickname')
  const [email, setEmail] = useState('myemail@email.com')
  const [starPercentage, setStarPercentage] = useState('0%')
  const modalRef = useRef(null);



  useEffect(() => {
    console.log(modalRef);
    modalRef.current.scrollIntoView({behavior: "smooth"});
  },[])

  var fullReview = {
    product_id: Number(reviewsMeta.product_id),
    rating: overall,
    summary: summary,
    body: body,
    recommend: recommend,
    name: nickname,
    email: email,
    photos: photoURLs,
    characteristics: characteristics
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fullReview);
    axios.post('/reviews', fullReview)
    .then((success) => {console.log('Succesfully added new review')})
    .catch((err) => {console.log('ERROR adding new review', err)})
    onClose();
  }

  const handleChange = (e) => {
    e.preventDefault();
    let attributeName = e.target.attributes.name.nodeValue;
    let input = e.target.value
    if (attributeName === 'summary'){
      setSummary(input);
    } else if (attributeName === 'body') {
      setBody(input);
    } else if (attributeName === 'photos') {
      setPhotos(e.target.files);
    } else if (attributeName === 'nickname') {
      setNickname(input);
    } else if (attributeName === 'email') {
      setEmail(input);
    }
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

  const uploadFirebase = (e) => {
    e.preventDefault();
    if (photos === null) {
      return null;
    }
    let newPhotoURLS = [];
    for (let i = 0; i < photos.length; i ++) {
      let photo = photos[i];
      const imageRef = ref(storage, `reviewImages/${photo.name + v4()}`);
      uploadBytes(imageRef, photo)
      .then ((snapshot) => {
        console.log("Image Uploaded");
        return getDownloadURL(snapshot.ref)
      })
      .then((downloadURL) => {
        console.log('Download URL', downloadURL);
        newPhotoURLS.push(downloadURL);
      })
      .catch(() => {
        console.log('Problem uploading image!')
      })
    }
    setPhotoURLs(newPhotoURLS);
    alert('Succesfully Uploaded')
  }

  return (
    <div data-testid='newReview-1' className="reviews newReview" ref={modalRef}>
      <form onSubmit={handleSubmit} className="reviews newReviewForm">
        <div className="reviews newReviewFormProduct"> Write your review about {productName}! </div>
        <div className="reviews newReviewItem overall">
          <label className="reviews newReviewItem overallLabel">Overall Rating</label>
          <div className="reviews newReviewItem starRated"> Rated: {ratingDescription ? <span> {ratingDescription} </span>: ''}</div>
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
        </div>
        <div className="reviews newReviewItem recommend">
          <label className="reviews newReviewItem recommendLabel">Do you recommend this product?</label>
          <div className="reviews newReviewItem recommendOptions">
            <label for="Yes">Yes</label>
              <input type="radio" name="recommend" value="Yes" onClick={handleClick}></input>
            <label for="No">No</label>
              <input type="radio" name="recommend" value="No" onClick={handleClick}></input>
            </div>
        </div>
        <div className="reviews newReviewItem characteristic">
          {/* <Characteristics characteristics={reviewsMeta.characteristics} characteristicSelections={characteristicSelections}/> */}
          Please rate the following Characteristics:
          <div style={{whiteSpace:"nowrap"}}>{loadCharacteristics()}</div>
        </div>
        <div className="reviews newReviewItem summary">
          <label className="reviews newReviewItem summaryLabel">Review Summary</label>
          <input className="reviews newReviewItem summaryOptions" name="summary" type="text" placeholder="Example: Best purchase ever!" maxLength="60" onChange={handleChange}></input>
        </div>
        <div className="reviews newReviewItem body">
          <label className="reviews newReviewItem bodyLabel">Review Body</label>
          <textarea  className="reviews newReviewItem bodyOptions" name="body" rows="2" cols="10" onChange={handleChange}></textarea>
        </div>
        <div className="reviews newReviewItem photos">
          <label className="reviews newReviewItem photosLabel">Upload Your Photos</label>
          <input className="reviews newReviewItem photosOptions" name="photos" type="file" accept="image/*" multiple onChange={handleChange}></input>
          <button className="reviews newReviewItem photosOptions"onClick={uploadFirebase}>Upload</button>
        </div>
        <div className="reviews newReviewItem nickname">
          <label className="reviews newReviewItem nicknameLabel">What is your nickname?</label>
          <input className="reviews newReviewItem nicknameOptions" name="nickname" type="text" placeholder="Example: jackson11!"maxLength="60" onChange={handleChange}></input>
        </div>
        <div className="reviews newReviewItem email">
          <label className="reviews newReviewItem emailLabel">What is your email?</label>
          <input className="reviews newReviewItem emailOptions" name="email" type="text" placeholder="Example: jackson11@email.com" maxLength="60" onChange={handleChange}></input>
        </div>
        <div className="reviews newReviewItem emailMessage">For authentication reasons, you will not be emailed!</div>
        <div className="reviews newReviewItem submit">
          <label className="reviews newReviewItem submitLabel">Submit Review</label>
          <input className="reviews newReviewItem submitOptions" type="submit"></input>
        </div>
        {/* <button onClick={onClose}>Close</button> */}
      </form>
    </div>
  )
}

export default NewReview;