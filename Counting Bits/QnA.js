// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

// Example 1:

// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// Example 2:

// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101
//solution
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let bits = [];
  for (let i = 0; i <= n; i++) {
    bits.push(i.toString(2).split("1").length - 1);
  }
  return bits;
  //Time complexity: O(n)
  //Space complexity: O(n)
  //Explanation: We are using a loop to iterate from 0 to n. For each number, we convert it to binary using toString(2) and split it into an array of 1's. The length of this array minus 1 gives us the count of 1's in the binary representation.
  //Note: JavaScript's toString() method converts a number to a string, and split() method splits a string into an array of substrings based on a specified separator.
  //this solution is not very good and slow, i will make it more optimal in future
};
