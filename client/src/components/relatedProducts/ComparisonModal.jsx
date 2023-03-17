import React from 'react';
import ComparisonModalList from './ComparisonModalList.jsx';

const ComparisonModal = (props) => {
  return (
    <table className='sarah-modal' id='sarah-modal'>
      <tr>
        <th colspan="3" className="sarah-modal-header">Comparison</th>
      </tr>
      <tbody className='sarah-modal-content'>
        <ComparisonModalList relatedProductFeatures={props.relatedProductFeatures} currentProductFeatures={props.currentProductFeatures}/>
      </tbody>
    </table>
  )
}

export default ComparisonModal;