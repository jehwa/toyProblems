/*
Find shortest unique prefix to represent each word in the list.

Example:

Input: [zebra, dog, duck, dove]
Output: {z, dog, du, dov}
where we can see that
zebra = z
dog = dog
duck = du
dove = dov
NOTE : Assume that no word is prefix of another. In other words, the representation is always possible.
*/
let prefix = (A) => {
  class TrieNode {
    constructor(){
      this.children = {}
    }
  }
  let dic = new TrieNode();

  for(let i = 0; i < A.length; i ++) {
    for(let j = 0; j < A[i].length; j ++) {
      if(!dic.children[A[i][j]]) {
      dic.children[A[i][j]] = new TrieNode();
      }
    }
  }

  console.log(dic);

}



let test = ['zebra', 'dog', 'duck', 'dove']

prefix(test);