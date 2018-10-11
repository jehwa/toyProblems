class NestedIterator {
  constructor(nestedList) {
      this.flat = [];
      this.helper(nestedList);
      this.index = 0;
  }
  helper(list) {
      for(let i = 0; i < list.length; i ++) {
          let curr = list[i];
          if(curr.isInteger()) {
              this.flat.push(curr.getInteger());
          } else {
              this.helper(curr.getList());
          }
      }
  }
  hasNext() {
      this.index ++;
      return typeof(this.flat[this.index - 1]) === 'number';
  }
  next() {
      return this.flat[this.index - 1]
  }
}
