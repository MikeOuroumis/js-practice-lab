class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  delete(data) {
    if (!this.head) {
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  show() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

function printReverse(list) {
  const stack = [];
  let current = list.head;

  while (current) {
    stack.push(current.data);
    current = current.next;
  }

  while (stack.length > 0) {
    console.log(stack.pop());
  }
}

function listLength(list) {
  let length = 0;
  let current = list.head;

  while (current) {
    length++;
    current = current.next;
  }
  return length;
}

function deduplicateList(list) {
  if (list.head === null || list.head.next === null) return list.head;

  const seen = new Set([list.head.data]);
  let current = list.head;
  while (current.next) {
    if (seen.has(current.next.data)) {
      current.next = current.next.next;
    } else {
      seen.add(current.next.data);
      current = current.next;
    }
  }
}

function averageOfEveryThird(list) {
  // traverse and add the sum every 3rd item
  // then add a count and divide the sum by it
  let count = 0;
  let index = 0;
  let sum = 0;
  let current = list.head;

  while (current) {
    if ((index + 1) % 3 === 0) {
      sum += current.data;
      count++;
    }
    current = current.next;
    index++;
  }
  return parseFloat(sum / count);
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(2);
list.append(3);
list.append(2);
list.append(6);
console.log("length", listLength(list));
printReverse(list);

console.log(averageOfEveryThird(list));
list.show();
