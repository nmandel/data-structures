var BinarySearchTree = function(value){
  this.value = value;
  this.right = null;
  this.left = null;
};

BinarySearchTree.prototype.insert = function(value) {
  var newNode = new BinarySearchTree(value);
  var traverser = function(node){
    if (node.value > newNode.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        traverser(node.left);
      }
    } else if (node.value < newNode.value) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        traverser(node.right);
      }
    }
  };
  traverser(this);
};

BinarySearchTree.prototype.contains = function(target) {
  if (this.value === target) {
    return true;
  } else {
    if (this.left !== null && this.left.contains(target)) {
      return true;
    } else if (this.right !== null && this.right.contains(target)) {
      return true;
    }
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function (callback) {
  callback(this.value);
  if (this.left !== null ) {
    this.left.depthFirstLog(callback);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
