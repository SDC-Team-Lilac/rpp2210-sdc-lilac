import React from 'react';

const ProductInformation = ( { slogan, description } ) => {

  // console.log('Product Information: ', slogan, description);

  if (slogan) {
    return (
      <div className="overview_product_information">
        {/* <h3>This is the Product Information Component!</h3> */}
        <span data-testid="slogan"><b>{slogan}</b></span><br></br>
        <span data-testid="description">{description}</span>
      </div>
    );
  }
}

export default ProductInformation;
