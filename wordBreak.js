let wordBreak = (s, wordDict) => {

  let del = (string, target) => {
    if(!string.length) {
      return true;
    }
    s = string.split(target).join('');
  }
  for(let i = 0; i < wordDict.length; i ++) {
    let curr = wordDict[i];
    if(del(s, curr) === true) {
      return true;
    };
  }
  return !s.length;
}

console.log(wordBreak("bb", ["a","b","bbb","bbbb"]));

let test = 'cars'
let testD = ['car', 'ca', 'rs'];//true;