class Queue {
  constructor() {
    this._storage = {};
    this._length = 0;
    this._head = 0;
  }
  enqueue(value) {
    this._storage[this._length + this._head] = value;
    this._length++;
  }
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const firstValue = this._storage[this._head];
    delete this._storage[this._head++];
    this._length--;
    return firstValue;
  }
  peek() {
    return this._storage[0];
  }
  isEmpty() {
    return this._length === 0;
  }
}

const queue = new Queue();
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(6);
queue.dequeue();
queue.dequeue();
queue.enqueue(9);
queue.enqueue(10);
queue.dequeue();
console.log(queue);
