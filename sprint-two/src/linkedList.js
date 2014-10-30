var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  var keyTail = 0;
  var keyHead = 0;
  var count = 0;

  list.addToTail = function(value){
    value = makeNode(value);

    list.tail = value;
    list[keyTail] = value;
    if (count === 0) {
      list.head = value;
      list[keyHead] = value;
    }
    keyTail++;
    count++;
  };

  list.removeHead = function(){
    var removedHead = list[keyHead]['value'];
    delete list[keyHead];
    keyHead++;
    list.head = list[keyHead];
    count--;
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
