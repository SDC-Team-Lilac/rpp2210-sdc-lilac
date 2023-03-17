import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
// import ReactDOM from 'react-dom';
// import App from '../client/src/index.jsx'
import Characteristics from '../client/src/components/reviews/Characteristics.jsx';
import KeywordSearch from '../client/src/components/reviews/KeywordSearch.jsx';
import NewReview from '../client/src/components/reviews/NewReview.jsx';
import ProductBreakdown from '../client/src/components/reviews/ProductBreakdown.jsx';
import RatingBreakdown from '../client/src/components/reviews/NewReview.jsx';
import ReviewList from '../client/src/components/reviews/ReviewList.jsx';
import Reviews from '../client/src/components/reviews/Reviews.jsx';
import ReviewTile from '../client/src/components/reviews/ReviewTile.jsx';
import SortOptions from '../client/src/components/reviews/SortOptions.jsx';

// jest.mock('react-dom', () => ({ render: jest.fn() }))

xdescribe('Characteristics Component', () => {
  it('Renders Characteristics component',  () => {
    render(<Characteristics />)
    screen.debug()
  })
})
xdescribe('KeyWordSearch Component', () => {
    it('Renders KeyWordSearch component',  () => {
      render(<KeyWordSearch />)
      screen.debug()
    })
  })
xdescribe('NewReview Component', () => {
    it('Renders NewReview component',  () => {
    render(<NewReview />)
    screen.debug()
    })
})

describe('ProductBreakdown Component', () => {
    it('Renders ProductBreakdown component',  () => {
        render(<ProductBreakdown />)
        screen.debug()
    })
})

xdescribe('RatingBreakdown Component', () => {
    it('Renders RatingBreakdown component',  () => {
        render(<RatingBreakdown />)
        screen.debug()
    })
})

xdescribe('ReviewList Component', () => {
    it('Renders ReviewList component',  () => {
        render(<ReviewList />)
        screen.debug()
    })
})

describe('Reviews Component', () => {
    it('Renders Reviews component', () => {
        render (<Reviews productId={71697}/>)
    })
})

xdescribe('ReviewTile Component', () => {
    it('Renders ReviewTile component',  () => {
        render(<ReviewTile />)
        screen.debug()
    })
})

xdescribe('SortOptions Component', () => {
    it('Renders SortOptions component',  () => {
        render(<SortOptions />)
        screen.debug()
    })
})