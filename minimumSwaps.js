/**
 * 
 * You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any duplicates. You are allowed to swap any two elements. You need to find the minimum number of swaps required to sort the array in ascending order.

For example, given the array  we perform the following steps:

i   arr                         swap (indices)
0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
5   [1, 2, 3, 4, 5, 6, 7]
It took  swaps to sort the array.

Function Description

Complete the function minimumSwaps in the editor below. It must return an integer representing the minimum number of swaps to sort the array.

minimumSwaps has the following parameter(s):

arr: an unordered array of integers
 */


// let minimumSwaps = (arr) => {
  
//   let output = 0;
//   let start = 0;

//   let swap = (a,b, arr) => {
//     let temp = arr[a];
//     arr[a] = arr[b];
//     arr[b] = temp;
//   }
//   // debugger;
//   while(start < arr.length - 1) {
//     if(arr[start] === start + 1) {
//       start ++;
//     } else {
//       if(arr[arr[start] -1] === start + 1) {
//         swap(start, arr[start] - 1, arr);
//         output++;
//         start++;
//       } else {
//         for(let i = start+1; i < arr.length; i ++) {
//           if(arr[start] - arr[i] > gap) {
//             gap = i
//           }
//         }
//         swap(start, gap, arr);
//         output++;
//         if(arr[start] === start+1) {
//           start++;
//         }
//       }
//     }
//   }
//   console.log(arr);
//   return output;
// }


let minimumSwaps = (arr) => {
  // need to reduce time complexity... 
  let start = 0;
  let output = 0;
  let swap = (a,b, arr) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
  while(start < arr.length-1) {
    if(arr[start] === start+1) {
      start++;
    } else {
      if(arr[arr[start]-1] === start+1) {
        swap(start, arr[start]-1, arr);
        output++;
        start++;
      } else {
        for(let i = start; i < arr[start]; i ++) {
          if(arr[i] === start+1 || arr[start] === i+1) {
            swap(i, start, arr);
            if(arr[i] === start+1) {
              start++
            }
            output++;
            break;
          }
        }
      }
    }
  }
  return output;
}


let test = [7,1,3,2,4,5,6]; //5
let test2 = [8,45,35,84,79,12,74,92,81,82,61,32,36,1,65,44,89,40,28,20,97,90,22,87,48,26,56,18,49,71,23,34,59,54,14,16,19,76,83,95,31,30,69,7,9,60,66,25,52,5,37,27,63,80,24,42,3,50,6,11,64,10,96,47,38,57,2,88,100,4,78,85,21,29,75,94,43,77,33,86,98,68,73,72,13,91,70,41,17,15,67,93,62,39,53,51,55,58,99,46];
//91


let test3 = [4,3,1,2];//3
console.log(minimumSwaps(test2));