/*
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
*/

let productExceptSelf = (nums) => {
  let output = Array(nums.length).fill(1);

  let leftNum = nums[0];
  for(let i = 1; i < nums.length; i ++) {
    output[i] = leftNum;
    leftNum *= nums[i];
  }

  let rightNum = nums[nums.length-1];
  for(let j = nums.length - 2; j >= 0; j --) {
    output[j] *= rightNum;
    rightNum *= nums[j]
  }

  return output;
}



productExceptSelf([2,3,4])