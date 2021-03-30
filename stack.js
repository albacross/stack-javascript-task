// Your implementation goes here
module.exports = class Stack {
  constructor(...stack) {
    this.stack = stack;
  }

  get size() {
    return this.stack.length;
  }

  _reArrangeStack(...stack) {
    this.stack = stack;
  }

  push(newElement) {
    this.stack.push(newElement);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.stack.pop();
  }

  isEmpty() {
    return this.size === 0;
  }

  peek() {
    return this.stack[this.size - 1];
  }

  swap() {
    const {
      [this.size - 1]: lastElement,
      [this.size - 2]: secondFromTheEndElement,
    } = this.stack;
    const rest = this.stack.splice(0, this.size - 2);

    this._reArrangeStack(...rest, lastElement, secondFromTheEndElement);
  }
};
