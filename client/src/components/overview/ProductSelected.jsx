import React from 'react';
import ProductSummary from './ProductSummary.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';

const ProductSelected = ( { product, testProductStyle, testProductStyleOptions, updateSelectedProduct, productId } ) => {

  // console.log('Product in ProductSelected: ', product);
  // console.log('Test Product Style in ProductSelected: ', testProductStyle);
  // console.log('Test style options in ProductSelected: ', testProductStyleOptions);

  return (
    <div className="overview_product_selected">
      <h2>This is the Product Selected Component!</h2>
      <ProductSummary product={product} productId={productId}/>
      <StyleSelector testProductStyle={testProductStyle} />
      <AddToCart testProductStyle={testProductStyle} testProductStyleOptions={testProductStyleOptions} updateSelectedProduct={updateSelectedProduct}/>
    </div>
  )
}

export default ProductSelected;
