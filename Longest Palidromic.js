// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

// let longestPalindrome = (s) => {
//   let reversed = s.split('').reverse().join('');
//   let output = '';
//   let subString = '';
//   console.log(reversed);
//   for(let i = 0; i < s.length; i ++) {
//     if(reversed[i] === s[i]) {
//       subString += s[i];
//     } else {
//       if(subString.length > 1 && subString.length > output.length) {
//         output = subString;
//       }
//       subString = '';
//     }
//   }
//   return output;
// }

let longestPalindrome = (s) => {
  let longest = '';

  let findPal = (l,r) => {
    while(l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++
    }
    return s.slice(l+1, r);
  }

  for(let i = 0; i < s.length; i ++) {
    let oddPal = findPal(i-1, i+1);
    let evenPal = findPal(i-1, i);
    if(oddPal.length > longest.length) {
      longest = oddPal;
    }
    if(evenPal.length > longest.length) {
      longest = evenPal;
    }
  }
  return longest;

}

console.log(longestPalindrome('cbbd'));