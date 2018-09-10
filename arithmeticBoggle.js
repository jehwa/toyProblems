// Write a function that takes a magic number and a list of numbers. It returns true if it can insert add or subtract operations in the list of numbers to get the magic number. Otherwise, it returns false.

// For example:

// f(10, [1, 2]) = false. There's no way to add or subtract 1 and 2 to get 10.
// f(2, [1, 2, 3, 4]) = true. 1 + 2 + 3 - 4 = 2.
// f(0, []) = true
// f(1, []) = false
// f(1, [1]) = true
// f(0, [1]) = false

let arithmeticBoggle = (magicNumber, numbers) => {
  if(!numbers.length && !magicNumber) {
    return true;
  }
  let output = false;
  let recursion = (subTotal, nums) => {
    for(let i = 0; i < nums.length; i ++) {
      if(subTotal + nums[i] === magicNumber || subTotal - nums[i] === magicNumber) {
        output = true;
        return;
      } 
      recursion(subTotal + nums[i], nums.slice(i+1));
      recursion(subTotal - nums[i], nums.slice(i+1));
    }
  }
  recursion(0, numbers);
  return output;
}

console.log(arithmeticBoggle(0, [1]));
