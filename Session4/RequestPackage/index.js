const request = require('request');

request('http://www.google.com', function (error, response, body) {
  console.error('error:', error); 
  console.log('statusCode:', response && response.statusCode); 
});