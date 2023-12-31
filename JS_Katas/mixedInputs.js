// Write a sum method which will work properly when invoked using either syntax below.

/*
console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5
*/

// using arguments
function sum(x) {
    if (arguments.length == 2) {
      return arguments[0] + arguments[1];
    } else {
      return function(y) { return x + y; };
    }
  }

  // method 2

  function sum(x, y) {
    if (y !== undefined) {
      return x + y;
    } else {
      return function(y) { return x + y; };
    }
  }