/**
 * Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
 */

let subsets = (nums) => {
  let output = [];
  let recursion = (subset, options) => {
    if(!options.length) {
      return;
    }
    for(let i = 0; i < options.length; i ++) {
      // debugger;
      let temp = subset.slice();
      temp.push(options[i]);
      output.push(temp);
      // console.log(output);
      recursion(temp.slice(), options.slice(i+1));
    }
  }

  recursion([], nums);
  return output;

}

let test = [1,2,3];
console.log(subsets(test));