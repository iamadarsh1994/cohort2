// Define a function named 'calculateArithmetic' that takes two numbers (a and b)
// and a function ('arithmeticFinalFunction') as parameters
function calculateArithmetic(a, b, arithmeticFinalFunction){
    // Inside the function, call the provided function with the arguments 'a' and 'b'
    const ans = arithmeticFinalFunction(a, b);

    // Return the result of the function call
    return ans;
}

// Define another function named 'sum' that takes two numbers and returns their sum
function sum(a, b){
    return a + b;
}

// Call the 'calculateArithmetic' function with arguments 1, 2, and the 'sum' function
// Store the result in the variable 'value'
const value = calculateArithmetic(1, 2, sum);

// Print the value to the console
console.log(value);

//In JavaScript, a callback function is a function that is passed as an argument to another function and is executed after the completion of an asynchronous operation or at a later time.
 