
let bubbleSort = (arr) => {
  
  let swap = (i, j, array) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    return array;
  }
  let lastIndex = arr.length - 1;
  let sorted = false;
  let sortingNumber = 0;

  while(!sorted) {
    sorted = true;
    for(let i = 0; i < lastIndex; i ++) {
      if(arr[i] > arr[i+1]) {
        swap(i, i+1, arr);
        sortingNumber ++
        sorted = false;
      }
    }
    lastIndex --;
  }
  console.log(
    `Array is sorted in ${sortingNumber} swaps.`, 
    `First Element: ${arr[0]}`,
    `Last Element: ${arr[arr.length-1]}`
    );
}


let test = [7,2,4,10,1];

console.log(bubbleSort(test));