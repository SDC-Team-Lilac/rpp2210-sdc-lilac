import React, {useEffect, useState} from 'react';

const BreakdownBar = ({characteristic, characteristicSelections, characteristicValue}) => {


  /*  This Component will:
      1)
   */
  const [marginPercent, setMarginPercent] = useState('');

  const getMarginPercentage = () => {
    var result = ((Number(characteristicValue.value).toFixed(2)/5) * 100).toString() + '%'
    setMarginPercent(result)
  }

  useEffect(() => {
    getMarginPercentage();
  }, [])

  useEffect(() => {
    getMarginPercentage();
  }, [characteristicValue])

  return (
    <div data-testid='breakdownBar-1' className="reviews breakdownBar">
      <div className="reviews breakdownBar characteristic">{characteristic}</div>
      <div className="reviews breakdownBar fullBar">
        <div className="reviews breakdownBar charbar"><div className="reviews breakdownBar arrow" style={{marginLeft: marginPercent}}> </div></div>
        <div className="reviews breakdownBar ratingScale">
          <div className="reviews breakdownBar ratingScaleInstance"><div>1</div><div>{characteristicSelections[characteristic][1]}</div></div>
          <div className="reviews breakdownBar ratingScaleInstance"><div>3</div><div>{characteristicSelections[characteristic][3]}</div></div>
          <div className="reviews breakdownBar ratingScaleInstance"><div>5</div><div>{characteristicSelections[characteristic][5]}</div></div>
          </div>
      </div>

    </div>
  )
}

export default BreakdownBar