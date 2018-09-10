// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

let moveZeroes = (nums) => {
  let i = 0;
  let count = 0;
  while (nums.length > count) {
    if(nums[i] !== 0) {
      i++
    } else {
      nums.splice(i,1);
      nums.push(0);
    }
    count ++
  }
  return nums;
}

let nums = [0,1,0,3,12]
moveZeroes(nums);
console.log(nums);
