const axios = require('axios');
require('dotenv').config();

const APIHostURL = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp";
const APIKey = process.env.FEC_API_KEY;
const newAPIHostURL = process.env.HOST;

// params:
  // page (INT) -- slects page of results to return, defaulted to 1
  // count (INT) -- specifies how many results per page to return, defaulted to 5
const getAllProducts = () => {
  return axios.get(`${newAPIHostURL}/products`);
}

const getOneProduct = (product_id) => {
  console.log('---------------------------',product_id)
  return axios.get(`${newAPIHostURL}/products/${product_id}`)
}

const getStyles = (product_id) => {
  return axios.get(`${newAPIHostURL}/products/${product_id}/styles`)
}

const getRelated = (product_id) => {
  return axios.get(`${newAPIHostURL}/products/${product_id}/related`)
}

module.exports.getAllProducts = getAllProducts;
module.exports.getOneProduct = getOneProduct;
module.exports.getStyles = getStyles;
module.exports.getRelated = getRelated;
