import React, { useState, useEffect, forwardRef } from 'react';

// Refactor to props.xxx
const SizeSelector = forwardRef(function SizeSelector({ selectedStyle, setSelectedStyleData, setSelectedQuantity }, ref ) {

  const [selected, setSelected] = useState('default');

  useEffect(() => {
    setSelected('default');
    setSelectedQuantity('Starting Quantity');
  }, [selectedStyle]);

  let styleSkuData = [];
  let sizesUsed = [];
  let sizeOptions = [];

  for (var sku in selectedStyle.skus) {
    styleSkuData.push([sku, selectedStyle.skus[sku].quantity, selectedStyle.skus[sku].size]);
  }
  // console.log('Style sku data: ', styleSkuData);
  sizeOptions = styleSkuData.filter(item => {
    if (item[1] === 0 || sizesUsed.indexOf(item[2]) > -1) {
      return false;
    }
    sizesUsed.push(item[2]);
    return true;
  }).map(item => {
    return (
      <option key={item[0]} value={styleSkuData.indexOf(item)}>{item[2]}</option>
    );
  });
  // console.log('Size options: ', sizeOptions);
  if (sizeOptions.length > 0) {
    sizeOptions.unshift(<option value="default" key="select_size" disabled>Select Size</option>);
  } else {
    sizeOptions.unshift(<option value="default" data-testid="out_of_stock_select" key="out_of_stock" disabled>OUT OF STOCK</option>);
    // setSelectedQuantity(0);
    setSelectedStyleData(0, null, null);

  }

  const handleSizeChange = (e) => {
    e.preventDefault();
    setSelected(e.target.value);
    setSelectedStyleData(1, e.target.value, styleSkuData);
  }

  return (
    <select ref={ref} data-testid="sizeSelectorDropdown" className="size_selector_dropdown" value={selected} onChange={handleSizeChange}>
      {sizeOptions}
    </select>
  )
})

export default SizeSelector;
