import React, { useState, useEffect } from 'react';

const AddToCart = ( { selectedStyle, productStyles } ) => {

  // Known refactor need: On style change, reset this component so size and qty need to be reselected ***
  // Known refactor need: Out of Stock conditional rendering for size ***

  console.log('Selected Style in AddToCart: ', selectedStyle);

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState('');
  const [quantityOptions, setQuantityOptions] = useState([]);
  const [quantityDefaultValue, setQuantityDefaultValue] = useState(<option value="Starting Quantity" disabled>-</option>);

  let styleSkuData = [];
  let sizesUsed = [];
  let sizeOptions = [];
  let possibleQuantities = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  for (var sku in selectedStyle.skus) {
    styleSkuData.push([sku, selectedStyle.skus[sku].quantity, selectedStyle.skus[sku].size]);
  }
  sizeOptions = styleSkuData.map(item => {
    if (item[1] > 0 && sizesUsed.indexOf(item[2]) === -1) {
      sizesUsed.push(item[2]);
      return (
        <option key={item[0]} value={styleSkuData.indexOf(item)}>{item[2]}</option>
      )
    }
  })

  console.log('Style SKU Data: ', styleSkuData);

  // const handleStyleChange = () => {
  //   let itemSkuData = [];
  //   let itemSizesUsed = [];
  //   let itemSizeOptions = [];
  //   for (var sku in selectedStyle.skus) {
  //     itemSkuData.push([sku, selectedStyle.skus[sku].quantity, selectedStyle.skus[sku].size]);
  //   }
  //   styleSkuData = itemSkuData;
  //   itemSizeOptions = styleSkuData.map(item => {
  //     if (item[1] > 0 && itemSizesUsed.indexOf(item[2]) === -1) {
  //       itemSizesUsed.push(item[2]);
  //       return (
  //         <option key={item[0]} value={itemSkuData.indexOf(item)}>{item[2]}</option>
  //       )
  //     }
  //   })
  //   sizeOptions = itemSizeOptions;
  // }

  const handleSizeChange = (e) => {
    e.preventDefault();
    setSelectedSize(e.target.value);
    // Unsure as to why I need both setting of the default qty value here and in useEffect, but the functionality is presently only working with both
    setQuantityDefaultValue(<option value="Starting Quantity">1</option>);
  }

  const handleQuantityChange = (e) => {
    e.preventDefault();
    setSelectedQuantity(e.target.value);
  }

  useEffect(() => {
    // console.log('!!!!');
    if (selectedSize !== '') {
      setQuantityDefaultValue(<option value="Starting Quantity" selected>1</option>);
      let sizeStock = styleSkuData[selectedSize][1];
      setQuantityOptions(possibleQuantities.map(quantity => {
        if (quantity <= sizeStock) {
          return (
            <option key={quantity} value={quantity}>{quantity}</option>
          )
        }
      }))
    }
  }, [selectedSize]);

  return (
    <div className="overview_addToCart">
      {/* <h3>This is the Add to Cart Component!</h3> */}
      <div className="addToCart_top">
        <div data-testid="sizeSelector" className="size_selector">
          <select className="size_selector_dropdown" defaultValue="Select Size" onChange={handleSizeChange}>
            <option value="Select Size" disabled>Select Size</option>
            {sizeOptions}
          </select>
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