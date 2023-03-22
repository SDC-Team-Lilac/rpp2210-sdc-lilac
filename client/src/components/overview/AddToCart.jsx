import React, { useState, useEffect } from 'react';

const AddToCart = ( { selectedStyle, productStyles } ) => {

  // Known refactor need: On style change, reset this component so size and qty need to be reselected ***
  // Known refactor need: Out of Stock conditional rendering for size ***

  console.log('Selected Style in AddToCart: ', selectedStyle.style_id);


  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState('');
  const [quantityOptions, setQuantityOptions] = useState([]);
  const [quantityDefaultValue, setQuantityDefaultValue] = useState(<option value="Starting Quantity" disabled>-</option>);

  const [styleSkuData, setStyleSkuData] = useState([]);
  const [sizesUsed, setSizesUsed] = useState([]);
  const [sizeOptions, setSizeOptions] = useState([]);
  const [previousStyle, setPreviousStyle] = useState(selectedStyle.style_id);
  const [sizeDefaultValue, setSizeDefaultValue] = useState(<option value="Select Size" disabled>Select Size</option>);

  // let styleSkuData = [];
  // let sizesUsed = [];
  // let sizeOptions = [];
  let possibleQuantities = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  // for (var sku in selectedStyle.skus) {
  //   styleSkuData.push([sku, selectedStyle.skus[sku].quantity, selectedStyle.skus[sku].size]);
  // }
  // sizeOptions = styleSkuData.map(item => {
  //   if (item[1] > 0 && sizesUsed.indexOf(item[2]) === -1) {
  //     sizesUsed.push(item[2]);
  //     return (
  //       <option key={item[0]} value={styleSkuData.indexOf(item)}>{item[2]}</option>
  //     )
  //   }
  // })

  // console.log('Style SKU Data: ', styleSkuData);

  const resetSizeOptions = () => {
    console.log('1');
    setStyleSkuData([]);
    setSizesUsed([]);
    setSizeOptions([]);
  }

  const handleStyleChange = (selectedStyle) => {
    console.log('2');
    let productStyleSkuData = [];
    for (var sku in selectedStyle.skus) {
      productStyleSkuData.push([sku, selectedStyle.skus[sku].quantity, selectedStyle.skus[sku].size]);
    }
    setStyleSkuData(productStyleSkuData);
    let productSizeOptions = [];
    let productSizesUsed = [];
    productSizeOptions = productStyleSkuData.map(item => {
      if (item[1] > 0 && productSizesUsed.indexOf(item[2]) === -1) {
        productSizesUsed.push(item[2]);
        return (
          <option key={item[0]} value={productStyleSkuData.indexOf(item)}>{item[2]}</option>
        )
      }
    });
    setSizeOptions(productSizeOptions);
    if (productSizeOptions.length < 1) {
      setSizeDefaultValue(<option value="Select Size" disabled>OUT OF STOCK</option>);
    }
    console.log('3');
  }

  const handleSizeChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setSelectedSize(e.target.value);
    // Unsure as to why I need both setting of the default qty value here and in useEffect, but the functionality is presently only working with both
    setQuantityDefaultValue(<option value="Starting Quantity">1</option>);
  }

  const handleQuantityChange = (e) => {
    e.preventDefault();
    setSelectedQuantity(e.target.value);
  }

  useEffect(() => {
    console.log('Selected Style useEffect!!!! ', selectedStyle.style_id);

    // If we're changing to a different style (this is new, in progress *)
    if (selectedStyle.style_id !== previousStyle) {
      setPreviousStyle(selectedStyle.style_id);
      setSelectedSize('');
      setSelectedQuantity('');
      resetSizeOptions();
      setSizeDefaultValue(<option value="Select Size" disabled>Select Size</option>);
      console.log('++++++++++++');
      handleStyleChange(selectedStyle);
      console.log('4');
    // If we're on the same style, but haven't selected a size yet
    } else
    if (selectedSize !== '') { // <-- If the user has selected a size, set the quantity default value to 1 and select the value of 1
      setQuantityDefaultValue(<option value="Starting Quantity" selected>1</option>);
      setSelectedQuantity(1); // Just added this ***
      let sizeStock = styleSkuData[selectedSize][1];
      setQuantityOptions(possibleQuantities.map(quantity => {
        if (quantity <= sizeStock) {
          return (
            <option key={quantity} value={quantity}>{quantity}</option>
          )
        }
      }))
      console.log('5');
    }
  }, [selectedStyle, selectedSize]);

  return (
    <div className="overview_addToCart">
      {/* <h3>This is the Add to Cart Component!</h3> */}
      <div className="addToCart_top">
        <div data-testid="sizeSelector" className="size_selector">
          <select className="size_selector_dropdown" defaultValue="Select Size" onChange={handleSizeChange}>
            {/* {sizeOptions.length > 0 ? <option value="Select Size" disabled>Select Size</option> : <option value="Select Size" disabled>OUT OF STOCK</option>} */}
            {sizeDefaultValue}
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