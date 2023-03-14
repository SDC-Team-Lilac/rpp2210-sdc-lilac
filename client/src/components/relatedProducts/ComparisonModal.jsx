import React from 'react';

const ComparisonModal = (product1, product_id) => {
  var features = CompareFeatures(product1, product_id);
  var table = features.map((feature) => {
    var currentProduct = '';
    var copmaredProduct = '';
    if (feature.currentProduct !== undefined) {
      currentProduct = feature.currentProduct
    } else if (feature.comparedProduct !== undefined) {
      comparedProduct = feature.comparedProduct;
    }
    return (
      <div className='sarah-modal-feature'>
        <h4 className='sarah-modal-product1-feature'>{currentProduct}</h4>
        <h4 className='sarah-modal-feature'>{feature.feature}</h4>
        <h4 className='sarah-modal-product2-feature'>{comparedProduct}</h4>
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