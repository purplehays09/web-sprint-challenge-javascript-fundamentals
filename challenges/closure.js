// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

// with closures, variables are have a limited scope. They can reach down into nested functions, but cannot reach up into parent functions. This means that if you have a variable inside the 'nestedFunction', you couldn't access it after the closing function brace

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(num){
  let total = 0;
  for(let i = 0; i<=num; i++){
    total+= i
  }

  return total
}

console.log(summation(6))


