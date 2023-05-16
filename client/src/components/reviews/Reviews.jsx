import React, { useState, useEffect, useRef } from 'react';
import RatingBreakdown from './RatingBreakdown.jsx'
import ReviewList from './ReviewList.jsx'
import NewReview from './NewReview.jsx'
import { RatingCalculator } from '../relatedProducts/helperFunctions.jsx'
import axios from 'axios';
import useInteraction from '../../useInteraction.jsx';

const Reviews = ({ updateSelectedProduct, productId, productName, updateAverageRating, averageStarRating, updateTotalNumberReviews, totalNumberReviews, reviewsRef }) => {

  const [reviews, setReviews] = useState([])
  const [filteredReviews, setFilteredReviews] = useState([])
  const [reviewsMeta, setReviewsMeta] = useState(null)
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('relevant')
  //Could refactor to get reviews count first.
  const [count, setCount] = useState(1000000)
  const [filters, setFilters] = useState([]);

  const characteristicSelections = {
    Size: {1: 'A size too small', 2: '½ a size too small', 3: 'Perfect', 4: '½ a size too big', 5: 'A size too wide'},
    Width: {1: 'Too narrow', 2: 'Slightly narrow', 3: 'Perfect', 4: 'Slightly wide', 5: 'Too wide'},
    Comfort: {1: 'Uncomfortable', 2: 'Slightly uncomfortable', 3: 'Ok', 4: 'Comforatble', 5: 'Perfect'},
    Quality: {1: 'Poor', 2: 'Below Average', 3: 'What I expected', 4: 'Pretty great', 5: 'Perfect'},
    Length: {1: 'Runs short', 2: 'Runs slightly short', 3: 'Perfect', 4: 'Runs slightly long', 5: 'Runs long'},
    Fit: {1: 'Runs tight', 2: 'Runs slightly tight', 3: 'Perfect', 4: 'Runs slightly long', 5: 'Runs long'}
  }

  const getReviews = (currentCount, currentPage, currentSort) => {
    return axios.get('/reviews', {
      params: {
        product_id: productId,
        count: currentCount,
        page: currentPage,
        sort: currentSort
      }
    })
  }

  const getReviewsMeta = () => {
    axios.get('/reviews/meta', {
      params: {
        product_id: productId
      }
    })
    .then((result) => {
      setReviewsMeta(result.data);
      var averageRating = RatingCalculator(result.data.ratings)
      updateAverageRating(averageRating)
    })
    .catch((err) => {console.log('Trouble getting reviews meta from client')});
  }

  const updateReviews = () => {
    getReviews(count, page, sort)
    .then((result) => {
      if (result.data.results.length === 0) {
        updateAverageRating(0)
      }
      setReviews(result.data.results);
    })
    .catch((err) => {console.log('Trouble getting reviews from client')});
  }


  const sortReviews = (e) => {
    e.preventDefault();
    var newSort = e.target.value.toLowerCase()
    setSort(newSort)

  }

  const updateFilters = (e, stars) => {
    e.preventDefault();
    if (!filters.includes(stars)){
      setFilters([...filters, stars]);
    } else {
        var newFilters = filters.filter((currentFilter)=>{
          return currentFilter !== stars
        });
        setFilters(newFilters);
      }
  }

  const filterReviews = () => {
    var filteredReviews = reviews.filter((review)=> {
      return filters.includes(review.rating);
    });

    if (filters.length !== 0) {
      setFilteredReviews(filteredReviews);
    } else {
      setFilteredReviews(reviews);
    }
  }

  //Key Word Search low priority feature. Will implement at the end if time allows.
  // const searchReviews = () => {
  //   let searchedReviews = filteredReviews.filter(())
  // }

  useEffect(() => {
    updateReviews()
    getReviewsMeta()
  }, [])

  useEffect(() => {
    updateReviews()
    getReviewsMeta()
  }, [productId])


  useEffect(() => {
    updateReviews()
    filterReviews()
  }, [sort])

  useEffect(() => {
    filterReviews()
  }, [filters])

  useEffect(() => {
    filterReviews()
  }, [reviews])



  return (
    <div data-testid='reviews-1' onClick={(event)=>useInteraction(event, 'Reviews')}>
      <div className="reviews reviewsMain" ref={reviewsRef}>
        { reviewsMeta!== null ? <RatingBreakdown reviewsMeta={reviewsMeta} filters={filters} updateFilters={updateFilters} totalNumberReviews={totalNumberReviews} updateTotalNumberReviews={updateTotalNumberReviews} averageStarRating={averageStarRating} characteristicSelections={characteristicSelections}/> : null }
        { filteredReviews.length !== 0 ? <ReviewList reviews={filteredReviews}  sortReviews={sortReviews} updateReviews={updateReviews} reviewsMeta={reviewsMeta} characteristicSelections={characteristicSelections} productName={productName}/> : null}
      </div>
    </div>
  )
}

export default Reviews;