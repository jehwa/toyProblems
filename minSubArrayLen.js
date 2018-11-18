/*
Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

Example: 

Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.
Follow up:
If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n). 
*/

let minSubArrayLen = (s, nums) => {
  let sum = 0;
  let right = 0;
  let left = 0;
  let output = Infinity;
  while(right <= nums.length) {
    if(sum < s) {
      sum += nums[right];
      right++;
    } else {
      output = Math.min(output, right - left);
      sum -= nums[left];
      left ++;
    }
  }

  return output === Infinity ? 0 : output;
  
}

let test = [1,2,3,4,5]; // 11 output: 3
let test1 = [2,3,1,2,4,3] // 7 output: 2
let test2 = [50, 1, 9, 20]
console.log(minSubArrayLen(11, test))





