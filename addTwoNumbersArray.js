let l1 = [2, 4, 3];
let l2 = [5, 6, 4];



let addTwoNumbers = (l1, l2) => {
  let output = [];
  let extra = 0;
  let sum = 0;
  let pointer = 0;
  let val1, val2;
  while(l1[pointer] || l2[pointer] || extra) {
    l1[pointer] ? val1 = l1[pointer] : val1 = 0;
    l2[pointer] ? val2 = l2[pointer] : val2 = 0;
    sum = val1 + val2 + extra;
    output.push(sum % 10);
    extra = Math.floor(sum / 10);
    pointer++;
  }
  return output;
}

console.log(addTwoNumbers(l1, l2));

