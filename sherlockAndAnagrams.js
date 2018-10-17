

let sherlockAndAnagrams = (s) => {

  let subStrings = {};
  let count = 0;
  for(let i = 0; i < s.length; i ++) {
    for(let j = i; j < s.length; j ++) {
      let temp = s.substring(i, j+1).split('').sort().join('');
      subStrings[temp] = subStrings[temp] + 1 || 1;
    }
  }

  for(let pair in subStrings) {
    if(subStrings[pair] > 1) {
      let tempCount = (subStrings[pair] * (subStrings[pair]-1))/2;
      count += tempCount;
    }
  }
  return count;
}
console.log(sherlockAndAnagrams('kkkk'));