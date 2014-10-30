var makeQueue = function() {
  var queue = Object.create(queueMethods);
  queue.storage = {};
  queue.head = 0;
  queue.tail = 0;
  queue.counter = 0;
  return queue;

};

var queueMethods = {};

queueMethods.enqueue = function(item) {
  this.storage[this.tail] = item;
  this.tail++;
  this.counter++;
};

queueMethods.dequeue = function() {
  if (this.counter > 0) {
    var temp = this.storage[this.head];
    delete this.storage[this.head];
    this.counter--;
    this.head++;
    return temp;
  }
};

queueMethods.size = function() {
  return this.counter;
};


