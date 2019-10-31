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
