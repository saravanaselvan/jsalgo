// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, node = null) {
    this.data = data;
    this.next = node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
    if (!this.tail) {
      this.tail = this.head;
    }
  }

  size() {
    let node = this.head;
    let count = 0;

    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    return this.tail;
  }

  clear() {
    this.head = null;
    this.tail = null;
  }

  removeFirst() {
    let secondNode = this.head.next;
    this.head = secondNode;
  }

  removeLast() {
    let node = this.head;

    if (this.size() == 0) return;
    if (!node.next) this.clear();

    while (node.next) {
      if (!node.next.next) {
        this.tail = node;
        node.next = null;
      } else {
        node = node.next;
      }
    }
  }

  insertLast(data) {
    let newTail = new Node(data);

    if (!this.head) {
      this.head = newTail;
      this.tail = newTail;
    }
    if (this.tail) this.tail.next = newTail;
    this.tail = newTail;
  }

  getAt(index) {
    if (index == 0) this.head;

    let currentIndex = 0;

    let currentNode = this.head;

    while (currentNode && currentIndex <= index) {
      if (currentIndex == index) {
        return currentNode;
      } else {
        currentIndex++;
        currentNode = currentNode.next;
      }
    }

    return null;
  }
}

module.exports = { Node, LinkedList };
