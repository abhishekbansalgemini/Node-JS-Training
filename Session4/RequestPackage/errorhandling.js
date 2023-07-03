const request = require('request');

const options = {
  url: 'https://api.github.com/repos/request/request',
  method: 'GET',
  headers: {
    'User-Agent': 'Request',
  },
};

request(options, (error, response, body) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Response:", response.statusCode);

    if (response.statusCode === 200) {
      console.log("Data:", body);
    } else if (response.statusCode === 404) {
      console.log("Data not found.");
    } else {
      console.log("Unknown error occurred.");
    }
  }
});
