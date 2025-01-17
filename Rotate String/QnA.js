// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

// A shift on s consists of moving the leftmost character of s to the rightmost position.

// For example, if s = "abcde", then it will be "bcdea" after one shift.

// Example 1:

// Input: s = "abcde", goal = "cdeab"
// Output: true
// Example 2:

// Input: s = "abcde", goal = "abced"
// Output: false
//solution
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  // s=s.split("");
  // goal=goal.split("");
  // let temp;
  // if(s.length!==goal.length){
  //     return false;
  // }
  // for(let i=0;i<s.length;++i){
  //     temp=s.pop();
  //     s.unshift(temp);
  //     if(s.join("")===goal.join("")){
  //         return true;
  //     }
  // }
  // return false;
  //above solution is too slow but completely accepted
  if (s.length !== goal.length) {
    return false;
  }
  return (s + s).indexOf(goal) !== -1; //indexOf return the index if goal exists in s+s else return -1
};
