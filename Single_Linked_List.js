//first Node
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//as we add more Nodes to a Single Linked List,
//we update the next property of the last Node
// let firstNode = new Node(1)
// firstNode.next = new Node(2)
// firstNode.next.next = new Node(3)
// firstNode.next.next.next = new Node(4)
// firstNode.next.next.next.next = new Node(5)

// console.log("1st Node", firstNode);
// console.log("2nd Node", firstNode.next)
// console.log("3rd Node", firstNode.next.next)
// console.log("4th Node", firstNode.next.next.next)
// console.log("5th Node", firstNode.next.next.next.next)


//a Single Linked List has a head, tail, and length properties
class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    //add 1st Node to Single Linked List
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      //add additional nodes to Single Linked List
      //we set the tail.next to the new node
      //then update the tail to the new node
      //the old tail becomes a middle node
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  //to delete the last node in a Single Linked List we need to traverse it
  //we need to start at the beginning of the Single Linked List and move to the last node
  // traverse() {
  //   let currentNode = this.head;
  //   //loop until the next node equals null
  //   while (currentNode) {
  //     console.log(currentNode.val)
  //     currentNode = currentNode.next;
  //   }

  pop() {
    //if there are no nodes in the linked list, return undefined
    if (this.head === null) return undefined

    let currentNode = this.head;
    let previousNode = null;

    //if there is only 1 node in the linked list, link list should be empty
    if (currentNode.next === null) {
      this.head === null
      this.tail === null

      return currentNode
    }

    while (currentNode.next) {
      previousNode = currentNode
      currentNode = currentNode.next
    }

    this.tail = previousNode
    this.tail.next = null
    this.length--

    //return the removed Node
    return currentNode
  }
}


let newList = new SingleLinkedList()
newList.push(1)
newList.push(2)
newList.push(3)
newList.push(4)
newList.push(5)
// console.log(newList)

newList.pop()
newList.pop();
console.log(newList);
// newList.traverse()







//REFACTORED AND STREAMLINED
//first Node
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// //a Single Linked List has a head, tail, and length properties
// class SingleLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   push(val) {
//     const newNode = new Node(val);

//     //add 1st Node to Single Linked List
//     if (this.head === null) {
//       this.head = newNode;
//       //add additional nodes to Single Linked List
//       //we set the tail.next to the new node
//     } else {
//       this.tail.next = newNode;
//     }
//     //then update the tail to the new node
//     //the old tail becomes a middle node
//     //we always add nodes to the end/ tail of the Single Linked List
//     this.tail = newNode;
//     this.length++;

//     return this;
//   }

//   pop() {
//     //if there are no nodes in the linked list, return undefined
//     if (this.head === null) return undefined;

//     let currentNode = this.head;
//     let previousNode = null;

//     //if there is only 1 node in the linked list, link list should be empty
//     if (currentNode.next === null) {
//       this.head === null;
//       this.tail === null;
//     } else {
//       while (currentNode.next) {
//         previousNode = currentNode;
//         currentNode = currentNode.next;
//       }

//       this.tail = previousNode;
//       this.tail.next = null;
//     }
//     this.length--;
//     //return the removed Node
//     return currentNode;
//   }
// }

// let newList = new SingleLinkedList();
// newList.push(1);
// newList.push(2);
// newList.push(3);
// newList.push(4);
// newList.push(5);
// // console.log(newList)

// newList.pop();
// newList.pop();
// console.log(newList);
