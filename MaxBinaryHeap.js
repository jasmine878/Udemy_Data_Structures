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
console.log(newMaxBinaryHeap.values);
//expect [55,39,41,18,27,12,33]
//         0  1  2  3  4  5  6


//         55
//     39      41
//   18  27  12   33
