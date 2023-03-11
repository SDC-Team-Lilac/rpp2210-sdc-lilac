import React from 'react';

const ProductFeatures = ( { features } ) => {

  // console.log('Features: ', features);

  let count = 0;
  const featuresList = features.map((feature => {
    count++;
    return (
      // <li key={count}><b>{feature.feature}: </b>{feature.value}</li>
      <li key={count}>{feature.value} {feature.feature}</li>
    );
  }))

  return (
    <div className="overview_product_features">
      {/* <h3>This is the Product Features Component!</h3> */}
      <ul>
        {featuresList}
      </ul>
    </div>
  )
}

export default ProductFeatures;
