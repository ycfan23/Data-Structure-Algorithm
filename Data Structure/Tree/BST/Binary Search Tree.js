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

  find(value) {
    if (this.root === null) return undefined

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (current.value > value) {
        current = current.left
      } else if (current.value < value) {
        current = current.right
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current
  }
}

let tree = new BST();
tree.insert(10)
tree.insert(5)
tree.insert(20)
tree.insert(15)
console.log(tree.find(11))
