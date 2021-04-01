// Your implementation goes here


class Stack extends Array {
  constructor(...elements) {
    super(...elements);
  }

  size = this.length

  push(element) {
    super.push(element);
  }

  pop() {
     if (this.length === 0) {
      return null;
    }

    super.pop();
  }

  peek() {
    if (this.length === 0) throw new Error("Stack is Empty");
    return this[this.length - 1];
  }

  isEmpty() {
    return this.length === 0;
  }
// size of the Stack
  size(){
    return this.length
  }

// swap  the top 2 elements
  swap() {
    [this[this.length - 1], this[this.length -2]] = [this[this.length - 2],this[this.length - 1],
    ];
  }

  

}
  

module.exports = Stack;