import React, { useState, useEffect } from 'react';
import SizeSelector from './SizeSelector.jsx';
const axios = require('axios');

const AddToCart = ( { selectedStyle, productStyles } ) => {

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState('Starting Quantity');
  const [quantityOptions, setQuantityOptions] = useState([]);
  const [quantityDefaultValue, setQuantityDefaultValue] = useState(<option value="Starting Quantity" disabled>-</option>);

  let possibleQuantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const setSelectedStyleData = (selectedSkuIndex, styleSkuData) => {
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
  }

  const handleQuantityChange = (e) => {
    e.preventDefault();
    setSelectedQuantity(e.target.value);
  }

  const handleAddToCartClick = (e) => {
    // Known refactor need -- handle cases where invalid size/qty selected
    // As per HelpDesk -- Known API bug: Count on a GET to /cart is the number of times the SKU has been added, NOT the total quantity added
    e.preventDefault();
    console.log('Add to Cart Clicked!');
    console.log('Size SKU: ', selectedSize);
    console.log('Quantity: ', selectedQuantity);
    axios.post('/cart', {
      sku_id: selectedSize,
      count: selectedQuantity
    })
      .then(success => {
        // Refactor if time -- send the user some sort of visual to let them know it's been added
        console.log('Item successfully added to cart!');
        return axios.get('./cart')
      })
      .then(cartData => {
        console.log('Cart data in addToCart: ', cartData.data);
      })
      .catch(error => {
        console.error('Error adding product to cart!');
      });

  }

  return (
    <div className="overview_addToCart">
      {/* <h3>This is the Add to Cart Component!</h3> */}
      <div className="addToCart_top">
        <div data-testid="sizeSelector" className="size_selector">
          <SizeSelector selectedStyle={selectedStyle} setSelectedStyleData={setSelectedStyleData} setSelectedQuantity={setSelectedQuantity}/>
        </div>
        <div data-testid="quantitySelector" className="quantity_selector">
          <select value={selectedQuantity} className="quantity_selector_dropdown" onChange={handleQuantityChange}>
            {quantityDefaultValue}
            {quantityOptions}
          </select>
        </div>
      </div>
      <div className="addToCart_bottom">
        <button data-testid="addToCartButton" className="addToCartButton" onClick={handleAddToCartClick}>Add to Cart</button>
        <button data-testid="addToOutfitButton" className="addToOutfitButton">
          <img src="https://img.icons8.com/ios/256/christmas-star.png" alt="Add to Outfit" width="35px" height="35px"></img>
        </button>
      </div>
    </div>
  )
}

export default AddToCart;

// BUTTON SOURCES
// Unfilled Star: https://icons8.com/icon/2549/christmas-star
// Filled Star: https://icons8.com/icon/10159/christmas-star

// BUTTON SRCs TO USE
// Unfilled Star: https://img.icons8.com/ios/256/christmas-star.png
// Filled Star: https://img.icons8.com/ios-filled/256/christmas-star.png