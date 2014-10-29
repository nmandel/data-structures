var makeStack = function() {
  var stack = {};
  stack.count = 0;
  stack.storage = {};
  _.extend(stack, stackMethods);
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
    var temp = this.storage[this.count];
    delete this.storage[this.count];
    return temp;
  }
};
stackMethods.size = function() {
  return this.count;
};




