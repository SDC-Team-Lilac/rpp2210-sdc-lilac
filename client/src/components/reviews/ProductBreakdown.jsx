import React, {useEffect} from 'react';
import BreakdownBar from './BreakdownBar.jsx'

const ProductBreakdown = ({characteristics}) => {


  const loadBars = () => {
    var breakdowns = [];
    for (const individualCharacteristic in characteristics) {
      breakdowns.push(<BreakdownBar characteristic={individualCharacteristic}/>)
    }
    return breakdowns;
  }
      console.log('THESE ARE THE CHARACTERISTICS', characteristics)

  return (
    <div data-testid='productBreakdown-1' className="reviews productBreakdown"> ProductBreakdown!
    {loadBars()}
    </div>
  )
}

export default ProductBreakdown;