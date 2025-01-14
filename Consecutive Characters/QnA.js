// The power of the string is the maximum length of a non-empty substring that contains only one unique character.

// Given a string s, return the power of s.

// Example 1:

// Input: s = "leetcode"
// Output: 2
// Explanation: The substring "ee" is of length 2 with the character 'e' only.
// Example 2:

// Input: s = "abbcccddddeeeeedcba"
// Output: 5
// Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
//solution
/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  let count = 1;
  let max = 0;
  for (let i = 0; i < s.length; ++i) {
    let current = s[i];
    let next = s[i + 1];
    if (current === next) {
      count++;
    } else {
      max = Math.max(max, count);
      count = 1;
    }
  }
  return max;
};
