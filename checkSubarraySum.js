/*
Given a list of non-negative numbers and a target integer k, write a function to check if the array has a continuous subarray of size at least 2 that sums up to the multiple of k, that is, sums up to n*k where n is also an integer.

Example 1:
Input: [23, 2, 4, 6, 7],  k=6
Output: True
Explanation: Because [2, 4] is a continuous subarray of size 2 and sums up to 6.
Example 2:
Input: [23, 2, 6, 4, 7],  k=6
Output: True
Explanation: Because [23, 2, 6, 4, 7] is an continuous subarray of size 5 and sums up to 42.
Note:
The length of the array won't exceed 10,000.
You may assume the sum of all the numbers is in the range of a signed 32-bit integer.
*/

let checkSubarraySum = (nums, k) => {
  // TODO: better time complexity!!
  if(nums.length < 2) {
    return false;
  }
  let l = 0;
  let r = 0;
  let sum = 0;
  while(r <= nums.length) {
    // debugger; 
    if(sum % k !== 0 || r-l < 3) {
      sum += nums[r];
      r++;
    }
    if(sum % k === 0 && r-l >= 2) {
      return true;
    } 
    if(sum === 0 && sum === k && r-l >=2) {
      return true;
    }
    if(r === nums.length) {
      sum = 0;
      l ++;
      r = l;
    }
  }
  return false;
}

let test = [23, 2, 4, 6, 7]; //k = 6, return True;
let test1 = [23, 2,4,6,7] //k = 6, return True;
let test2 = [0, 0] //k = 0, return true;

console.log(checkSubarraySum(test2, 0));