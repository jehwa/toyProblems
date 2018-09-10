// Given a string, find the length of the longest substring without repeating characters.

// Examples:

// Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.


let lengthOfLongestSubstring = (s) => {
  let storage = {};
  let subString = '';
  let output = '';
  let recursion = (array) => {
    for(let i = 0; i < array.length; i ++) {
      if(!storage[array[i]]) {
        subString += array[i];
        storage[array[i]] = true;
      } else {
        if(output.length < subString.length) {
          output = subString;
        }
        subString = '';
        storage = {};
        array.splice(0,1);
        recursion(array);
      }
    }
  }

  recursion(s.split(''));
  return Math.max(output.length, subString.length);
}

console.log(lengthOfLongestSubstring('abcabcbb'));