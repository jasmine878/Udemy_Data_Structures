class MaxBinaryHeap {
  constructor() {
    this.values = []
  }

  //Parent node is always greater than child node
  insert(val) {
    // debugger
    this.values.push(val)

    if (this.values.length === 1) return this.values

    let currentIdx = this.values.length - 1
    let parentIdx = Math.floor((currentIdx - 1) / 2)
    let childVal = this.values[currentIdx]
    let parentVal = this.values[parentIdx]

    //IF IDX IS AT 0 ALREADY AT ROOT NODE OR MAXIMUM NODE
    while (currentIdx > 0 && parentVal < childVal) {
      this.values[parentIdx] = childVal
      this.values[currentIdx] = parentVal

      currentIdx = parentIdx
      parentIdx = Math.floor((currentIdx - 1) / 2)
      childVal = this.values[currentIdx]
      parentVal = this.values[parentIdx]
    }

    return this.values
  }

  //Removes the maximum node in a Max Binary Heap
  removeRoot() {
    // debugger
    let newRoot = this.values.pop()
    let oldRoot = this.values[0]

    //if we already removed the last node, then return the last node
    if (this.values.length === 0) return newRoot

    //swap the newRoot with the oldRoot
    //we're removing the oldRoot from the Heap
    this.values[0] = newRoot

    let parentIdx = 0
    let leftChildIdx = parentIdx * 2 + 1
    let rightChildIdx = parentIdx * 2 + 2
    let leftChild = this.values[leftChildIdx]
    let rightChild = this.values[rightChildIdx]

    //bubble the newRoot down to its correct position in the Max Binary Heap
    while (leftChild > newRoot || rightChild > newRoot) {
      //can't compare a node with undefined
      if (leftChild > rightChild || rightChild !== undefined) {
        this.values[leftChildIdx] = newRoot
        this.values[parentIdx] = leftChild
        parentIdx = leftChildIdx
      } else {
        this.values[rightChildIdx] = newRoot
        this.values[parentIdx] = rightChild
        parentIdx = rightChildIdx
      }
      leftChildIdx = parentIdx * 2 + 1;
      rightChildIdx = parentIdx * 2 + 2;
      leftChild = this.values[leftChildIdx];
      rightChild = this.values[rightChildIdx];
    }

    return oldRoot
  }
}

let newMaxBinaryHeap = new MaxBinaryHeap()

newMaxBinaryHeap.insert(41)
newMaxBinaryHeap.insert(39)
newMaxBinaryHeap.insert(33)
newMaxBinaryHeap.insert(18)
newMaxBinaryHeap.insert(27);
newMaxBinaryHeap.insert(12);
// console.log(newMaxBinaryHeap.values)
//expect [41,39,33,18,27,12]
//         0  1  2  3  4  5


//         41
//     39      33
//   18  27  12           55

newMaxBinaryHeap.insert(55);
// console.log(newMaxBinaryHeap.values);
//expect [55,39,41,18,27,12,33]
//         0  1  2  3  4  5  6


//         55
//     39      41
//   18  27  12   33

newMaxBinaryHeap.removeRoot()
// console.log(newMaxBinaryHeap.values)
//expect [41,39,33,18,27,12]
//         0  1  2  3  4  5


//         41
//     39      33
//   18  27  12

newMaxBinaryHeap.removeRoot()
// console.log(newMaxBinaryHeap.values)
//expect [39,27,33,18,12]
//         0  1  2  3  4


//         39
//     27      33
//   18  12

newMaxBinaryHeap.removeRoot();
newMaxBinaryHeap.removeRoot();
newMaxBinaryHeap.removeRoot();
newMaxBinaryHeap.removeRoot();
newMaxBinaryHeap.removeRoot();
console.log(newMaxBinaryHeap.removeRoot());   //expect undefined
console.log(newMaxBinaryHeap.values);     //expect []
