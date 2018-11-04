/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

let reverseList = (head) => {
  let current = head;
  let prev = null;
  while(current) {
    let temp = current;
    current = temp.next;
    temp.next = prev;
    prev = temp;
  }
  return prev;
}