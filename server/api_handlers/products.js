const axios = require('axios');
require('dotenv').config();

const APIHostURL = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp";
const APIKey = process.env.FEC_API_KEY;

const getAllProducts = () => {
  return axios.get(`${APIHostURL}/products`, {
    headers: {
      Authorization: APIKey
    }
  });
}

// PRODUCTS
// /products
  // params:
    // page (INT) -- slects page of results to return, defaulted to 1
    // count (INT) -- specifies how many results per page to return, defaulted to 5
// /products/:product_id <-- GET product by id
  // params:
    // product_id (INT) -- required id of product requested
// /products/:product_id/styles <-- GET all styles available for a given product
  // params:
    // product_id (INT) -- required id of product requested
// /products/:product_id/related <-- GET ids of all products related to specified product
  // params:
    // product_id (INT) -- required id of product requested

// module.exports.fnName = fnName;

module.exports.getAllProducts = getAllProducts;
