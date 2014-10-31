var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if (list.tail) {
      list.tail.next = newNode;
    } else {
      list.head = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function(){
    var removedHead = list.head.value;
    list.head = list.head.next;
    if (!list.head) {
      list.tail = null;
    }
    return removedHead;
  };

  list.contains = function(target){
    var node = list.head;
    if (node.value === target) {
      return true;
    }
    while (node !== list.tail) {
      if (node.next.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
