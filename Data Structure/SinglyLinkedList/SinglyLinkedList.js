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

  unshift() {
    if(!this.head) return undefined;

    let current = this.head;
    this.head = current.next;
    this.size -= 1;
  }
}