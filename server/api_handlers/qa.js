const axios = require('axios');
require('dotenv').config();

const APIHostURL = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp";
const APIKey = process.env.FEC_API_KEY;

// Q&A
// /qa/questions <-- GET
  // params:
    // product_id (INT) -- required id of product for which to retrieve questions
    // page (INT) -- select page of results to return, defaults to 1
    // count (INT) -- specifies how many results per page to return, defaults to 5
// /qa/questions/:question_id/answers <-- GET answers for a given question
  // params:
    // question_id (INT) -- required id of question for which to retrieve answers
  // query params:
    // page (INT) -- select page of results to return, defaults to 1
    // count (INT) -- specifies how many results per page to return, defaults to 5
// /qa/questions <-- POST to add a question for the given product
  // body params:
    // body (TEXT) -- text of question being asked
    // name (TEXT) -- username for question asker
    // email (TEXT) -- email address for the question asker
    // product_id (INT) -- required id of product for which the question is posted
// /qa/questions/:question_id/answers <-- POST to add an answer for a given question
  // params:
    // question_id (INT) -- required id of question for which to post answer for
  // body params:
    // body (TEXT) -- text of question being asked
    // name (TEXT) -- username for question asker (answerer?)
    // email (TEXT) -- email address for the question asker (answerer?)
    // photos ( [TEXT] ) -- array of urls corresponding to images to display
// /qa/questions/:question_id/helpful <-- PUT
  // params:
    // question_id (INT) -- required id of question to update
// /qa/questions/:question_id/report <-- PUT
  // params:
    // question_id (INT) -- required id of question to update
// /qa/answers/:answer_id/helpful <-- PUT to update an answer to show it was helpful
  // params:
    // answer_id (INT) -- required id of answer to update
// /qa/answers/:answer_id/report <-- PUT to update an answer to show it has been reported, will not delete an answer, but answer will not be returned in above GET request
  // params:
    // answer_id (INT) -- required id of answer to update

// module.exports.fnName = fnName;
