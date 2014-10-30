var makeStack = function() {
  var stack = Object.create(stackMethods);
  stack.count = 0;
  stack.storage = {};
  return stack;
};

var stackMethods = {};

stackMethods.push = function(item) {
  this.storage[this.count] = item;
  this.count++;
};

stackMethods.pop = function() {
  if (this.count > 0) {
    this.count--;
    return this.storage[this.count];
  }
};

stackMethods.size = function() {
  return this.count;
};
