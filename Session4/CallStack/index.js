function multiply(a, b) {
    console.log("Inside Multiply");
    return a * b;
  }
  
  function square(n) {
    console.log("Inside Square")
    return multiply(n, n);
  }
  
  function printResult(result) {
    console.log("Inside printResult")
    console.log("Result:", result);
  }
  
  const number = 5;
  const squared = square(number);
  printResult(squared);

  // In this... (LIFO) principle follows while executing the functions
  // You can also see the which function is executing first by running this code
  