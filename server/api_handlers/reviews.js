const axios = require('axios');
require('dotenv').config();

const APIHostURL = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp";
const APIKey = process.env.FEC_API_KEY;

// REVIEWS
// /reviews/ <-- GET list of reviews for a particular product
  // query params:
    // page (INT) -- slects page of results to return, defaulted to 1
    // count (INT) -- specifies how many results per page to return, defaulted to 5
    // sort (TEXT) -- change sort order of views (newest, helpful, relevant)
    // product_id (INT)  -- required id of product to retrieve reviews for
// /reviews/meta <-- GET meta data for a given product
  // query params:
    // product_id (INT)  -- required id of product to retrieve reviews for
// /reviews <-- POST adds a new review for a given product
  // body params:
    // product_id (INT) -- required id of product being reviewed
    // rating (INT) -- 1-5, indicating review rating
    // summary (TEXT) -- summary text of review
    // body (TEXT) -- continued or full text of review
    // recommend (BOOL) -- value indicating if reviewer recommends product
    // name (TEXT) -- username for question asker (reviewer?)
    // email (TEXT) -- email address for question asker (reviewer?)
    // photos ( [TEXT] ) -- array of text urls that link to images to be shown
    // characteristics (OBJ) -- object of keys representing characteristic_id and values representing the review value for that characteristic
// /reviews/:review_id/helpful <-- PUT (will send a 204 in response, no content)
  // params:
    // review_id (INT) -- required id of review to update
// /reviews/:review_id/report <-- PUT (will send a 204 in response, no content), updates review to show it was reported, but does not delete review, will not show if you submit a GET request
  // params:
    // review_id (INT) -- required id of review to report

// module.exports.fnName = fnName;
