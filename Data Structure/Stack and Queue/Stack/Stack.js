class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    let newNode = new Node (value);
    if (this.size === 0) {
      this.top = newNode;
    } else {
      let temp = this.top;
      this.top = newNode;
      this.top.next = temp;
    }
    return this.size++;
  }

  pop() {
    if (!this.top) return undefined;
    let data = this.top.value;
    this.top = this.top.next;
    this.size -= 1;
    return data;
  }
}