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
    this.root = null;
  }
  //ITERATIVE SOLUTION
  insert(val) {
    let newNode = new Node(val);
    let currentNode = this.root;

    if (currentNode === null) {
      this.root = newNode;
      return this;
    }

    while (true) {
      //a binary search tree has children with values greater than or less than the parent node
      if (currentNode.val === val) return undefined;
      //change the child node to parent node as we move down the tree
      if (currentNode.val > val) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        } else currentNode = currentNode.left;
      }
      if (currentNode.val < val) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        } else currentNode = currentNode.right;
      }
    }
  }

  //similar to insert method
  search(val) {
    let currentNode = this.root

    while(currentNode) {
      if (val === currentNode.val) return true
      else if (val < currentNode.val) currentNode = currentNode.left
      else if (val > currentNode.val) currentNode = currentNode.right
    }

    return false
  }

  //ITERATIVE SOLUTION
  breadthFirstSearch() {
    let tempQueue = [];
    let result = [];
    let currentNode;

    if (this.root) tempQueue.push(this.root);

    while (tempQueue.length > 0) {
      currentNode = tempQueue.shift();

      if (currentNode) {
        //it doesn't have to be a binary tree.  It can be a ternary tree or more!
        if (currentNode.left) tempQueue.push(currentNode.left);
        if (currentNode.right) tempQueue.push(currentNode.right);

        result.push(currentNode);
      }
    }
    return result;
  }

  //Depth First Search
  //RECURSIVE SOLUTION
  dfsPreOrder() {
    // debugger
    let result = [];

    function traverse(node) {
      //DUE TO CLOSURE WE STILL HAVE ACCESS TO THE OUTER VARIABLE
      result.push(node)

      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }

    //invoke the helper function and traverse the entire tree from the root
    traverse(this.root)

    return result
  }

  dfsPostOrder() {
    debugger
    let result = []

    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)

      result.push(node)
    }

    //invoke the helper function and traverse the entire tree from the root
    traverse(this.root)

    return result
  }

  dfsInOrder() {
    // debugger
    let result = []

    function traverse(node) {
      if (node.left) traverse(node.left)
      result.push(node)
      if (node.right) traverse(node.right)
    }

    traverse(this.root)

    return result
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

//Time Complexity:  Insert - O(log n) on average
//Time Complexity:  Search - O(log n) on average
//ONLY IF THE TREE IS WELL BALANCED
//IF THE TREE IS UNBALANCED SIMILAR TO LINEAR OR 1 BRANCH ONLY,
//THEN TIME COMPLEXITY WOULD BE O(N)

let newTree = new BinarySearchTree
newTree.insert(10)
newTree.insert(5)
newTree.insert(15)
newTree.insert(2)
newTree.insert(7)
newTree.insert(11)
newTree.insert(16)

console.log(newTree.search(11))        //expect true
console.log(newTree.search(5))         //expect true
console.log(newTree.search(0))         //expect false
console.log(newTree.search(100))       //expect false

// console.log(newTree.breadthFirstSearch())
//expect [10, 5, 15, 2, 7, 11, 16]

// console.log(newTree.dfsPreOrder())
//expect [10, 5, 2, 7, 15, 11, 16]

// console.log(newTree.dfsPostOrder())
//expect [2, 7, 5, 11, 16, 15, 10]

console.log(newTree.dfsInOrder())
//expect [2, 5, 7, 10, 11, 15, 16]
