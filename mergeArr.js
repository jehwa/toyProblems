/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
*/

let merge = (nums1, m, nums2, n) => {
  m--;
  n--;
  for(let i = nums1.length -1; i >= 0; i --) {
    if(n >= 0) {
      if(nums1[m] > nums2[n]) {
        nums1[i] = nums1[m];
        m--;
      } else {
        nums1[i] = nums2[n];
        n--;
      }
    }
  }

}


let nums1 = [1,2,3,0,0,0];
let nums2 = [2, 5, 6];
merge(nums1, 3, nums2, 3);
console.log(nums1);