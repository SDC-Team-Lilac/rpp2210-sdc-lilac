import React from 'react';
import { createRoot } from 'react-dom/client';
import Overview from './components/overview/Overview.jsx'
import QA from './components/qa/QA.jsx'
import RelatedProducts from './components/relatedProducts/RelatedProducts.jsx'
import Reviews from './components/reviews/Reviews.jsx'


const domNode = document.getElementById('root');
const root = createRoot(domNode);

const App = () => {
  return (
  <div>
    Hello World!
    <Overview />
    <RelatedProducts />
    <QA />
    <Reviews />
  </div>
  )
};

root.render(<App />);