import React, { useState, useEffect, forwardRef } from 'react';

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
  sizeOptions = styleSkuData.map(item => {
    if (item[1] > 0 && sizesUsed.indexOf(item[2]) === -1) {
      sizesUsed.push(item[2]);
      return (
        <option key={item[0]} value={styleSkuData.indexOf(item)}>{item[2]}</option>
        )
      }
    })
    if (sizeOptions.length > 0) {
      sizeOptions.unshift(<option value="default" disabled>Select Size</option>);
    } else {
      sizeOptions.unshift(<option value="default" disabled>OUT OF STOCK</option>);
      setSelectedQuantity(0);
    }

  const handleSizeChange = (e) => {
    e.preventDefault();
    setSelected(e.target.value);
    setSelectedStyleData(e.target.value, styleSkuData);
  }

  return (
    <select ref={ref} className="size_selector_dropdown" value={selected} onChange={handleSizeChange}>
      {sizeOptions}
    </select>
  )
})

export default SizeSelector;
