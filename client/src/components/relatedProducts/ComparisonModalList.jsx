import React from 'react';

const ComparisonModalList = (props) => {
    var features = [];
    var usedFeatures = [];
    for (var i = 0; i < props.currentProductFeatures.length; i++) {
      if (usedFeatures.indexOf(props.currentProductFeatures[i].feature) < 0) {
        var featureObject = {
          'currentProduct': props.currentProductFeatures[i].value,
          'feature': props.currentProductFeatures[i].feature,
          'relatedProduct': ''
        };
        features.push(featureObject);
        usedFeatures.push(props.currentProductFeatures[i].feature);
      }
    }
    for (var i = 0; i < props.relatedProductFeatures.length; i++) {
      var index = usedFeatures.indexOf(props.relatedProductFeatures[i].feature);
      if (index >= 0) {
        features[index]['relatedProduct'] = props.relatedProductFeatures[i].value
      } else {
        var featureObject = {
          'currentProduct': '',
          'relatedProduct': props.relatedProductFeatures[i].value,
          'feature': props.relatedProductFeatures[i].feature
        };
        features.push(featureObject);
      }
    }
    return features.map((feature) => {
      var currentProduct = feature.currentProduct;
      var relatedProduct = feature.relatedProduct;
      if (currentProduct === null) {
        currentProduct = '';
      } else if (relatedProduct === null) {
        relatedProduct = '';
      }
      return (
        <tr className='sarah-modal-feature-container' data-testid='modal-container' >
          <td className='sarah-modal-product1-feature' data-testid='modal-product1' >{currentProduct}</td>
          <td className='sarah-modal-feature' data-testid='modal-feature' >{feature.feature}</td>
          <td className='sarah-modal-product2-feature' data-testid='modal-product2' >{relatedProduct}</td>
        </tr>
      )
    })
}

  export default ComparisonModalList;