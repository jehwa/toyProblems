/**
 * Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Input: a = "11", b = "1"
Output: "100"

Input: a = "1010", b = "1011"
Output: "10101"

 */

let addBinary = (a,b) => {
  let output = [];
  let aPointer = a.length - 1;
  let bPointer = b.length - 1;
  let addOn = 0;
  let sum;

  while(aPointer >= 0 || bPointer >= 0) {
    let numberA = Number(a[aPointer]) || 0;
    let numberB = Number(b[bPointer]) || 0;
    sum = numberA + numberB + addOn
    if(sum >= 2) {
      output.unshift(sum - 2);
      addOn = 1;
    } else {
      output.unshift(sum);
      addOn = 0;
    }
    aPointer --;
    bPointer --;
  }
  if(addOn !== 0) {
    output.unshift(addOn);
  }
  return output.join('');

}

console.log(addBinary("1111", "1111"));

// add two way auth test!
// one more test