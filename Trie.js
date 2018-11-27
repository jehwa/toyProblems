/*
Implement a trie with insert, search, and startsWith methods.

Example:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");     // returns true
Note:

You may assume that all inputs are consist of lowercase letters a-z.
All inputs are guaranteed to be non-empty strings.
*/

class trieNode {
  constructor(word) {
    this.word = word;
    this.children = {};
    this.isEnd = false;
  }
}

class Trie {
  constructor(){  
    this.root = new trieNode();
  }
  insert(word) {
    let currentNode = this.root;
    for(let letter of word) {
      if(!currentNode.children[letter]) {
        currentNode.children[letter] = new trieNode(letter);
      }
      currentNode = currentNode.children[letter];
    }
    currentNode.isEnd = true;
  }
  search(word) {
    let currentNode = this.root;
    for(let letter of word) {
      if(!currentNode.children[letter]) {
        return false;
      }
      currentNode = currentNode.children[letter];
    }
    return currentNode.isEnd;
  }
  startsWith(prefix) {
    let currentNode = this.root;
    for(let letter of prefix) {
      if(!currentNode.children[letter]) {
        return false;
      }
      currentNode = currentNode.children[letter];
    }
    return true;
  }
}

let test = new Trie();
test.insert('hi');
console.log(test.startsWith('hi'));
