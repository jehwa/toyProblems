// let maxProfit = (prices) => {

//   if(!prices.length) {
//     return 0;
//   }
//   let minIndex = 0;
//   let min = prices[0];

//   for(let i = 0; i < prices.length - 1; i ++) {
//     if(prices[i] < min) {
//       min = prices[i];
//       minIndex = i;
//     }
//   }

//   let max = min;

//   for(let j = minIndex+1; j < prices.length; j ++) {
//     if(max < prices[j]) {
//       max = prices[j];
//     }
//   }
//   return max - min;

// }

// let maxProfit = (prices) => {
//   let min;
//   let max;
//   let profit = 0;

//   if(!prices.length) {
//     return profit;
//   }

//   for(let i = 0; i < prices.length -1; i ++) {
//     min = prices[i];
//     for(let j = i + 1; j < prices.length; j ++) {
//       max = prices[j];
//       let temp = max - min
//       if(profit < temp) {
//         profit = temp;
//       }
//     }

//   }

//   return profit;
// }

let maxProfit = (prices) => {
  let minPri = prices[0];
  let maxPro = 0;
  if(!prices.length) {
    return maxPro;
  }
  for(let i = 0; i < prices.length; i ++) {
    if(prices[i] < minPri) {
      minPri = prices[i];
    }
    let profit = prices[i] - minPri;
    if(profit > maxPro) {
      maxPro = profit;
    }
  }
  return maxPro;
}

[5,4,3,2,1];

let test = [7,1,5,3,6,4] //5
let test1 = [2,4,1] //2
let test2 = [3,2,6,5,0,3] //4

console.log(maxProfit(test2));