const axios = require('axios');
require('dotenv').config();

const APIHostURL = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp";
const APIKey = process.env.FEC_API_KEY;

// INTERACTIONS
// /interactions <-- POST to add an interaction to the db
  // body params:
    // element (STRING) -- required selector for element which was clicked
    // widget (STRING) -- required param for name of module for widget in which the click occurred
    // time (STRING) -- required param for time the interaction occurred

// module.exports.fnName = fnName;
