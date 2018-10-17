let makeAnagram = (a,b) => {
  let dicA = {};
  let remainingA = a.length;
  let remainingB = b.length;
  for(let i = 0; i < a.length; i ++) {
    dicA[a[i]] = dicA[a[i]] + 1 || 1;
  }

  for(let j = 0; j < b.length; j ++) {
    if(dicA[b[j]]) {
      remainingA--;
      remainingB--;
      dicA[b[j]]--;
    }
  }

  return remainingA + remainingB;

}

console.log(makeAnagram('cdc','abc'));  //4