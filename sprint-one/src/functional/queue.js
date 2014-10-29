var makeQueue = function(){
  var someInstance = {};
  var key = 0;
  var firstKey = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[key] = value;
    key++;
  };

  someInstance.dequeue = function(){
    var temp = storage[firstKey];
    delete storage[firstKey];
    firstKey++;
    return temp;

  };

  someInstance.size = function(){
    return Object.keys(storage).length;
  };

  return someInstance;
};
