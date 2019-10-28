//first Node
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// //as we add more Nodes to a Single Linked List,
// //we update the next property of the last Node
// // let firstNode = new Node(1)
// // firstNode.next = new Node(2)
// // firstNode.next.next = new Node(3)
// // firstNode.next.next.next = new Node(4)
// // firstNode.next.next.next.next = new Node(5)

// // console.log("1st Node", firstNode);
// // console.log("2nd Node", firstNode.next)
// // console.log("3rd Node", firstNode.next.next)
// // console.log("4th Node", firstNode.next.next.next)
// // console.log("5th Node", firstNode.next.next.next.next)


// //a Single Linked List has a head, tail, and length properties
// class SingleLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   //a method that adds a node to the end of a linked list
//   push(val) {
//     const newNode = new Node(val);

//     //add 1st Node to Single Linked List
//     if (this.head === null) {
//       this.head = newNode;
//       this.tail = newNode;
//       //add additional nodes to Single Linked List
//       //we set the tail.next to the new node
//       //then update the tail to the new node
//       //the old tail becomes a middle node
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }

//     this.length++;
//     return this;
//   }

//   //to delete the last node in a Single Linked List we need to traverse it
//   //we need to start at the beginning of the Single Linked List and move to the last node
//   // traverse() {
//   //   let currentNode = this.head;
//   //   //loop until the next node equals null
//   //   while (currentNode) {
//   //     console.log(currentNode.val)
//   //     currentNode = currentNode.next;
//   //   }

//   //a method that removes a node from the end of a linked list
//   pop() {
//     //if there are no nodes in the linked list, return undefined
//     if (this.head === null) return undefined;

//     let currentNode = this.head;
//     let previousNode = null;

//     //if there is only 1 node in the linked list, link list should be empty
//     if (currentNode.next === null) {
//       this.head = null;
//       this.tail = null;
//       this.length--;

//       return currentNode;
//     }
//     //traverse the linked list and store 2nd to last node
//     while (currentNode.next) {
//       previousNode = currentNode;
//       currentNode = currentNode.next;
//     }
//     //set the 2nd to last node as the new tail
//     this.tail = previousNode;
//     this.tail.next = null;
//     this.length--;

//     //return the removed Node
//     return currentNode;
//   }

//   //a method that adds a node to the front of a linked list
//   unshift(val) {
//     const newNode = new Node(val);

//     if (this.head === null) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       newNode.next = this.head;
//       this.head = newNode;
//     }
//     this.length++;

//     return this;
//   }

//   //a method that removes a node from the front of a linked list
  // shift() {
  //   if (this.head === null) return undefined;

  //   const removedNode = this.head;
  //   const secondNode = this.head.next;

  //   //if there is only 1 node in the linked list, link list should be empty
  //   if (secondNode === null) {
  //     this.head = null;
  //     this.tail = null;
  //   } else {
  //     //reassign the head to the second Node and remove the first node
  //     this.head = secondNode;
  //   }
  //   this.length--;

  //   return removedNode;
  // }

//   //a method that gets a node at a specific location in a linked list
//   get(index) {
//     if (index < 0 || index >= this.length) {
//       return null;
//     }
//     let currentNode = this.head;
//     // let currentIndex = currentNode.length
//     //cannot use currentNode.length, because the length property measures the length of the linked list, not the currentNode.
//     //The length of a currentNode returns undefined.
//     //Therefore, use a counter instead
//     let counter = 0;

//     while (counter < index) {
//       currentNode = currentNode.next;
//       counter++;
//     }

//     return currentNode;
//   }

//   //a method that updates a node at a specific location in a linked list and returns true
//   set(index, val) {
//     if (index < 0 || index >= this.length) {
//       return false;
//     }
//     let currentNode = this.head;
//     let counter = 0;

//     while (counter < index) {
//       currentNode = currentNode.next;
//       counter++;
//     }
//     currentNode.val = val;

//     return true;
//   }

//   //a method that inserts a node at a specific location in a linked list
//   insert(index, val) {
//     //if index is equal to the length then add the new Node to the end
//     //of the linked list
//     if (index < 0 || index > this.length) {
//       return false
//     }
//     let newNode = new Node(val)

//     if (index === 0) {
//       newNode.next = this.head
//       this.head = newNode
//     } else if (index === this.length) {
//       this.tail.next = newNode
//       this.tail = newNode;
//     } else {
//       let beforeNewNode = this.get(index - 1);
//       let afterNewNode = this.get(index);

//       beforeNewNode.next = newNode;
//       newNode.next = afterNewNode;
//     }
//     this.length++

//     return true
//   }

  //a method that removes a node at a specific location in a linked list
  // remove(index) {
  //   if (index < 0 || index >= this.length) return null

  //   let beforeNode = this.get(index - 1);
  //   let removedNode = this.get(index)
  //   let afterNode = this.get(index + 1)

  //   if (index === 0) this.head = this.head.next
  //   else if (index === this.length - 1) {
  //     beforeNode.next = null
  //     this.tail = beforeNode;
  //   } else {
  //     beforeNode.next = afterNode
  //   }
  //   this.length--

  //   return removedNode
  // }

  // //a method that reverses a linked list in place
  // reverse() {
  //   let currentNode = this.head
  //   let beforeNode = null
  //   let afterNode = currentNode.next

  //   //swap the head and the tail
  //   this.head = this.tail
  //   this.tail = currentNode

  //   while (afterNode) {
  //     beforeNode = currentNode
  //     currentNode.next = beforeNode
  //     currentNode = afterNode
  //     afterNode = currentNode.next
  //     //3 -> 22 -> 33 -> null
  //     //beforeNode =  null,     3,      22
  //     //currentNode =   3,      22      33
  //     //afterNode =     22,     33      undefined
  //     //null <- 3,                22 -> 33 -> null
  //     //null <- 3 <- 22,          33 -> null
  //   }
  //   //need to change the direction of the last node
  //   //null <- 3 <- 22 <- 33
  //   currentNode.next = beforeNode

  //   return this
  // }
