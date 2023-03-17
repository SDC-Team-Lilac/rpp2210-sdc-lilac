import * as React from 'react';
import { render } from '@testing-library/react';
import Reviews from '../client/src/components/reviews/Reviews.jsx';

describe('Reviews Component', () => {
  it('Renders Reviews component', () => {
    render(<Reviews />)
  })
})