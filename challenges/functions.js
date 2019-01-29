// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume(input1, input2, cb) {
  
  return cb(input1,input2)
}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add(input1, input2){
  return input1 + input2
}

function multiply(input1, input2){
  return input1 * input2
}

function greeting(input1, input2){
  return `Hello ${input1} ${input2}, nice to meet you!`
}



/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2,2,add)) // 4
console.log(consume(10,16,multiply)) // 160
console.log(consume("Mary","Poppins", greeting)) // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
// Internal is first defined in myfunction but since nestedfunction is nested inside of myFunction it can pull 
// the stored variable value since its within scope/the same environment. Essentially this is an example of closure.


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