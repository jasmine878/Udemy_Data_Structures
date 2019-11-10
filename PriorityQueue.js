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

}

let newPriorityQueue = new PriorityQueue()

newPriorityQueue.enqueue("cat", 2)
newPriorityQueue.enqueue("hamster", 3)
newPriorityQueue.enqueue("dog", 1);
newPriorityQueue.enqueue("bunny", 4);
newPriorityQueue.enqueue("parrot", 5);
console.log(newPriorityQueue.values)
//expect [1, 3, 2, 4, 5]

//            1
//         3     2
//      4     5
