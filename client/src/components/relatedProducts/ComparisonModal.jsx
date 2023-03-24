import React from 'react';
import ComparisonModalList from './ComparisonModalList.jsx';

const ComparisonModal = (props) => {
  return (
    <table className='sarah-modal' id='sarah-modal'  data-testid='comparison-modal'>
      <caption className='sarah-modal-header'>Comparing</caption>
      <thead>
        <tr>
          <th className="sarah-modal-column-header">{props.currentProductName}</th>
          <th className="sarah-modal-column-header">Feature</th>
          <th className="sarah-modal-column-header">{props.relatedProductName}</th>
        </tr>
      </thead>
      <tbody className='sarah-modal-content'>
        <ComparisonModalList relatedProductFeatures={props.relatedProductFeatures} currentProductFeatures={props.currentProductFeatures}/>
      </tbody>
    </table>
  )
}

export default ComparisonModal;