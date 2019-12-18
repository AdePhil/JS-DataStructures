class Queue {
  constructor() {
    this.data = [];
  }
  enqueue(value) {
    this.data.unshift(value);
    return this;
  }
  dequeue() {
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
const queue = new Queue();
queue
  .enqueue(4)
  .enqueue(7)
  .enqueue(90);
queue.dequeue();
console.log(queue.isEmpty());
console.log(queue);
