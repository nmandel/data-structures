var Graph = function(){
  this.graph = {};
  this.nodeCount = 0;
};

Graph.prototype.addNode = function(newNode, toNode){
  this.graph[newNode] = {val: newNode, edges: []};
  this.nodeCount++;
  if (this.nodeCount === 2) {
    for (var key in this.graph) {
      if (key !== newNode) {
        this.addEdge(key, newNode);
      }
    }
  }
  if (toNode) {
    this.addEdge(newNode, toNode);
  }
};

Graph.prototype.contains = function(node){
  return this.graph[node] ? true : false;
};

Graph.prototype.removeNode = function(node){
  delete this.graph[node];
  this.nodeCount--;
};

Graph.prototype.getEdge = function(fromNode, toNode){
  if (this.graph[fromNode].edges.indexOf(toNode) !== -1) {
    return true;
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.graph[fromNode].edges.push(toNode);
  this.graph[toNode].edges.push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var fromNodeEdges = this.graph[fromNode].edges;
  var toNodeEdges = this.graph[toNode].edges;
  fromNodeEdges.splice(fromNodeEdges.indexOf(toNode), 1);
  toNodeEdges.splice(toNodeEdges.indexOf(fromNode), 1);

  if (fromNodeEdges.length === 0) {
    this.removeNode(fromNode);
  }
  if (toNodeEdges.length === 0) {
    this.removeNode(toNode);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
