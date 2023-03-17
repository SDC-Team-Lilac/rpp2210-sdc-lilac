const axios = require('axios');
require('dotenv').config();

const APIHostURL = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp";
const APIKey = process.env.FEC_API_KEY;

// Q&A
// /qa/questions <-- GET
  // params:
  //   product_id (INT) -- required id of product for which to retrieve questions
  //   page (INT) -- select page of results to return, defaults to 1
  //   count (INT) -- specifies how many results per page to return, defaults to 5

const getProductQuestions = (product_id, page=1, count=5) => {
  return axios.get(`${APIHostURL}/qa/questions`, {
    params: {
        product_id: product_id,
        page,
        count
    },
    headers: {
      Authorization: APIKey
    }
  });
};
// /qa/questions/:question_id/answers <-- GET answers for a given question
  // params:
    // question_id (INT) -- required id of question for which to retrieve answers
  // query params:
    // page (INT) -- select page of results to return, defaults to 1
    // count (INT) -- specifies how many results per page to return, defaults to 5
const getProductAnswers = (question_id, page=1, count=5) => {
  return axios.get(`${APIHostURL}/qa/questions/${question_id}/answers`, {
    params: {
        page,
        count
    },
    headers: {
      Authorization: APIKey
    }
  });
};


// /qa/questions <-- POST to add a question for the given product
  // body params:
    // body (TEXT) -- text of question being asked
    // name (TEXT) -- username for question asker
    // email (TEXT) -- email address for the question asker
    // product_id (INT) -- required id of product for which the question is posted

const AddProductQuestion = (questionData) => {
  return axios.post(`${APIHostURL}/qa/questions`,
    {
      body: questionData.body,
      name: questionData.name,
      email: questionData.email,
      product_id: questionData.product_id
    },
    {
      headers: {
      Authorization: APIKey,
    }
  });
};


// /qa/questions/:question_id/answers <-- POST to add an answer for a given question
  // params:
    // question_id (INT) -- required id of question for which to post answer for
  // body params:
    // body (TEXT) -- text of question being asked
    // name (TEXT) -- username for question asker (answerer?)
    // email (TEXT) -- email address for the question asker (answerer?)
    // photos ( [TEXT] ) -- array of urls corresponding to images to display
const AddProductAnswer = (question_id, answerData) => {
  return axios.post(`${APIHostURL}/qa/questions/${question_id}/answers`,
    {
      body: answerData.body,
      name: answerData.name,
      email: answerData.email,
      photos: answerData.photos
    },
    {
      headers: {
      Authorization: APIKey
    }
  });
};


// /qa/questions/:question_id/helpful <-- PUT
  // params:
    // question_id (INT) -- required id of question to update
    const updateQuestionHelpful = (question_id) => {
      return axios.put(`${APIHostURL}/qa/questions/${question_id}/helpful`, null, {
        headers: {
          Authorization: APIKey
        }
      });
    }

// /qa/questions/:question_id/report <-- PUT
  // params:
    // question_id (INT) -- required id of question to update
    const updateQuestionReport = (question_id) => {
      return axios.put(`${APIHostURL}/qa/questions/${question_id}/report`, null, {
        headers: {
          Authorization: APIKey
        }
      });
    }

// /qa/answers/:answer_id/helpful <-- PUT to update an answer to show it was helpful
  // params:
    // answer_id (INT) -- required id of answer to update
    const updateAnswerHelpful = (answer_id) => {
      return axios.put(`${APIHostURL}/qa/answers/${answer_id}/helpful`, null, {
        headers: {
          Authorization: APIKey
        }
      });
    }

// /qa/answers/:answer_id/report <-- PUT to update an answer to show it has been reported, will not delete an answer, but answer will not be returned in above GET request
  // params:
    // answer_id (INT) -- required id of answer to update

    const updateAnswerReport = (answer_id) => {
      return axios.put(`${APIHostURL}/qa/answers/${answer_id}/report`, null, {
        headers: {
          Authorization: APIKey
        }
      });
    }

module.exports.getProductQuestions = getProductQuestions;
module.exports.getProductAnswers = getProductAnswers;
module.exports.AddProductQuestion = AddProductQuestion;
module.exports.AddProductAnswer = AddProductAnswer;
module.exports.updateQuestionHelpful = updateQuestionHelpful;
module.exports.updateQuestionReport = updateQuestionReport;
module.exports.updateAnswerHelpful = updateAnswerHelpful;
module.exports.updateAnswerReport = updateAnswerReport;
