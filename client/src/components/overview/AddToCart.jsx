import React, { useState, useEffect } from 'react';

const AddToCart = ( { testProductStyle, testProductStyleOptions, updateSelectedProduct } ) => {

  // const styleOptions = testProductStyleOptions.map(style => {
  //   return (
  //     <option key={style.style_id} style_id={style.style_id}>{style.name}</option>
  //   )
  // })

  const [selectedSize, setSelectedSize] = useState('');

  let sizeOptions = [];
  let styleSkuData = [];
  if (testProductStyle) {
    for (var sku in testProductStyle.skus) {
      styleSkuData.push([sku, testProductStyle.skus[sku].quantity, testProductStyle.skus[sku].size]);
    }
    sizeOptions = styleSkuData.map(item => {
      if (item[1] > 0) {
        return (
          <option key={item[0]}>{item[2]}</option>
        )
      }
    })
  }

  const handleClick = () => {
    console.log('Clicked!!!!');
    updateSelectedProduct(71700);
  }

  return (
    <div className="overview_addToCart">
      <h3>This is the Add to Cart Component!</h3>
      <div>
        <label>
          Pick a size:
          <select>
            {sizeOptions}
          </select>
        </label>
      </div>
      <div>
        <label>
          Pick a quantity:
          <select>
            <option>1</option>
            <option>2</option>
            <option>15</option>
          </select>
        </label>
      </div>
      <button>Add to Cart</button>
      <button onClick={handleClick}>Add to My Outfit</button>
    </div>
  )
}

export default AddToCart;
