class MovingAverage {
  constructor(size) {
    this.size = size;
    this.window = new Queue();
    this.sum = 0.0;
  }

  next(val) {
    if (this.window.getSize() === this.size) {
      this.sum -= this.window.dequeue();
    }

    this.window.enqueue(val);
    this.sum += val;
    return this.sum / this.window.getSize();
  }
}

class Queue {
  constructor() {
    this.data = [];
  }

  enqueue(val) {
    this.data.push(val);
  }

  dequeue() {
    if (this.data.length < 0) {
      return "Underflow";
    }
    return this.data.shift();
  }

  isEmpty() {
    return this.data.length === 0;
  }

  getSize() {
    return this.data.length;
  }
}

const average = new MovingAverage(10);
average.next(10);
average.next(20);
average.next(23);
average.next(11);
average.next(12);
average.next(14);
average.next(22);
average.next(19);
average.next(31);
average.next(33);
console.log("average", average.next(35));
