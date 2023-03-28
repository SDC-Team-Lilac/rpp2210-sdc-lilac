import * as React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RelatedProducts from '../client/src/components/relatedProducts/RelatedProducts.jsx';
import { RatingCalculator } from '../client/src/components/relatedProducts/helperFunctions.jsx';
import RelatedProductsList from '../client/src/components/relatedProducts/RelatedProductsList.jsx';
import CardStructure from '../client/src/components/relatedProducts/CardStructure.jsx';
import ComparisonModalList from '../client/src/components/relatedProducts/ComparisonModalList.jsx';
import { XButton, StarButton, OnCardClick, PlusButton } from '../client/src/components/relatedProducts/CardButtons.jsx';

afterEach(() => {
  cleanup();
});

const productId = 71697;
const setRelatedProductFeatures = (item) => {
  return relatedProductFeatures;
}
const relatedProductFeatures = [
  {
    "feature": "Fabric",
    "value": "Cotton"
  },
  {
    "feature": "Buttons",
    "value": "Silver"
  }
];
const productFeatures = [
  {
    "feature": "Fabric",
    "value": "Canvas"
  },
  {
    "feature": "Buttons",
    "value": "Brass"
  }
];
const myOutfit = {outfits: []};
const relatedProducts = [71698, 71699, 71704, 71703];
const productCards = [
  <div className='sarah-product-card' onClick={() => {
    OnCardClick();
  }}>
    <div className='sarah-product-button-div'>
      <button className='sarah-star-button' >&#11088;</button>
    </div>
    <div className='sarah-product-image-div'>
      <img className='sarah-product-image' src='https://wallpapers-clan.com/wp-content/uploads/2022/08/default-pfp-16.jpg' width='200px' height='225px'></img>
    </div>
    <h4 className='sarah-product-category'>Accessories</h4>
    <h4 className='sarah-product-name'>Bright Future Sunglasses</h4>
    <h4 className='sarah-product-price'>69.00</h4>
    <h4 className='sarah-product-ratings'>3.5</h4>
  </div>
];

xdescribe('RelatedProducts', () => {
  it('renders related products component', () => {
    render(<RelatedProducts productId={71697} relatedProductFeatures={[]} productFeatures={[]} myOutfit={{outfits: []}} relatedProducts={[]} productCards={[]}/>);
    expect(screen.getByText('Related Products')).toBeInTheDocument();
    expect(screen.getByText('Your Outfit')).toBeInTheDocument();
    expect(screen.getByText('Add to Outfit')).toBeInTheDocument();
  });
})

xdescribe('CardStructure', () => {
  it('renders a product card', () => {
    render(<CardStructure product={productId} setRelatedProductFeatures={setRelatedProductFeatures} listName={'product'} currentProductFeatures={productFeatures}/>);
    const image = screen.getByTestId('card-image');
    const name = screen.getByTestId('card-name');
    const category = screen.getByTestId('card-category');
    const price = screen.getByTestId('card-price');
    const rating = screen.getByTestId('card-rating');
    const action = screen.getByTestId('card-action');
    fireEvent.click(action);
    expect(image).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(category).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(rating).toBeInTheDocument();
    expect(action).toBeInTheDocument();
    expect(OnCardClick).toHaveBeenCalled();
  });
})

xdescribe('ComparisonModalList', () => {
  it('renders related modal comparison features', () => {
    render(<ComparisonModalList relatedProductFeatures={relatedProductFeatures} currentProductFeatures={productFeatures}/>);
    const container = screen.getByTestId('modal-container');
    const product1 = screen.getByTestId('modal-product1');
    const feature = screen.getByTestId('modal-feature');
    const product2 = screen.getByTestId('modal-product2');
    expect(container).toBeInTheDocument();
    expect(product1).toBeInTheDocument();
    expect(feature).toBeInTheDocument();
    expect(product2).toBeInTheDocument();
  });
})

xdescribe('RelatedProductsList', () => {
  it('renders related products list', () => {
    render(<RelatedProductsList relatedProductFeatures={relatedProductFeatures} productId={productId} productCards={productCards} currentProductFeatures={productFeatures} />);
    const pContainer = screen.getByTestId('product-list-container');
    const pTitle = screen.getByTestId('product-list-title');
    const cContainer = screen.getByTestId('product-cards-container');
    const overlay = screen.getByTestId('product-list-overlay');
    const modal = screen.getByTestId('comparison-modal');
    const left = screen.getByTestId('left-arrow');
    const right = screen.getByTestId('right-arrow');
    expect(pContainer).toBeInTheDocument();
    expect(pTitle).toBeInTheDocument();
    expect(cContainer).toBeInTheDocument();
    expect(overlay).toBeInTheDocument();
    expect(modal).toBeInTheDocument();
    expect(left).toBeInTheDocument();
    expect(right).toBeInTheDocument();
  })
})

xdescribe('helperFunctions-RatingCalculator', () => {
  it('returns rounded star rating', () => {
    const ratings = {
      1: "10",
      2: "3",
      3: "35",
      4: "5",
      5: "12"
    }
    expect(RatingCalculator(ratings)).toBeGreaterThanOrEqual(3.0);
    expect(RatingCalculator(ratings)).toBeLessThanOrEqual(3.25);
  });
})

xdescribe('Buttons', () => {
  it('should render buttons', () => {
    render(<XButton />);
    render(<PlusButton />);
    const x = screen.getByTestId('x-button');
    const plus = screen.getByTestId('plus-button');
    expect(x).toBeInTheDocument();
    expect(plus).toBeInTheDocument();
  });
})