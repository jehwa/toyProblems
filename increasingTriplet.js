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
  let min = nums[0];
  let nextMin = Infinity;
  // debugger;
  for(let val of nums) {
    if(val <= min) {
      min = val;
    } else if(val <= nextMin) {
      nextMin = val;
    } else {
      return true;
    }
  }
  return false;

}

let test = [1,2,3,4,5] // true;
let test1 = [5,4,3,2,1] //false;
let test2 = [2,1,5,0,4,6] //true;
let test3 = [5,1,5,5,2,5,4] // true
let test4 = [0,4,2,1,0,-1,-3] // false

console.log(increasingTriplet(test1))