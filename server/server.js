const express = require('express');
const path = require('path');
const app = express();
const api = require('./api_handler.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'../client/dist')));

app.get('/products', (req, res) => {
  api.getAllProducts()
    .then(allProducts => {
      console.log('All Products: ', allProducts);
      res.status(200).send(allProducts);
    })
    .catch(error => {
      console.error('Error in getAllProducts: ', error);
      res.status(404).send(error);
    })
})

app.listen(3000, function(){
  console.log('connected to server!')
});
