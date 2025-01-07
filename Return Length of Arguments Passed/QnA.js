// Write a function argumentsLength that returns the count of arguments passed to it.

// Example 1:

// Input: args = [5]
// Output: 1
// Explanation:
// argumentsLength(5); // 1

// One value was passed to the function so it should return 1.
// Example 2:

// Input: args = [{}, null, "3"]
// Output: 3
// Explanation:
// argumentsLength({}, null, "3"); // 3

// Three values were passed to the function so it should return 3.
//solution
/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {
  // let arrVal=0;
  // for(let i=0;i<args.length;++i){
  //     arrVal=i+1;
  // }
  // return arrVal; //time complexity=O(n); space complexity is O(1)
  return args.length; //time complexity=O(1); space complexity is O(1)
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
