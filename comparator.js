/**
 * Check out the resources on the page's right side to learn more about sorting. The video tutorial is by Gayle Laakmann McDowell, author of the best-selling interview book Cracking the Coding Interview.

Comparators are used to compare two objects. In this challenge, you'll create a comparator and use it to sort an array. The Player class is provided in the editor below. It has two fields:

: a string.
: an integer.
Given an array of  Player objects, write a comparator that sorts them in order of decreasing score. If  or more players have the same score, sort those players alphabetically ascending by name. To do this, you must create a Checker class that implements the Comparator interface, then write an int compare(Player a, Player b) method implementing the Comparator.compare(T o1, T o2) method. In short, when sorting in ascending order, a comparator function returns  if ,  if , and  if .

For example, given  Player objects with  values of , we want to sort the list as .
 */


let comparator = (arr) => {
  arr.sort((a,b) => {
    if(a[1] === b[1]) {
      if(a[0] > b[0]) {
        return 1;
      } else {
        return -1;
      }
    } else {
      return b[1] - a[1]
    }
  })
  return arr;
} 

let test = [['Smith', 20], ['Jones', 15], ['Jones', 20]];

console.log(comparator(test));

let test1 = ['A', 'C', 'B'];

console.log(test1.sort((a,b) => {
  if(a > b) {
    return 1;
  } else {
    return -1;
  }
}))