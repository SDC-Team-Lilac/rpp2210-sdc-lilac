import * as React from 'react';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

import Overview from '../client/src/components/Overview/Overview.jsx';
import ProductGallery from '../client/src/components/Overview/ProductGallery.jsx';
import ProductSelected from '../client/src/components/Overview/ProductSelected.jsx';
import ProductDetails from '../client/src/components/Overview/ProductDetails.jsx';

describe('Overview', () => {
  it('Renders the Overview component', () => {
    render(<Overview />);
  });
});

// To be continued...

// describe('Product Gallery', () => {
//   let productPhotos = [...];

//   it('Renders the Product Gallery component', () => {
//     render(<ProductGallery productPhotos={productPhotos}/>);
//   });
// });

// describe('Product Selected', () => {
//   it('Remders the Product Selected component', () => {
//     render(<ProductSelected />);
//   });
// });

// describe('Product Details', () => {
//   it('Remders the Product Details component', () => {
//     render(<ProductDetails />);
//   });
// });
