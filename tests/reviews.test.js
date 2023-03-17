import * as React from 'react';
import { render, screen } from '@testing-library/react';
// import ReactDOM from 'react-dom';
// import App from '../client/src/index.jsx'
import Reviews from '../client/src/components/reviews/Reviews.jsx';

// jest.mock('react-dom', () => ({ render: jest.fn() }))

describe('Reviews Component', () => {
  it('Renders Reviews component',  () => {
    render(<Reviews />)
    screen.debug()
  })
})