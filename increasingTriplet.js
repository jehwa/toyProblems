/*
Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

Formally the function should:

Return true if there exists i, j, k 
such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
Note: Your algorithm should run in O(n) time complexity and O(1) space complexity.

Example 1:

Input: [1,2,3,4,5]
Output: true
Example 2:

Input: [5,4,3,2,1]
Output: false
*/

let increasingTriplet = (nums) => {
  let output = false;
  if(!nums.length) return output;
  let min = nums[0];
  let count = 0;
  for(let i = 1; i < nums.length; i ++){
    debugger;
    if(nums[i] > min) {
      count ++;
      min = nums[i];
      if(count >= 2) {
        output = true;
      }
    } else {
      min = nums[i];
      count = 0;
    }
  }
  return output;
}

let test = [1,2,3,4,5] // true;
let test1 = [5,4,3,2,1] //false;
let test2 = [2,1,5,0,4,6] //true;
let test3 = [5,1,5,5,2,5,4] // true
let test4 = [0,4,2,1,0,-1,-3] // false

console.log(increasingTriplet(test4))