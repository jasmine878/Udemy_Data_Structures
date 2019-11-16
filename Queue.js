//creating a queue using an Array
let queue = []

//using push and shift methods - FIFO
//using unshift and pop methods - FIFO

//TIME COMPLEXITY:  O(1) or O(n)   //depends on method
//SPACE COMPLEXITY:  O(n)

queue.push(1)
queue.push(2)
queue.push(3)
// console.log(queue)        //expect [1, 2, 3]

queue.shift()
// console.log(queue)        //expect [2, 3]
queue.shift()
// console.log(queue)        //expect [3]
queue.shift()
// console.log(queue)        //[]
queue.shift()
// console.log(queue)        //[]

//creating a queue using a Single Linked List
//Time Complexity:  insertion, deletion - O(1)
//DEPENDS ON THE DIRECTION OF THE NEXT ARROW
//TIME COMPLEXITY FOR REMOVAL CAN GO TO O(N)
//Time Complexity:  searching, accessing O(n)

//Space Complexity:  O(n)
//first Node
class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

//similar to a Single Linked List
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //a method that adds a node to the back of a queue
  // push(val) {
  //   let newNode = new Node(val);

  //   if (this.length === 0) {
  //     this.first = newNode;
  //     this.last = newNode;
  //   } else {
  //     newNode.next = this.last;
  //     this.last = newNode;
  //   }

  //   this.size++;

  //   return this.size;
  // }

  // //a method that removes a node from the front of a queue
  // shift() {
  //   //WE HAVE TO TRAVERSE TO GET THE SECOND NODE
  //   //NOT RECOMMENDED UNLESS DOUBLE LINKED LIST
  // }

  //a method that adds a node to the front of a queue
  //and returns the size of the queue
  enqueue(val) {
    let newNode = new Node(val);

    if (this.size === 0) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }
    this.last = newNode;
    this.size++;

    return this.size;
  }

  //a method that removes a node from the back of a queue
  //and returns value of the node removed
  dequeue() {
    if (this.size === 0) return undefined;

    let removedNode = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = removedNode.next;
      removedNode.next = null
    }

    this.size--;

    return removedNode;
  }
}

//TIME COMPLEXITY:  INSERTION & REMOVAL - O(1)
//SPACE COMPLEXITY: O(1)

let newQueue = new Queue()
console.log(newQueue.enqueue(1))           //expect 1
console.log(newQueue.enqueue(2))           //expect 2
console.log(newQueue.enqueue(3))           //expect 3
// console.log(newQueue)
//expect [1, 2, 3]            first         last
//                            [1] -> [2] -> [3]

console.log(newQueue.dequeue())            //expect 1
console.log(newQueue)
//expect [2, 3]
console.log(newQueue.dequeue())            //expect 2
console.log(newQueue.dequeue())            //expect 3
console.log(newQueue)                  //expect 0 nodes
console.log(newQueue.dequeue())            //expect null
console.log(newQueue)                  //expect 0 nodes
