const axios = require('axios');
require('dotenv').config();

const APIHostURL = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp";
const APIKey = process.env.FEC_API_KEY;

const getAllProducts = () => {
  return axios.get(`${APIHostURL}/products`, {
    headers: {
      Authorization: APIKey
    }
  })
}

module.exports.getAllProducts = getAllProducts;
