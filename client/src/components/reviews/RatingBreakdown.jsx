import React from 'react';
import ProductBreakdown from './ProductBreakdown.jsx'

const RatingBreakdown = () => {

  /*  This Component will:
      1)
   */

  return (
    <div style={{border: '5px solid green'}}> RatingBreakdown!
      <div style={{border: '2px solid blue'}}> Rating Summary </div>
      <div style={{border: '2px solid blue'}}> Recommendations </div>
      <div style={{border: '2px solid blue'}}> Breakdown </div>
      <ProductBreakdown />
    </div>
  )
}

export default RatingBreakdown;