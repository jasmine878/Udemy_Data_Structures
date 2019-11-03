//first Node
class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

//similar to a Single Linked List
class BinarySearchTree {
  constructor() {
    this.root = null
  }
  //ITERATIVE SOLUTION
  insert(val) {
    let newNode = new Node(val)
    let currentNode = this.root

    if (currentNode === null) {
      this.root = newNode
      return this
    }

    while (true) {
      //a binary search tree has children with values greater than or less than the parent node
      if (currentNode.val === val) return undefined
      //change the child node to parent node as we move down the tree
      if (currentNode.val > val) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this
        } else currentNode = currentNode.left;
      }
      if (currentNode.val < val) {
        if (currentNode.right === null) {
          currentNode.right = newNode
          return this
        } else currentNode = currentNode.right
      }
    }
  }

  //similar to insert method
  search(val) {
    let currentNode = this.root

    if (currentNode === null) return null

    while(true) {
      if (currentNode.val === val) return currentNode
      if (currentNode.val > val) {
        if (currentNode.left === null) return false
        else currentNode = currentNode.left
      }
      if (currentNode.val < val) {
        if (currentNode.right === null) return false
        else currentNode = currentNode.right
      }
    }

  }
}

//      10
//    5     15
//  2   7  11   16
// let tree = new BinarySearchTree()

// tree.root = new Node(10)
// tree.root.left = new Node(5)
// tree.root.right = new Node(15)
// tree.root.left.left = new Node(2)
// tree.root.left.right = new Node(7)
// console.log(tree)

let newTree = new BinarySearchTree
newTree.insert(10)
newTree.insert(5)
newTree.insert(15)
newTree.insert(2)
newTree.insert(7)
newTree.insert(11)
newTree.insert(16)

newTree.search(11)        //expect 1 node (11)
newTree.search(5)         //expect 1 node (5)
newTree.search(0)         //expect false
newTree.search(100)       //expect false
