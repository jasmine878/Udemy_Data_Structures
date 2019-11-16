// creating a stack using an Array
let stack = []

//using unshift and shift methods - LIFO
//Time Complexity:  O(n)
//Space Complexity:  O(n)

//using push and pop methods - LIFO
//Time Complexity:  O(1)
//Space Complexity:  O(n)
stack.push(3)
stack.push(2)
stack.push(1)
// console.log(stack)          //expect [3, 2, 1]

stack.pop()
// console.log(stack)          //expect [2, 1]
stack.pop()
// console.log(stack)          //expect [1]
stack.pop()
// console.log(stack)          //expect []
stack.pop()
// console.log(stack)          //expect []


//creating a stack using a Single Linked List
//Time Complexity:  push and pop - O(1)
//Time Complexity:  searching and accessing - O(n)
//Space Complexity:  O(n)

//first Node
class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

//similar to a Single Linked List
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //a method that adds a node to the top of a stack
  //and returns the size of the stack
  push(val) {
    let newNode = new Node(val);

    if (this.size === 0) {
      this.last = newNode;
    } else {
      newNode.next = this.first;
    }
    this.first = newNode;
    this.size++;

    return this.size;
  }

  //a method that removes a node from the top of a stack
  //and returns its value
  // pop() {
  //   if (this.length === 0) return null

  //   let removedNode = this.first

  //   if (this.length === 1) {
  //     this.first === null
  //     this.last === null
  //   } else {
  //     this.first = removedNode.next;
  //   }
  //   this.length--

  //   return removedNode.val
  // }

  pop() {
    if (this.size === 0) return null;

    let removedNode = this.first;

    if (this.size === 1) {
      this.last = null;
    }
    this.first = removedNode.next;
    removedNode.next = null
    this.size--;

    return removedNode;
  }
}

let newStack = new Stack()
console.log(newStack.push(3))     //expect 1
console.log(newStack.push(2))     //expect 2
console.log(newStack.push(1))     //expect 3
// console.log(newStack)             //expect 3 nodes (1, 2, 3)

console.log(newStack.pop())    //expect 1
console.log(newStack)       //expect 2 nodes (2, 3)
console.log(newStack.pop())    //expect 2
// console.log(newStack)       //expect 1 node (3)
console.log(newStack.pop())    //expect 3
// console.log(newStack)       //expect 0 nodes
console.log(newStack.pop())    //expect null
console.log(newStack)       //expect 0 nodes
