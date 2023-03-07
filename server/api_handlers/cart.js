const axios = require('axios');
require('dotenv').config();

const APIHostURL = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp";
const APIKey = process.env.FEC_API_KEY;

// CART
// /cart <-- GET retrieves id of products added to a cart by the user
  // params: none
// /cart <-- POST to add a product to the cart
  // body params:
    // sku_id (INT) -- required id of the product being added to the cart

// module.exports.fnName = fnName;
