// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
//solution
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let sign = Math.sign(x); //returns 1 if x is positive and -1 if x is negative
  Math.abs(x);
  let newVal = sign * parseInt(x.toString().split("").reverse().join(""));
  let limit = Math.pow(2, 31);
  if (newVal <= -limit || newVal > limit) return 0;
  return newVal;
};
