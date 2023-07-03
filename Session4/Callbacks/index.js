// function passed as argument to another function ---> callback function
// executed at certain point in the code or when an asynchronous operation is completed.

function fetchData(callback) {
    setTimeout(() => {
      const data = "Hello world!";
      callback(data);
    }, 2000);
  }
  
  // callback function which we are passing above
  function CBFunction(data) {
    console.log("Processed Data:", data);
  }
  
  fetchData(CBFunction);
  