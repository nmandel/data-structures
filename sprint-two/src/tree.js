var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  if (this.value === target) {
    return true;
  }
  // if (Array.isArray(this.children)) {
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  // }
  return false;

    /*var wasFound = false;
    var helper = function(parent) {
      if (parent.value === target) {
        wasFound = true;
      }
      if (Array.isArray(parent.children) && !wasFound) {
        for (var i = 0; i < parent.children.length; i++) {
          helper(parent.children[i]);
        }
      }
    }
    helper(this);
    return wasFound; */
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
