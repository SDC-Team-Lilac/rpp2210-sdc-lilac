const products_api = require('../api_handlers/products');
const reviews_api = require('../api_handlers/reviews');
const axios = require('axios');
require('dotenv').config();

const APIHostURL = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp";
const APIKey = process.env.FEC_API_KEY;

var ProductListInfo = async(req, res) => {
  console.log('PARAMETERS: ', req.query);
  var relatedProducts = req.query.relatedProducts.data;
  var productId = req.query.productId;
  var productIds = [];
  for (var i = 0; i < relatedProducts.length; i++) {
    if (productIds.indexOf(relatedProducts[i]) < 0 && relatedProducts[i] !== productId) {
      productIds.push(relatedProducts[i]);
    }
  }
  var details = [];
  return await Promise.all(productIds.map(async function(product) {
    var products = {productId: product};
    console.log('PRODUCT: ', product);
    await products_api.getOneProduct(product)
      .then((details) => {
        products['category'] = details.data.category;
        products['name'] = details.data.name;
        products['price'] = details.data.default_price;
        return products_api.getStyles(product)
      })
      .then((styles) => {
        products.image = styles.data.results[0].photos[0].url;
        return axios.get(`${APIHostURL}/reviews/meta`, {
          headers: {
            Authorization: APIKey
          },
          params: {
            product_id: product
          }
        });
      })
      .then((reviews) => {
        console.log(reviews);
        products.rating = reviews.data.ratings;
        details.push(products);
        return products;
      })
      .catch((err) => {
        console.log('Error in ProductListInfo: ', err);
      })
  }))
    .then((results) => {
      return details;
    })
    .catch((err) => {
      console.log('ERROR IN MAP: ', err);
    })
}

module.exports.ProductListInfo = ProductListInfo;