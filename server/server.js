const express = require('express');
const path = require('path');
const app = express();
const cart_api = require('./api_handlers/cart');
const interactions_api = require('./api_handlers/interactions');
const products_api = require('./api_handlers/products');
const qa_api = require('./api_handlers/qa');
const reviews_api = require('./api_handlers/reviews');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'../client/dist')));

app.get('/products', (req, res) => {
  products_api.getAllProducts()
    .then(allProducts => {
      // console.log('All Products: ', allProducts.data);
      res.status(200).send(allProducts.data);
    })
    .catch(error => {
      console.error('Error in getAllProducts: ', error);
      res.status(404).send(error);
    });
});

app.get('/products/:product_id', (req, res) => {
  var product_id = req.params.product_id;
  console.log('THIS IS PRODUCT_ID: ', product_id);
  products_api.getOneProduct(product_id)
    .then((productDetails) => {
      res.status(200).send(productDetails.data)
    })
    .catch((error) => {
      console.error('Error in getOneProduct: ', error);
      res.status(404).send(error);
    })
})

//REVIEW ROUTES:

app.get('/reviews', (req, res) => {
  reviews_api.getReviews(req, res)
    .then(reviews => {
      res.status(200).send(reviews.data);
    })
    .catch(error => {
      console.error('Error in getAllProducts: ', error);
      res.status(404).send(error);
    });
});

app.get('/reviews/meta', (req, res) => {
  reviews_api.getReviewsMeta(req, res)
    .then(reviewsMeta => {
      res.status(200).send(reviewsMeta.data);
    })
    .catch(error => {
      console.error('Error in getting reviews meta: ', error);
      res.status(404).send(error);
    });
});

app.post('/reviews', (req, res) => {
  reviews_api.postReview(req, res)
    .then(success => {
      res.status(201).send(success);
    })
    .catch(error => {
      console.error('Error posting Review: ', error);
      res.status(404).send(error);
    });
});

app.put('/reviews/helpful', (req, res) => {
  reviews_api.putHelpful(req, res)
    .then(success => {
      res.status(204);
    })
    .catch(error => {
      console.error('Error marking Review helpful: ', error);
      res.status(404).send(error);
    });
});

app.put('/reviews/report', (req, res) => {
  reviews_api.putReportReview(req, res)
    .then(success => {
      res.status(204);
    })
    .catch(error => {
      console.error('Error reporting Review: ', error);
      res.status(404).send(error);
    });
});

//END REVIEWS ROUTES


app.listen(3000, function(){
  console.log('connected to server!')
});
