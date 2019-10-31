//creating a stack using an Array
let stack = []

//using unshift and shift methods - LIFO
stack.unshift(3)
stack.unshift(2)
stack.unshift(1)
// console.log(stack)       //expect [1, 2, 3]

stack.shift()
// console.log(stack)       //expect [2, 3]
stack.shift()
// console.log(stack);      //expect [3]
stack.shift()
// console.log(stack);      //expect []
stack.shift()
// console.log(stack);      //expect []

//using push and pop methods - LIFO
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
//first Node
// class Node {
//   constructor(val) {
//     this.val = val
//     this.next = null
//   }
// }

// //similar to a Single Linked List
// class Stack {
//   constructor() {
//     this.head = null
//     this.tail = null
//     this.length = 0
//   }

//   push(val) {
//     let newNode = new Node(val);

//     if (this.length === 0) {
//       this.tail = newNode
//     } else {
//       newNode.next = this.head
//     }
//     this.head = newNode
//     this.length++

//     return this
//   }

//   pop() {
//     if (this.length === 0) return null

//     let removedNode = this.head

//     if (this.length === 1) {
//       this.head === null
//       this.tail === null
//     } else {
//       this.head = removedNode.next;
//     }
//     this.length--

//     return removedNode
//   }
// }

// let newStack = new Stack()
// newStack.push(3)
// newStack.push(2)
// newStack.push(1)
// // console.log(newStack)         //expect 3 nodes (1, 2, 3)

// newStack.pop()
// // console.log(newStack)       //expect 2 nodes (2, 3)
// newStack.pop()
// // console.log(newStack)       //expect 1 node1 (3)
// newStack.pop()
// // console.log(newStack)       //expect 0 nodes
// newStack.pop()
// // console.log(newStack)       //expect 0 nodes
