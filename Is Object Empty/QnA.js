// Given an object or an array, return if it is empty.

// An empty object contains no key-value pairs.
// An empty array contains no elements.
// You may assume the object or array is the output of JSON.parse.

// Example 1:

// Input: obj = {"x": 5, "y": 42}
// Output: false
// Explanation: The object has 2 key-value pairs so it is not empty.
// Example 2:

// Input: obj = {}
// Output: true
// Explanation: The object doesn't have any key-value pairs so it is empty.
// Example 3:

// Input: obj = [null, false, 0]
// Output: false
// Explanation: The array has 3 elements so it is not empty.
//solution
/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  if (Array.isArray(obj)) {
    //checking if obj is an array
    return obj.length === 0;
  } else {
    let arr = Object.keys(obj); //returning keys of the obj object in array form
    return arr.length === 0;
  }
};
