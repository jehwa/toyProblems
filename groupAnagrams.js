

let groupAnagrams = (strs) => {
  let storage = {};
  let output = [];
  // unicode = 97 ~ 122
  // debugger;
  strs.forEach((str) => {
    let countChr = Array(26).fill(0);
    for(let i = 0; i < str.length; i ++) {
      let code = str.charCodeAt(i) - 97;
      countChr[code] ++;
    }
    let converter = countChr.join('');
    if(!storage[converter]) {
      storage[converter] = [str];
    } else {
      storage[converter].push(str);
    }
  })

  for(let group in storage) {
    output.push(storage[group]);
  }

  return output;


  // let storage = {};
  // let output = [];
  // strs.forEach(str => {
  //   let sortStr = str.split('').sort();
  //   if(storage[sortStr]) {
  //     storage[sortStr].push(str);
  //   } else {
  //     storage[sortStr] = [str];
  //   }
  // })
}

let test = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(test));