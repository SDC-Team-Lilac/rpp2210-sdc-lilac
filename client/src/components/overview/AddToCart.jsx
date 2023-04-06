import React, { useState, useEffect, useRef } from 'react';
import SizeSelector from './SizeSelector.jsx';
import { DetermineAction } from '../relatedProducts/CardButtons.jsx';
const axios = require('axios');

const AddToCart = ( { productDetails, selectedStyle, productStyles, myOutfit, setMyOutfit, setOutfitCards, setProductId, updateSelectedProduct, inOutfit, setInOutfit } ) => {

  const [selectedSize, setSelectedSize] = useState('');
  const [alertSize, setAlertSize] = useState(false);
  const [alertSuccessfulAdd, setAlertSuccessfulAdd] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState('Starting Quantity');
  const [quantityOptions, setQuantityOptions] = useState([]);
  const [quantityDefaultValue, setQuantityDefaultValue] = useState(<option value="Starting Quantity" disabled>-</option>);

  const ref = useRef(null);

  let possibleQuantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  useEffect(() => {
    console.log('In Outfit in AddToCart useEffect: ', inOutfit);
    if (alertSuccessfulAdd) {
      setTimeout(() => setAlertSuccessfulAdd(false), 2000);
    }
  }, [alertSize, alertSuccessfulAdd, inOutfit]);

  const setSelectedStyleData = (quantityStart, selectedSkuIndex, styleSkuData) => {
    if (quantityStart === 0) {
      setSelectedQuantity(0);
    } else {
      setSelectedSize(styleSkuData[selectedSkuIndex][0]);
      setSelectedQuantity(1);
      let sizeStock = styleSkuData[selectedSkuIndex][1];
        setQuantityOptions(possibleQuantities.map(quantity => {
          if (quantity <= sizeStock) {
            return (
              <option key={quantity} value={quantity}>{quantity}</option>
            )
          }
        }));
      setAlertSize(false);
    }
  }

  const handleQuantityChange = (e) => {
    e.preventDefault();
    setSelectedQuantity(e.target.value);
  }

  const handleAddToCartClick = (e) => {
    // As per HelpDesk -- Known API bug: Count on a GET to /cart is the number of times the SKU has been added, NOT the total quantity added
    e.preventDefault();
    if (selectedSize.length > 0 && selectedQuantity > 0) {
      axios.post('/cart', {
        sku_id: selectedSize,
        count: selectedQuantity
      })
        .then(success => {
          return axios.get('./cart');
        })
        .then(cartData => {
          console.log('Cart data in addToCart: ', cartData.data);
        })
        .catch(error => {
          console.error('Error adding product to cart!');
        });
        setAlertSuccessfulAdd(true);
    } else {
      setAlertSize(true);
      ref.current.focus();
    }
  }

  // Sync with Sarah to see if we can import a function from cardButtons.jsx ***
  const handleAddToOutfitClick = (e) => {
    e.preventDefault();
    console.log('Add to Outfit Clicked! Current product id: ', productDetails.id);
    console.log('Determine Action: ', DetermineAction);
    console.log('inOutfit? ', inOutfit);
    DetermineAction(productDetails.id, setMyOutfit, setOutfitCards, setProductId, updateSelectedProduct, inOutfit, setInOutfit, myOutfit);
  }

  return (
    <div className="overview_addToCart">
      {alertSize ? <div className="size_selector_alert">Please select size</div> : alertSuccessfulAdd ? <div className="successful_add_alert">Item added to cart!</div> : <div className="size_selector_alert"></div>}
      <div className="addToCart_top">
        <div data-testid="sizeSelector" className="size_selector">
          <SizeSelector ref={ref} selectedStyle={selectedStyle} setSelectedStyleData={setSelectedStyleData} setSelectedQuantity={setSelectedQuantity}/>
        </div>
        <div data-testid="quantitySelector" className="quantity_selector">
          <select value={selectedQuantity} className="quantity_selector_dropdown" onChange={handleQuantityChange}>
            {quantityDefaultValue}
            {quantityOptions}
          </select>
        </div>
      </div>
      <div className="addToCart_bottom">
        {selectedQuantity === 0 ? null : <button data-testid="addToCartButton" className="addToCartButton" onClick={handleAddToCartClick}>Add to Cart<span className="addToCartPlus">+</span></button>}
        <button data-testid="addToOutfitButton" className="addToOutfitButton" onClick={handleAddToOutfitClick}>
        {/* <span className="notAddedToOutfit">&#9734;</span> */}
          {inOutfit ? <span className="addedToOutfit">&#9733;</span> : <span className="notAddedToOutfit">&#9734;</span>}
        </button>
      </div>
    </div>
  )
}

export default AddToCart;
