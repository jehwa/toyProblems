//addToTail, removeHead, contains

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(val) {
    let newNode = new Node(val);
    if(!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = this.tail = newNode;
    }
  }
 
  removeHead() {
    let previousHead = this.head.val;
    this.head = this.head.next;
    return previousHead
  }

  contains(target) {
    let currentNode = this.head;
    while(currentNode) {
      if(currentNode.val === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


module.exports = LinkedList;