let isPalindrome = (s) => {
  let lowerCase = s.toLowerCase();
  let valid = '';
  for(let i = 0; i < lowerCase.length; i ++) {
    if((lowerCase[i].charCodeAt(0) >= 48 && lowerCase[i].charCodeAt(0) <= 57) || (lowerCase[i].charCodeAt(0) >= 97 && lowerCase[i].charCodeAt(0) <= 122)) {
      valid += lowerCase[i];
    }
  }
  let left = 0;
  let right = valid.length - 1;
  while(left <= right) {
    if(valid[right] === valid[left]) {
      right--;
      left++;
    } else {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("0P"));
'a.' //true
'0P' //false