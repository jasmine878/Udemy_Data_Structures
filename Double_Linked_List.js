//first node
class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.previous = null
  }
}

//as we add more Nodes to a Double Linked List,
//we update the next property of the last Node
//AND update the previous property of the new node

// let firstNode = new Node(1)
// firstNode.next = new Node (2)
// firstNode.next.previous = firstNode
// firstNode.next.next = new Node(3)
// firstNode.next.next.previous = firstNode.next

// console.log("1st Node", firstNode)
// console.log("2nd Node", firstNode.next)
// console.log("3rd Node", firstNode.next.next)


class DoubleLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  //a method that adds a node to the end of a linked list
  push(val) {
    let newNode = new Node(val)

    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.previous = this.tail
      this.tail.next = newNode
      //EITHER WAY WORKS!!
      // newNode.previous = this.tail;
      this.tail = newNode
    }
    this.length++

    return this
  }

  //a method that removes a node from the end of a linked list
  pop() {
    if (this.head === null) return undefined

    let removedNode = this.tail

    if (this.head.next === null) {
      this.head = null
      this.tail = null
    } else {
      this.tail = removedNode.previous
      this.tail.next = null
      //need to sever both directions
      removedNode.previous = null
    }
    this.length--

    return removedNode
  }

  //a method that adds a node to the front of a linked list
  unshift(val) {
    let newNode = new Node(val)

    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.previous = newNode
      newNode.next = this.head
      this.head = newNode
    }
    this.length++

    return this
  }

  //a method that removes a node from the front of a linked list
  shift() {
    if (this.length === 0) return undefined

    let removedNode = this.head

    if (removedNode.next === null) {
      this.head = null
      this.tail = null
    } else {
      let secondNode = removedNode.next

      this.head = secondNode;
      //sever the 1st and 2nd nodes
      secondNode.previous = null
      removedNode.next = null;
    }
    this.length--

    return removedNode
  }

  //a method that gets a node at a specific location in a linked list
  get(index) {
    if (index < 0 || index >= this.length) return null

    let currentNode = this.head
    let counter = 0

    while (counter < index) {
      currentNode = currentNode.next
      counter++
    }

    return currentNode
  }

  set(index, val) {
    let foundNode = this.get(index)

    if (foundNode) {
      foundNode.val = val
      return true
    }

    return false
  }

}

let newList = new DoubleLinkedList()
newList.push(1)
newList.push(2)
newList.push(3)
// console.log(newList)          //expect 3 nodes(1, 2, 3)

newList.pop()
newList.pop()
// console.log(newList);    //expect 1 node(1)
newList.pop()
// console.log(newList);    //expect 0 node
newList.pop()
// console.log(newList);    //expect undefined

newList.unshift(4)
// console.log(newList)        //expect 1 node (4)
newList.unshift(5)
// console.log(newList)        //expect 2 nodes(5, 4)

newList.shift()
// console.log(newList);       //expect 1 node (4)
newList.shift()
// console.log(newList);       //expect 0 node
newList.shift()
// console.log(newList);       //expect undefined

let anotherList = new DoubleLinkedList()
anotherList.unshift(1)
anotherList.unshift(2)
anotherList.unshift(3)
// console.log(anotherList)          //expect 3 nodes (3, 2, 1)
anotherList.get(0);              //expect 1 node (val 3)
anotherList.get(1);              //expect 1 node (val 2)
anotherList.get(2);              //expect 1 node (val 1)
anotherList.get(3);              //expect null
