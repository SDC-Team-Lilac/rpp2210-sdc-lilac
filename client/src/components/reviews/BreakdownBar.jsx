import React from 'react';

const BreakdownBar = ({characteristic, characteristicSelections}) => {


  /*  This Component will:
      1)
   */
console.log('characteristicSelections',characteristicSelections[characteristic])

  return (
    <div data-testid='breakdownBar-1' className="reviews breakdownBar">
      <div className="reviews breakdownBar characteristic">{characteristic}</div>
      <div className="reviews breakdownBar fullBar">
        <div className="reviews breakdownBar charbar"><div className="reviews breakdownBar arrow" > </div></div>
        <div className="reviews breakdownBar ratingScale">
          <div className="reviews breakdownBar ratingScaleNums"><div>1</div><div>3</div><div>5</div></div>
          <div className="reviews breakdownBar ratingScaleCharacteristics"><div>({characteristicSelections[characteristic][1]})</div><div>({characteristicSelections[characteristic][3]})</div><div>({characteristicSelections[characteristic][5]})</div></div>
          </div>
      </div>
    </div>
  )
}

export default BreakdownBar