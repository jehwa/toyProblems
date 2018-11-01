let isValid = (s) => {
  let storage = {}
  let freq = {};
  let maxFreq = 0;

  for(let i = 0; i < s.length; i ++) {
    storage[s[i]] = storage[s[i]] + 1 || 1;
    if(storage[s[i]] && storage[s[i]] > maxFreq) {
      maxFreq = storage[s[i]];
    } 
  }

  for(let key in storage) {
    freq[storage[key]] = freq[storage[key]] + 1 || 1;
  }

  let freqArr = Object.keys(freq);
  
  if(freqArr.length === 1) {
    return 'YES';
  }
  if(freqArr.length === 2) {
    let s = Math.min(freqArr[0], freqArr[1]);
    let l;
    if(s == freqArr[0]) {
      l = freqArr[1];
    } else {
      l = freqArr[0];
    }
    if(l - s === 1 && freq[l] === 1) {
      return 'YES';
    }
    if(s === 1 && freq[s] === 1) {
      return 'YES';
    }
  }
  return 'NO';
}

let test = 'abcdefghhgfedecba'; //YES
console.log(isValid(test));