// }



//REFACTORED AND STREAMLINED
//first Node
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//a Single Linked List has a head, tail, and length properties
class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //a method that adds a node to the end of a linked list
  push(val) {
    const newNode = new Node(val);

    //add 1st Node to Single Linked List
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      //add additional nodes to Single Linked List
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  //a method that removes a node from the end of a linked list
  pop() {
    //if there are no nodes in the linked list, return undefined
    if (this.head === null) return undefined;

    let currentNode = this.head;
    let previousNode = null;

    //if there is only 1 node in the linked list, link list should be empty
    if (currentNode.next === null) {
      this.head = null;
      this.tail = null;
      this.length--;
    } else {
      //traverse the linked list and store 2nd to last node
      while (currentNode.next) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      //set the 2nd to last node as the new tail
      this.tail = previousNode;
      this.tail.next = null;
      this.length--;
    }

    //return the removed Node
    return currentNode;
  }

  //a method that adds a node to the front of a linked list
  unshift(val) {
    const newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;

    return this;
  }

  //a method that removes a node from the front of a linked list
  shift() {
    if (this.head === null) return undefined;

    const removedNode = this.head;

    //if there is only 1 node in the linked list, link list should be empty
    if (this.head.next === null) {
      this.tail = null;
    }
    //set new head as the 2nd node
    this.head = this.head.next;
    this.length--;

    return removedNode;
  }

  //a method that gets a node at a specific location in a linked list
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let currentNode = this.head;
    let counter = 0;

    while (counter < index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  //a method that updates a node at a specific location in a linked list and returns true
  set(index, val) {
    let foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;

      return true;
    }

    return false;
  }

  //a method that inserts a node at a specific location in a linked list
  insert(index, val) {
    //if index is equal to the length then add the new Node to the end
    //of the linked list
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) {
    //unshift and push already increments 1 to length property
      this.unshift(val);
    } else if (index === this.length) {
      this.push(val);
    } else {
      let newNode = new Node(val);
      let beforeNewNode = this.get(index - 1);
      let afterNewNode = beforeNewNode.next;

      beforeNewNode.next = newNode;
      newNode.next = afterNewNode;
      this.length++;
    }

    return true;
  }

  //a method that removes a node at a specific location in a linked list
  remove(index) {
    if (index < 0 || index >= this.length) return null;

    if (index === 0) return this.shift()
    else if (index === this.length - 1) {
      return this.pop()
    } else {
      let beforeNode = this.get(index - 1);
      let removedNode = beforeNode.next;
      let afterNode = removedNode.next;

      beforeNode.next = afterNode;
      this.length--;

      return removedNode;
    }
  }

    //a method that reverses a linked list in place
    reverse() {
      let beforeNode = null;
      let currentNode = this.head
      //next of null will produce an error.
      //we need to calculate 1 less of currentNode.next to prevent this.
      let afterNode

      //swap the head and the tail
      this.head = this.tail
      this.tail = currentNode

      for (let i = 0; i < this.length; i++) {
        afterNode = currentNode.next;
        currentNode.next = beforeNode

        beforeNode = currentNode
        currentNode = afterNode
      }

      return this
    }
}


let newList = new SingleLinkedList()
newList.push(1)
newList.push(2)
newList.push(3)
// console.log(newList)     //expect 3 nodes(1, 2, 3)

newList.pop()
newList.pop();
// console.log(newList);    //expect 1 node(1)
newList.pop();
// console.log(newList);    //expect 0 node
newList.pop();
// console.log(newList);    //expect undefined

newList.unshift(4)
// console.log(newList)        //expect 1 nodes
newList.unshift(5)
// console.log(newList)        //expect 2 nodes(5, 4)

newList.shift()
// console.log(newList);       //expect 1 node (4)
newList.shift()
// console.log(newList);       //expect 0 node
newList.shift()
// console.log(newList);       //expect undefined

let anotherList = new SingleLinkedList()
anotherList.unshift(1)
anotherList.unshift(2);
anotherList.unshift(3);
// console.log(anotherList)          //expect 3 nodes (3, 2, 1)
anotherList.get(0);              //expect 1 node (val 3)
anotherList.get(1);              //expect 1 node (val 2)
anotherList.get(2);              //expect 1 node (val 1)
anotherList.get(3);              //expect null

anotherList.set(1, 22);
// console.log(anotherList)         //expect 3 nodes (3, 22, 1)

anotherList.insert(2, 33)
// console.log(anotherList)         //expect 4 nodes (3, 22, 33, 1)
anotherList.insert(0, 13)
// console.log(anotherList)         //expect 5 nodes (13, 3, 22, 33, 1)
anotherList.insert(5, 111)
// console.log(anotherList)         //expect 6 nodes (13, 3, 22, 33, 1, 111)

anotherList.remove(4)
// console.log(anotherList)           //expect 5 nodes (13, 3, 22, 33, 111)
anotherList.remove(0)
// console.log(anotherList)           //expect 4 nodes (3, 22, 33, 111)
anotherList.remove(3)
// console.log(anotherList)           //expect 3 nodes (3, 22, 33)

anotherList.reverse()
// console.log(anotherList)              //expect 3 nodes (33, 22, 3)
anotherList.unshift(50)
// console.log(anotherList)              //expect 4 nodes (50, 33, 22, 3)
anotherList.reverse()
console.log(anotherList)              //expect 4 nodes (3, 22, 33, 50)
