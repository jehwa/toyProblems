/**
 * 
Given a char array representing tasks CPU need to do. It contains capital letters A to Z where different letters represent different tasks.Tasks could be done without original order. Each task could be done in one interval. For each interval, CPU could finish one task or just be idle.

However, there is a non-negative cooling interval n that means between two same tasks, there must be at least n intervals that CPU are doing different tasks or just be idle.

You need to return the least number of intervals the CPU will take to finish all the given tasks.

Example 1:
Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation: A -> B -> idle -> A -> B -> idle -> A -> B.
Note:
The number of tasks is in the range [1, 10000].
The integer n is in the range [0, 100].
 */

let leastInterval = (tasks, n) => {
  let working = {};
  let output = [];
  let i = 0;
  while(tasks.length) {
    // debugger;
    if(!working[tasks[i]]) {
      // output++;
      output.push(tasks[i]);
      working[tasks[i]] = n;
      for(let key in working) {
        if(key !== tasks[i]) {
          if(working[key] === 1) {
            delete working[key];
          } else {
            working[key]--;
          }
        }
      }
      tasks.splice(i,1);
      i = 0;
    } else {
      i++;
    }
    if(i >= tasks.length) {
      if(tasks.length) {
        // output++;
        output.push('idle');
        for(let key in working) {
          if(working[key] === 1) {
            delete working[key];
          } else {
            working[key] --;
          }
        }
        i = 0;
      }
    }
  }

  return output;

}

let test = ["A","A","A","A","A","A","B","C","D","E","F","G"]

 console.log(leastInterval(test, 2));