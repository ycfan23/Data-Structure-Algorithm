class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  pop() {
    if(!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while(current.next) {
      newTail = current;
      current = current.next
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;
  }

  unshift(value) {
    let newNode = new Node(value);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.next = newNode;
      newNode.next = this.head;
    }
    this.size += 1;
  }

  shift() {
    if(!this.head) return undefined;

    let current = this.head;
    this.head = current.next;
    this.size -= 1;
  }

  get(index) {
    if(index < 0 || index >= this.length) return null;

    let counter = 0;
    let current = this.head;

    while(counter !== index) {
      current = current.next;
      counter++
    }
    return current
  }

  set(index, value) {
    let foundNode = this.get(index)
    if(foundNode) {
      foundNode.value = value;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) this.unshift(value);
    if (index === this.length - 1) this.push(value)

    let newNode = new Node(value);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp

    this.length =+ 1;
  }

  remove(index) {
    if(index < 0 || index >= this.length) return null;
    if(index === 0) this.shift();
    if(index === this.length - 1) this.pop();

    let prev = this.get(index - 1);
    let removed = prev.next;
    prev.next = removed.next
    this.length -= 1;

    return removed;
  }

  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    let prev = null;
    let next = null;

    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = prev

      prev = current
      current = next
    }

    return this;
  }
}