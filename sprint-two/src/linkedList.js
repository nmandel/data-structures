var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  var count = 0;
  var prevNode;


  list.addToTail = function(value){
    var currentNode = makeNode(value);
    count++;
    if ( count > 1) {
      prevNode.next = currentNode.value;
    } else {
      list.head = currentNode;
    }
    list.tail = currentNode;
    prevNode = currentNode;


    // list.tail = node;
    // list[keyTail] = node;
    // if (count === 0) {
    //   list.head = node;
    //   list[keyHead] = node;
    // }
    // keyTail++;
    // count++;
  };

  list.removeHead = function(){
    var removedHead = list[keyHead]['value'];
    delete list[keyHead];
    keyHead++;
    list.head = list[keyHead];
    count--;
    if (count === 0) {
      list.head = null;
      list.tail = null;
    }
    return removedHead;
  };

  list.contains = function(target){
    for (var i = keyHead; i < count; i++) {
      if (list[i].value === target) {
        return true;
      }
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
