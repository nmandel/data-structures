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

  list.contains = function(target) {
    var node = this.head;
    // var helper = function(node) {
      if (node.value === target){
        return true;
      }
    //   if (node.next !== null) {
    //     if (helper(this.next)) {
    //       return true;
    //     }
    //   }
    //   return false;
      while (node !== list.tail) {
        if (node.next.value === target) {
          return true;
        }
        node = node.next;
      }
      return false;
    // };
    // helper(list.head);
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
