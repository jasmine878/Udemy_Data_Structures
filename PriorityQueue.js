//we're only using the priority to compare each node
class Node {
  constructor(val, priority) {
    this.val = val
    this.priority = priority
  }
}

//implement using a Min Binary Heap
class PriorityQueue {
  constructor() {
    this.values = []
  }

  //similar to insert method in a Min Binary Heap
  enqueue(val, priority) {
    const newNode = new Node(val, priority)

    this.values.push(newNode)

    if (this.values.length === 1) return this.values

    let currentIdx = this.values.length - 1
    let parentIdx = Math.floor((currentIdx - 1) / 2)
    let childNode = this.values[currentIdx]
    let parentNode = this.values[parentIdx]

    while (currentIdx > 0 && parentNode.priority > childNode.priority) {
      this.values[parentIdx] = childNode
      this.values[currentIdx] = parentNode

      currentIdx = parentIdx
      parentIdx = Math.floor((currentIdx - 1) / 2)
      childNode = this.values[currentIdx]
      parentNode = this.values[parentIdx]
    }

    return this.values;
  }

  //similar to the remove Root method for a Min Binary Heap
  dequeue() {
    // debugger
    let newRoot = this.values.pop()
    let oldRoot = this.values[0]

    if (this.values.length === 0) return newRoot

    this.values[0] = newRoot

    let parentIdx = 0
    let leftChildIdx = parentIdx * 2 + 1
    let rightChildIdx = parentIdx * 2 + 2
    let leftChild = this.values[leftChildIdx]
    let rightChild = this.values[rightChildIdx]

    while (leftChild.priority < newRoot.priority || rightChild.priority < newRoot.priority) {
      if (leftChild.priority < rightChild.priority || rightChild === undefined) {
        this.values[leftChildIdx] = newRoot
        this.values[parentIdx] = leftChild
        parentIdx = leftChildIdx
      } else {
        this.values[rightChildIdx] = newRoot
        this.values[parentIdx] = rightChild
        parentIdx = rightChildIdx
      }
      leftChildIdx = parentIdx * 2 + 1
      rightChildIdx = parentIdx * 2 + 2
      leftChild = this.values[leftChildIdx]
      rightChild = this.values[rightChildIdx]

      if (leftChild === undefined && rightChild === undefined) break
    }

    return oldRoot
  }
}

let newPriorityQueue = new PriorityQueue()

newPriorityQueue.enqueue("cat", 2)
newPriorityQueue.enqueue("hamster", 3)
newPriorityQueue.enqueue("dog", 1);
newPriorityQueue.enqueue("bunny", 4);
newPriorityQueue.enqueue("parrot", 5);
// console.log(newPriorityQueue.values)
//expect [1, 3, 2, 4, 5]

//            1
//         3     2
//      4     5

newPriorityQueue.dequeue()
// console.log(newPriorityQueue.values)
//expect [2, 3, 5, 4]

//            2
//         3     5
//      4

newPriorityQueue.dequeue()
console.log(newPriorityQueue.values)
//expect [3, 4, 5]

//            3
//         4     5


