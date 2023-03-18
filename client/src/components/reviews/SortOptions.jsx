import React from 'react';

const SortOptions = ({sortReviews}) => {

  /* This component will:
    1) Include a dropdown that will have helful, newest, relevant
    2) Have a state set for the current one, defalted to Relevant
    3) Retrieve a sort change function from the Reviews component to change state of reviews when this is changed
  */

  return (
    <div data-testid='sortOptions-1' className="reviews sortOptions" style={{border: '2px solid black'}}>
      <label>Sort By:</label>
      <select onClick={sortReviews}>
        <option>Relevant</option>
        <option>Helpful</option>
        <option>Newest</option>
      </select>
       </div>
  )
}

export default SortOptions;