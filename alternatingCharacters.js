let alternatingCharacters = (s) => {
  let prev = s[0];
  let del = 0;
  for(let i = 1; i < s.length; i ++) {
    if(s[i] === prev) {
      del ++;
    }
    prev = s[i];
  }

  return del;
}

console.log(alternatingCharacters('aaaa'));