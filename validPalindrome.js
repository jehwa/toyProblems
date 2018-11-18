/*

Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

Example 1:
Input: "aba"
Output: True
Example 2:
Input: "abca"
Output: True
Explanation: You could delete the character 'c'.
Note:
The string will only contain lowercase characters a-z. The maximum length of the string is 50000.
*/

let validPalindrome = (s) => {
  let start = 0;
  let end = s.length -1;

  let helper = (string, l, r) => {
    while(l < r) {
      if(string[l] === string[r]) {
        l ++;
        r --;
      } else {
        return false;
      }
    }
    return true;
  }

  while(start < end) {
    if(s[start] === s[end]) {
      start ++;
      end --;
    } else {
      return helper(s, start +1, end) || helper(s, start, end - 1);
    }
  }
  return true;

}

let test = 'aba' // true
let test1 = 'abca' //true
let test2 = 'cbbcc' //false
console.log(validPalindrome(test2));