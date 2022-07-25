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

}

let newList = new SinglyLinkedList();
newList.add(5)
newList.add(5)
newList.add(5)

console.log(newList)