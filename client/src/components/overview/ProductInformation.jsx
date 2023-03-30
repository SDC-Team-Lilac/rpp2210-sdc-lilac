import React from 'react';

const ProductInformation = ( { slogan, description } ) => {

  // console.log('Product Information: ', slogan, description);

  if (slogan) {
    return (
      <div className="overview_product_information">
        <span className="overview_product_slogan" data-testid="slogan">{slogan}</span>
        <span className="overview_product_description" data-testid="description">{description}</span>
      </div>
    );
  }
}

export default ProductInformation;
