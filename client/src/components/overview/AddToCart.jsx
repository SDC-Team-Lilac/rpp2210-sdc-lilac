import React from 'react';

const AddToCart = () => {

  return (
    <div className="overview_addToCart">
      <h3>This is the Add to Cart Component!</h3>
      <div>
        <label>
          Pick a style:
          <select>
            <option>Style 1</option>
            <option>Style 2</option>
            <option>Style 3</option>
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
      <button>Add to My Outfit</button>
    </div>
  )
}

export default AddToCart;
