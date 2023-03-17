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
      <h3>This is the Add to Cart Component!</h3>
      <div data-testid="sizeSelector">
        <select defaultValue="Select Size" onChange={handleSizeChange}>
          <option value="Select Size" disabled>Select Size</option>
          {sizeOptions}
        </select>
      </div>
      <div data-testid="quantitySelector">
        <select defaultValue="Starting Quantity" onChange={handleQuantityChange}>
          {quantityDefaultValue}
          {quantityOptions}
        </select>
      </div>
      <button data-testid="addToCartButton">Add to Cart</button>
      <button data-testid="addToOutfitButton">Add to My Outfit</button>
    </div>
  )
}

export default AddToCart;
