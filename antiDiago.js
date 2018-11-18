/*
	
Give a N*N square matrix, return an array of its anti-diagonals. Look at the example for more details.

Example:

		
Input: 	

1 2 3
4 5 6
7 8 9

Return the following :

[ 
  [1],
  [2, 4],
  [3, 5, 7],
  [6, 8],
  [9]
]


Input : 
1 2
3 4

Return the following  : 

[
  [1],
  [2, 3],
  [4]
]
*/

let antiDiago = (A) => {
  var output = [];

  var recursion = (r,c,arr) => {
    // debugger;
    arr.push(A[r][c]);
    A[r][c] = false;
    if(!c || r === A.length -1) {
      output.push(arr.slice());
      return;
    }
    recursion(r+1, c-1, arr);
  }
  for(var i = 0; i < A.length; i ++) {
    for(var j = 0; j < A.length; j ++) {
      // debugger;
      if(A[i][j] !== false) {
        recursion(i,j,[]);
      }
    }
  }
  return output;
}

var test = [[0]];
console.log(antiDiago(test));


// [[0,0],[0,1],[0,2],
// [1,0],[1,1],[1,2],
// [2,0],[2,1],[2,2]
// ]

// [0,0]
// [0,1],[1,0]
// [0,2][1,1][2,0]