var Stack = function() {
  this.count = 0;
  this.storage = {};
};

Stack.prototype.push = function(item) {
  this.storage[this.count] = item;
  this.count++;
};

Stack.prototype.pop = function() {
  if (this.count > 0) {
    this.count--;
    return this.storage[this.count];
  }
};

Stack.prototype.size = function() {
  return this.count;
};

var stackInstance = new Stack();


