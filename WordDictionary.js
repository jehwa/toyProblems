class TrieNode {
  constructor() {
    this.children = {};
    this.end = false;
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word) {
    let current = this.root;
    for(let i = 0; i < word.length; i ++) {
      if(!current.children[word[i]]) {
        current.children[word[i]] = new TrieNode();
      }
      current = current.children[word[i]];
    }
    current.end = true;
  }

  search(word) {
    let searchWord = (current, level) => {
      if(word.length === level) {
        return current.end;
      }
      if(word[level] === '.') {
        for(let i = 0; i < 26; i ++) {
          let ch = String.fromCharCode(97 + i);
          if(current.children[ch] && searchWord(current.children[ch], level + 1)) {
          return true;

          }
        }
        return false;
      }
      if(current.children[word[level]] && level < word.length) {
        return searchWord(current.children[word[level]], level + 1);
      }
      return false;

    }

    return searchWord(this.root, 0);
  }

}

let test = new WordDictionary();
// test.addWord('at');
// test.addWord('and');
// test.addWord('an');
// test.addWord('add');

// console.log(test.search('a')); //f
// console.log(test.search('.at'));//f

test.addWord('bat');
console.log(test.search('.at'));//t


// [,"search","search","search","search","search"]
// [,,["an."],["a.d."],["b."],["a.d"],["."]]