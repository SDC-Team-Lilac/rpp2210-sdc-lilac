import React from 'react';

const BreakdownBar = ({characteristic}) => {


  /*  This Component will:
      1)
   */

  return (
    <div data-testid='breakdownBar-1' className="reviews breakdownBar">
      <div className="reviews breakdownBar characteristic">{characteristic}</div>
      <div className="reviews breakdownBar fullBar">
        <div className="reviews breakdownBar bar"></div>
        <div>1 3 5</div>
        <div>▼</div>
      </div>
    </div>
  )
}

export default BreakdownBar