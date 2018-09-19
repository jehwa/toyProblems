

let countSorting = (arr) => {

  let freq = [];
  let output = [];

  for(let i = 0; i < arr.length; i ++) {
    freq[arr[i]] = (freq[arr[i]] || 0) + 1;
  }

  for(let j = 1; j < freq.length; j ++) {
    freq[j] = (freq[j-1] || 0) + freq[j];
  }

  for(let k = 0; k < arr.length; k ++) {
    // debugger;
    output[freq[arr[k]] - 1] = arr[k];
    freq[arr[k]] --;
  }

  return output;
}

let test = [1,3,1,2,4]
// [1,1,2,3,4]

console.log(countSorting(test));