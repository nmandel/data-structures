var Queue = function() {
  this.storage = {};
  this.head = 0;
  this.tail = 0;
  this.count = 0;
};

Queue.prototype.enqueue = function(item) {
  this.storage[this.tail] = item;
  this.tail++;
  this.count++;
};

Queue.prototype.dequeue = function() {
  if (this.count > 0) {
    var temp = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    this.count--;
    return temp;
  }
};

Queue.prototype.size = function() {
  return this.count;
};

var queueInstance = new Queue();



