/*
Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: [1,2,2]
Output:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
*/

let subsetsWithDup = (nums) => {

  // TODO: find better solution!!!!
  let storage = {};
  let output = [];
  let recursion = (options, subset) => {
    let key = subset.sort()
    if(!storage[key]) {
      output.push(subset);
    }
    storage[key] = true;
    for(let i = 0; i < options.length; i ++) {
      let temp = subset.slice();
      temp.push(options[i]);
      recursion(options.slice(i+1), temp);
    }
  }
  recursion(nums, []);
  return output;
}

let test = [1,2,2];
console.log(subsetsWithDup(test));
