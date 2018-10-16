

let checkMagazine = (magazine, note) => {
  let storage = {};

  for(let i = 0; i < magazine.length; i ++) {
    storage[magazine[i]] = storage[magazine[i]] + 1 || 1;
  }

  for(let w of note) {
    if(storage[w]) {
      storage[w] --;
    } else {
      return 'No'
    }
  }

  return 'Yes'

}

let test = ['give', 'me', 'one', 'grand', 'today', 'night'];
let testN = ['give', 'one', 'grand', 'today'];
// Yes;


console.log(checkMagazine(test, testN));