/*
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.

*/

let exist = (board, word) => {

  if(board.length * board[0].length < word.length) {
    return false;
  }
  // debugger;
  let recursion = (charIndex, I, J) => {
    if(I < 0 || J < 0 || I > board.length -1 || J > board[0].length-1) return false;
    if(word[charIndex] !== board[I][J]) return false;
    if(charIndex === word.length -1) return true;
    
    board[I][J] = true;
    //check up
    if(recursion(charIndex+1, I-1,J)) return true;
    
    //check down
    if(recursion(charIndex+1, I+1,J)) return true;
    
    //check right
    if(recursion(charIndex+1, I,J+1)) return true;
    
    //check left
    if(recursion(charIndex+1, I,J-1)) return true;

    board[I][J] = word[charIndex];

    return false;

  }
  
  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[0].length; j ++) {
      if(word[0] === board[i][j]) {
        if(recursion(0,i,j)) return true;;
      }
    }
  }
  return false;
  
}

let board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

let board1 = [["a","a","a","a"],["a","a","a","a"],["a","a","a","a"]]

let test = 'ABCCED' //return true;
let test1 = 'SEE' //true;
let test2 = 'ABCB' //false;

let test3 = "aaaaaaaaaaaaa" //board1 return false

console.log(exist(board,test));

