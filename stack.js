class Stack {
  constructor() {
    this.data = [];
  }
  push(value) {
    this.data.push(value);
    return this;
  }
  pop() {
    const value = this.data.pop();
    return value;
  }
  peek() {
    return this.data[this.data.length - 1];
  }
  toString() {
    return "I am foo";
  }
  isEmpty() {
    return !!this.data.length;
  }
}
// Test stack
const stack = new Stack();
stack
  .push(4)
  .push(7)
  .push(90);
stack.pop();
console.log(stack.isEmpty());
console.log(stack);
