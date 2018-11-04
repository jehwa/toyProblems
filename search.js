/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
*/

let search = (nums, target) => {

  let start = 0;
  let end = nums.length - 1;

  while(start < end) {
    let half = Math.floor((start + end)/2);
    if(nums[half] === target) return half;
    if(nums[start] <= nums[half]) {
      if(target >= nums[start] && target < nums[half]) {
        end = half - 1;
      } else {
        start = half + 1;
      }
    } else {
      if(target > nums[half] && target <= nums[end]) {
        start = half + 1;
      } else {
        end = half - 1;
      }
    }
  }
  return nums[end] === target ? end : -1;
  
}

let test = [3,1];
console.log(search(test, 1));
