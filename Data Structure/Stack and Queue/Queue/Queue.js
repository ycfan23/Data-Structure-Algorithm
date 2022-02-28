class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue (value) {
    let newNode = new Node(value);
    if(!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode
    }
    return this.size += 1;
  }

  dequeue() {
    if(!this.first) return undefined;

    let data = this.first.value;
    this.first = this.first.next;
    this.size -= 1;
    return data;
  }
}