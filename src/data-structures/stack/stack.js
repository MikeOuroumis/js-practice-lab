class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);
    if (this.minStack.length === 0 || val <= this.getMin()) {
      this.minStack.push(val);
    }
  }

  pop() {
    const item = this.stack.pop();
    if (item === this.getMin()) {
      this.minStack.pop();
    }
    return item;
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

let ms = new MinStack();
ms.push(5);
console.log(ms.getMin()); // 5
ms.push(7);
console.log(ms.getMin()); // 5
ms.push(3);
console.log(ms.getMin()); // 3
ms.push(1);
console.log(ms.getMin()); // 1
