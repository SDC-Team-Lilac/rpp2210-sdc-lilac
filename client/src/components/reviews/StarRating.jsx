import React, {useEffect, useState} from 'react';

const StarRating = ({ rating }) => {

  const [starRating, setStarRating] = useState(0)
  const [percentage, setPercentage] = useState('')

  var percentageMap = {
    25: 7,
    50: 10,
    75: 13,
    1: 20,
    2: 40,
    3: 60,
    4: 80,
    5: 100
  }

  var quarterRating = (rating) => {
    var result = (Math.round(Number(rating)  * 4) / 4).toFixed(2)
    setStarRating(result)
  }

  var updatePercentage = (starRating) => {
    var split = starRating.toString().split('.')
    if (split[1] !== '00') {
      var percentage = `${percentageMap[split[0]] + percentageMap[split[1]]}%`
      setPercentage(percentage)
    } else {
      setPercentage(`${percentageMap[split[0]]}%`)
    }
  }

  useEffect(() => {
    quarterRating(rating)
  }, [])

  useEffect(() => {
    quarterRating(rating)
  }, [rating])

  useEffect(() => {
    updatePercentage(starRating)
  }, [starRating])

  if (rating) {
  return (
    <div data-testid='starRating-1' className="reviews starRatings">
      <span style={{width: percentage}}className="fullStars" >
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      &#9734;&#9734;&#9734;&#9734;&#9734;
    </div>
  )
  } else {
    return (
      'There are no reviews!'
    )
  }
}





export default StarRating;
