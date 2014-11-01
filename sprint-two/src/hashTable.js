var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage.get(i)) {
    this._storage.set(i, []);
  }
  var inserted = [k,v];
  this._storage.get(i).push(inserted);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var nested = this._storage.get(i);
  for (var i = 0; i < nested.length; i++) {
    if (nested[i][0] === k) {
      return nested[i][1];
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var nested = this._storage.get(i);
  for (var i = 0; i < nested.length; i++) {
    if (nested[i][0] === k) {
      nested[i][1] = null;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
