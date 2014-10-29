var makeQueue = function(){
  var queue = {};
  queue.storage = {};
  queue.tail = 0;
  queue.head = 0;
  queue.counter = 0;
  _.extend(queue, queueMethods);
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
    this.head++;
    this.counter--;
    return temp;
  }
};

queueMethods.size = function() {
  return this.counter;
};



