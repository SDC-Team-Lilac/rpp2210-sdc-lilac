const axios = require('axios');
require('dotenv').config();

const APIHostURL = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp";
const APIKey = process.env.FEC_API_KEY;

// PRODUCTS
// /products
  // params:
    // page (INT) -- slects page of results to return, defaulted to 1
    // count (INT) -- specifies how many results per page to return, defaulted to 5
const getAllProducts = () => {
  return axios.get(`${APIHostURL}/products`, {
    //optional key/values of page/pageNumber and count/countNumber
    headers: {
      Authorization: APIKey
    }
  });
}

// /products/:product_id <-- GET product by id
  // params:
    // product_id (INT) -- required id of product requested
const getOneProduct = (product_id) => {
  return axios.get(`${APIHostURL}/products/:product_id`, {
    'product_id': product_id,
    headers: {
      Authorization: APIKey
    }
  })
}
// /products/:product_id/styles <-- GET all styles available for a given product
  // params:
    // product_id (INT) -- required id of product requested
    const getStyles = (product_id) => {
      return axios.get(`${APIHostURL}/products/:product_id/styles`, {
        'product_id': product_id,
        headers: {
          Authorization: APIKey
        }
      })
    }
// /products/:product_id/related <-- GET ids of all products related to specified product
  // params:
    // product_id (INT) -- required id of product requested
const getRelated = (product_id) => {
  return axios.get(`${APIHostURL}/products/:product_id/related`, {
    'product_id': product_id,
    headers: {
      Authorization: APIKey
    }
  })
}

// module.exports.fnName = fnName;

module.exports.getAllProducts = getAllProducts;
module.exports.getOneProduct = getOneProduct;
module.exports.getStyles = getStyles;
module.exports.getRelated = getRelated;
