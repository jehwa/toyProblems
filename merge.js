/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  if(!intervals.length) {
      return intervals;
  }
  intervals.sort((a,b) => {
      return a.start - b.start;
  })
  
  let i = 1;
  while(i < intervals.length) {
      let pre = intervals[i-1];
      let curr = intervals[i];
      if(pre.end >= curr.start) {
          if(pre.end < curr.end) {
              pre.end = curr.end;
          }
          intervals.splice(i,1);
      } else {
          i++
      }
  }

  return intervals;

};