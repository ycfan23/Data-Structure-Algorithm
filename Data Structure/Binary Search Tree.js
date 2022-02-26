class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value)

    if (this.root === null) {
      this.root = newNode;
    } else {
      let current = this.root;
      while(true) {
        if (current.value > value) {
          if (current.left === null) {
            current.left = newNode;
            return this
          } else {
            current = current.left
          }
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this
          } else {
            current = current.right;
          }
        }
      }
    }
  }
}