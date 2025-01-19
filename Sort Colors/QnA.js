// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]
//solution
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let first = 0;
  let last = nums.length - 1;
  for (let i = 0; i <= last; ) {
    if (nums[i] === 0) {
      [nums[i], nums[first]] = [nums[first], nums[i]];
      i++;
      first++;
    } else if (nums[i] === 2) {
      [nums[i], nums[last]] = [nums[last], nums[i]];
      last--;
    } else {
      ++i;
    }
  }
  return nums;
};
