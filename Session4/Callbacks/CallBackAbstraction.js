const fs = require("fs");

function readingFiles(filename, callback) {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  }
  
  readingFiles('test.txt', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  });

  // here readingFiles function abstracts the details of reading a file and calls the callback function with the results.   