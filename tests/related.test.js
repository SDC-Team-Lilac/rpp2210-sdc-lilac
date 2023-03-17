import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RelatedProducts from '../client/src/components/relatedProducts/RelatedProducts.jsx';

describe('RelatedProducts', () => {
  it('renders related products component', () => {
    render(<RelatedProducts productId={71697} productFeatures={[]} myOutfit={{outfits: []}} relatedProducts={[]} productCards={[]}/>);
    expect(screen.getByText('Related Products')).toBeInTheDocument();
    expect(screen.getByText('Your Outfit')).toBeInTheDocument();
    expect(screen.getByText('Add to Outfit')).toBeInTheDocument();
  });
})