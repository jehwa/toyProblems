const LinkedList = require('./linkedList.js');

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.
let l1 = new LinkedList();
l1.addToTail(2);
l1.addToTail(4);
l1.addToTail(3);

let l2 = new LinkedList();
l2.addToTail(5);
l2.addToTail(6);
l2.addToTail(4);

let addTwoNumbers = (l1, l2) => {
  let output = new LinkedList();
  let currentL1 = l1.head;
  let currentL2 = l2.head;
  let totalVal = 0;
  let extra = 0;
  let currentVal = 0;
  while(currentL1 || currentL2 || extra) {
    currentL1 ? val1 = currentL1.val : val1 = 0;
    currentL2 ? val2 = currentL2.val : val2 = 0;
    totalVal = val1 + val2 + extra;
    currentVal = totalVal % 10;
    output.addToTail(currentVal);
    extra = Math.floor(totalVal / 10);
    currentL1 ? currentL1 = currentL1.next : currentL1 = null;
    currentL2 ? currentL2 = currentL2.next : currentL2 = null;
  }
  return output;
}

addTwoNumbers(l1, l2);