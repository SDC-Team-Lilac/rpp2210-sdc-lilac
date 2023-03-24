import React, { useState, useEffect } from 'react';
import SizeSelector from './SizeSelector.jsx';

const AddToCart = ( { selectedStyle, productStyles } ) => {

  // Known refactor need: On style change, reset this component so size and qty need to be reselected ***
  // Known refactor need: Out of Stock conditional rendering for size ***

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState('');
  const [quantityOptions, setQuantityOptions] = useState([]);
  const [quantityDefaultValue, setQuantityDefaultValue] = useState(<option value="Starting Quantity" disabled>-</option>);

  let possibleQuantities = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  // const handleSizeChange = (e) => {
  //   e.preventDefault();
  //   console.log('e.target.selected: ', e.target);
  //   setSelectedSize(e.target.value);
  //   setQuantityDefaultValue(<option value="Starting Quantity">1</option>);
  // }

  const handleQuantityChange = (e) => {
    e.preventDefault();
    setSelectedQuantity(e.target.value);
  }

  // useEffect(() => {
  //   setSelectedSize('');
  //   setSelectedQuantity('');
  //   handleStyleChange(selectedStyle);
  // }, [selectedStyle]);

  useEffect(() => {
    // If we're on the same style, but haven't selected a size yet
    if (selectedSize !== '') { // <-- If the user has selected a size, set the quantity default value to 1 and select the value of 1
      setQuantityDefaultValue(<option value="Starting Quantity" selected>1</option>);
      setSelectedQuantity(1);
      // let sizeStock = styleSkuData[selectedSize][1];
      // setQuantityOptions(possibleQuantities.map(quantity => {
      //   if (quantity <= sizeStock) {
      //     return (
      //       <option key={quantity} value={quantity}>{quantity}</option>
      //     )
      //   }
      // }));
    }
  }, [selectedSize]);


  return (
    <div className="overview_addToCart">
      {/* <h3>This is the Add to Cart Component!</h3> */}
      <div className="addToCart_top">
        <div data-testid="sizeSelector" className="size_selector">
          <SizeSelector selectedStyle={selectedStyle} />
        </div>
        <div data-testid="quantitySelector" className="quantity_selector">
          <select defaultValue="Starting Quantity" className="quantity_selector_dropdown" onChange={handleQuantityChange}>
            {quantityDefaultValue}
            {quantityOptions}
          </select>
        </div>
      </div>
      <div className="addToCart_bottom">
        <button data-testid="addToCartButton" className="addToCartButton">Add to Bag</button>
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