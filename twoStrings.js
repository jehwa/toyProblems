

let twoStrings = (s1, s2) => {
  let storage = {};

  for(let i = 0; i < s1.length; i ++) {
    storage[s1[i]] = true;
  }
  for(let j = 0; j < s2.length; j++) {
    if(storage[s2[j]]) {
      return 'YES';
    }
  }

  return 'NO';
}

// console.log(twoStrings('hello', 'world')) // YES
console.log(twoStrings('hi', 'world')) // NO
