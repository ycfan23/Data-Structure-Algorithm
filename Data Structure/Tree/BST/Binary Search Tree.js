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

  //implement Breadth First Search (BFS)
  BFS() {
    let data = [];
    let queue = [];
    let node = this.root;
    queue.push(node)

    while(queue.length) {
      node = queue.shift();
      data.push(node);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreOrder() {
    let data = [];
    let current = this.root;

    function traverse (node) {
      data.push(node);

      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);

    }

    traverse(current)
    return data
  }

  DFSPostOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)

      data.push(node)
    }

    traverse(current)
    return data;
  }
}

let tree = new BST();
tree.insert(10)
tree.insert(5)
tree.insert(20)
tree.insert(15)
//console.log(tree.find(11))

//console.log(tree.BFS());

console.log(tree.DFSPreOrder())
