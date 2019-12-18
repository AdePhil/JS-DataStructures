class Stack {
  constructor() {
    this._storage = {};
    this._length = 0;
  }
  push(value) {
    this._storage[this._length++] = value;
    return this;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    const lastValue = this._storage[this._length - 1];
    delete this._storage[--this._length];
    return lastValue;
  }

  peek() {
    return this._storage[this._length - 1];
  }

  isEmpty() {
    return this._length === 0;
  }
}

const stack = new Stack();
stack
  .push(5)
  .push(9)
  .push(4)
  .push(13);
stack.pop();
stack.pop();
stack.pop();
console.log(stack.peek());
console.log(stack);
