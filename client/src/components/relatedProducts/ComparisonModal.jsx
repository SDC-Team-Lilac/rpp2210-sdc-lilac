import React from 'react';

const ComparisonModal = (features) => {
  var table = features.map((feature) => {
    return (
      <div className='sarah-modal-feature'>
        <h4 className='sarah-modal-product1-feature'>Product 1</h4>
        <h4 className='sarah-modal-feature'>Feature</h4>
        <h4 className='sarah-modal-product2-feature'>Product 2</h4>
      </div>
    )
  })

  return (
    <div className='sarah-modal' id='sarah-modal'>
      <div className='sarah-modal-header'>
        <h2>Comparison</h2>
      </div>
      <div className='sarah-modal-content'>
        {table}
      </div>
      <div className='sarah-overlay' id='sarah-overlay' onClick={() => {
            var modalElement = document.getElementById('sarah-modal');
            var overlayElement = document.getElementById('sarah-overlay');
            modalElement.classList.remove('active');
            overlayElement.classList.remove('active');
      }}></div>
    </div>
  )
}

export default ComparisonModal;