// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    let newNode = new Node(data);
    this.children.push(newNode);
  }

  remove(data) {
    this.children = this.children.filter(
      (childNode) => childNode.data !== data
    );
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    let arr = [this.root];
    while (arr.length) {
      let currentNode = arr.shift();
      arr.push(...currentNode.children);
      fn(currentNode);
    }
  }

  traverseDF(fn) {
    let arr = [this.root];
    while (arr.length) {
      let currentNode = arr.shift();
      if (currentNode.children.length) arr.unshift(...currentNode.children);
      fn(currentNode);
    }
  }
}

module.exports = { Tree, Node };
