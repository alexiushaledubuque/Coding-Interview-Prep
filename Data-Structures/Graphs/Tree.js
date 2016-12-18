var treeMaker = function(value){
  var newTree = Object.create(treeMaker.methods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};

treeMaker.methods = {};

treeMaker.methods.addChild = function(value){
  var child = treeMaker(value);
  this.children.push(child);
}

treeMaker.methods.contains = function(target){
     
  var found = false;
    var subroutine = function(node){
      if ( node.value === target ){
        found = true;
        return;
      }
      for ( var i = 0; i < node.children.length; i++ ){
        var child = node.children[i];
        subroutine(child);
      }
    }
    subroutine(this);
    return found;
}

var tree = treeMaker();
tree.addChild(5);
tree.children[0];

console.log(tree.children[0]);

// contains - recursively call function looking for node.
// adds - search nodes for node. If not found push.