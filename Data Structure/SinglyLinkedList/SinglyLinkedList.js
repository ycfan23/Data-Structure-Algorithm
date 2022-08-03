class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
} //define a node

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  } //define the list

  add(value) {
    //create a new node
    let newNode = new Node(value);
    //check to see if there's a node
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head

      while(currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = newNode;
    }
    this.length++;
      //set head to new node
    //else
      //find the last node and set it to new node
  }

  remove(value) {
    let currentNode = this.head;
    let prevNode;
    if(!this.head) return undefined;
    if(currentNode.value === value) {
      this.head = currentNode.next;
    } else {

      while (currentNode.value !== value) {
      prevNode = currentNode;
      currentNode = currentNode.next
      }

      prevNode.next = currentNode.next

    }
    this.length--;
  }

  indexOf(value) {
    let currentNode = this.head;
    let index = -1;

    while (currentNode) {
      index++;
      if(currentNode.value === value) {
        return index;
      } else {
        currentNode = currentNode.next
      }
    }
    return -1;
  }

  elementAt(index) {
    let currentNode = this.head;
    let count = 0;

    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode.value
  }

  addAt(index, value) {
    let newNode = new Node (value);
    let currentNode = this.head;
    let prevNode;
    let currentIndex = 0;

    if (index > length) return false;

    if (index = 0) {
      newNode.next = currentNode;
      this.head = newNode;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        prevNode = currentNode.next;
        currentNode = currentNode.next
      }
      newNode.next = currentNode;
      prevNode.next = newNode;
    }
    this.length++;
  }

  removeAt(index) {
    let currentNode = this.head;
    let prevNode;
    let currentIndex = 0;

    if (index < 0 || index > length) return false;

    if (index = 0) {
      this.head = currentNode.next;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        prevNode = currentNode.next;
        currentNode = currentNode.next;
      }
      prevNode.next = currentNode.next
    }
    this.length--;
    return currentNode.value;
  }

  reverse() {
    let current = this.head;
    let prev = null;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = prev;

      prev = current;
      current = next;
    }

    return prev
  }

}

let newList = new SinglyLinkedList();
newList.add(1)
newList.add(2)
newList.add(3)
//newList.remove(5)
console.log(newList)
console.log(newList.elementAt(0))
