const axios = require('axios');
require('dotenv').config();

const APIHostURL = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp";
const APIKey = process.env.FEC_API_KEY;

// GETs id of products added to a cart by the user
// Might need to refactor to work for different user ids in a later implementation *
const getCartItems = () => {
  return axios.get(`${APIHostURL}/cart`, {
    headers: {
      Authorization: APIKey
    }
  });
}

// POSTs to add a product to the cart
// {"sku_id": 2580537, "count": 2} <-- EXAMPLE IN POSTMAN
// Count coming through Overview Widget will be defaulted to 1 if not otherwise specified
const addToCart = (sku_id, count) => {
  // console.log('Add to Cart API Count: ', count);
  return axios.post(`${APIHostURL}/cart`, {
    sku_id: sku_id,
    count: count
  }, {
    headers: {
      Authorization: APIKey
    }
  });
}

module.exports = {
  getCartItems: getCartItems,
  addToCart: addToCart
}
