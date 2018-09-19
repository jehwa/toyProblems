/**
 * HackerLand National Bank has a simple policy for warning clients about possible fraudulent account activity. If the amount spent by a client on a particular day is greater than or equal to  the client's median spending for a trailing number of days, they send the client a notification about potential fraud. The bank doesn't send the client any notifications until they have at least that trailing number of prior days' transaction data.

Given the number of trailing days  and a client's total daily expenditures for a period of days, find and print the number of times the client will receive a notification over all  days.

For example,  and . On the first three days, they just collect spending data. At day , we have trailing expenditures of . The median is  and the day's expenditure is . Because , there will be a notice. The next day, our trailing expenditures are  and the expenditures are . This is less than  so no notice will be sent. Over the period, there was one notice sent.

Note: The median of a list of numbers can be found by arranging all the numbers from smallest to greatest. If there is an odd number of numbers, the middle one is picked. If there is an even number of numbers, median is then defined to be the average of the two middle values. (Wikipedia)

Function Description

Complete the function activityNotifications in the editor below. It must return an integer representing the number of client notifications.

activityNotifications has the following parameter(s):

expenditure: an array of integers representing daily expenditures
d: an integer, the lookback days for median spending
Input Format

The first line contains two space-separated integers  and , the number of days of transaction data, and the number of trailing days' data used to calculate median spending. 
The second line contains  space-separated non-negative integers where each integer denotes .

Constraints

Output Format

Print an integer denoting the total number of times the client receives a notification over a period of  days.

Sample Input 0

9 5
2 3 4 2 3 6 8 4 5
Sample Output 0

2
 */

let activityNotifications = (expenditure, d) => {
  //using Counting Sort
  //still working on!!!

  let startIndex = 0;
  let freq = [];
  let median;
  let count = 0;
  let output = 0;
  let odd = d % 2;

  for(let i = 0; i < d; i ++) {
    freq[expenditure[i]] = (freq[expenditure[i]] || 0) + 1;
  }

  for(let j = d; j < expenditure.length; j ++) {
    debugger;
    for(let k = 0; k < freq.length; k ++) {
      count += (freq[k] || 0);
      if(odd) {
        if(count >= Math.ceil(d/2)) {
          median = k;
          break;
        }
      } else {
        if(count > d/2) {
          median = k;
          break;
        } 
        if(count === d/2) {
          for(let l = k + 1; l < freq.length; l++) {
            if(typeof(freq[l]) === 'number') {
              median = (k+l)/2;
              break;
            }
          }
          break;
        }
      }

    }
    if(expenditure[j] >= 2 * median) {
      output ++;
    }
    freq[expenditure[startIndex]] --
    freq[expenditure[d]] = (freq[expenditure[d]] || 0) + 1;
    startIndex++;
    count = 0;
  }
  return output;
  
}

let test = [1,2,3,4,4];
let testD = 4
// 0

let test2 = [2,3,4,2,3,6,8,4,5];
let testD2 = 5
//2

console.log(activityNotifications(test2, testD2));