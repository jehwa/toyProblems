/*
Given a non-negative integer, you could swap two digits at most once to get the maximum valued number. Return the maximum valued number you could get.

Example 1:
Input: 2736
Output: 7236
Explanation: Swap the number 2 and the number 7.
Example 2:
Input: 9973
Output: 9973
Explanation: No swap.
Note:
The given number is in the range [0, 108]
*/

let maximumSwap = (num) => {
  let splitNum = String(num).split('');
  let max = [0,null];
  let swapIndex;
  // debugger;
  let recursion = (start) => {
    if(start === num.length) {
      return;
    }
    for(let i = start; i < splitNum.length; i ++) {
      if(splitNum[i] >= max[0]) {
        max = [splitNum[i], i];
      }
    }
    if(max[0] === splitNum[start]) {
      max = [0,null];
      recursion(start+1);
    } else {
      swapIndex = start;
    }

  }

  recursion(0);
  if(max[1] != null) {
    let temp = splitNum[swapIndex];
    splitNum[swapIndex] = max[0];
    splitNum[max[1]] = temp;
  }
  return (Number(splitNum.join('')));
  
}

let test = 98368;
console.log(maximumSwap(test));