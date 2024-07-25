// Define a function named 'sum' that takes two parameters 'a' and 'b'
function sum(a, b) {
    // Inside the function, calculate the sum of 'a' and 'b'
    const sumValue = a + b;
  
    // Return the calculated sum
    return sumValue;
  }
  
  // Call the 'sum' function with arguments 1 and 2, store the result in 'value'
  const value = sum(1, 2);
  
  // Call the 'sum' function with arguments 1 and 10, store the result in 'value2'
  const value2 = sum(1, 10);
  
  // Print the values to the console
  console.log(value);  // Output: 3
  console.log(value2); // Output: 11
  