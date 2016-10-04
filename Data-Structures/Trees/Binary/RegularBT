var TNode = function(_content) {
	// debugger;
  this.parent = null;
  this.left = null;
  this.right = null;
  this.content = _content;
};

TNode.prototype.addNode = function(_content) {
	// debugger;
  var _node = new TNode(_content);
  // if no left - add to left
  if (this.left === null) {
    _node.parent = this;
    this.left = _node;
    //console.log('LEFT NODE: ', this);
    return this;
  }

  if (this.right === null) {
    _node.parent = this;
    this.right = _node;
    return this;
  }
  var leftN = this.left.numberOfChildren();
  var rightN = this.right.numberOfChildren();

  if (leftN < rightN) {
    this.left.addNode(_content);
  } else {
    this.right.addNode(_content);
  }
  //console.log('RIGHT NODE: ', this);
  return this;
};

TNode.prototype.numberOfChildren = function() {
	debugger;
  var n = 0;
  if (this.left !== null) {
    n = 1 + this.left.numberOfChildren();
  }
  if (this.right !== null) {
    n = n + 1 + this.right.numberOfChildren();
  }
  //console.log('N: ', n);
  return n;
};

TNode.prototype.print = function() {
	debugger;
  var s = this.printNode();
  if (this.left !== null) {
    s += this.left.print();
  }
  if (this.right !== null) {
    s += this.right.print();
  }
  //console.log('S: ', s);
  return s;
};

TNode.prototype.printNode = function() {
	debugger;
  var s = " Node: " + this.content;
  if (this.left !== null) {
    s += " Left-> " + this.left.content;
  }

  if (this.right !== null) {
    s = s + " Right-> " + this.right.content;
  }
  s += " ";
  //console.log('S: ', s);
  return s;
};


var BinaryTree = function() {
	debugger;
  this.top = null;

  this.addNode = function(_content) {
  	debugger;
    // If no top node - add to top
    if (this.top === null) {
      var _node = new TNode(_content);
      this.top = _node;
      return this;
    }
    // otherwise let node select
    this.top.addNode(_content);
    // console.log('NEW NODE: ', this);
    return this;
  };
};

BinaryTree.prototype.print = function() {
	debugger;
  if (this.top !== null) return this.top.print();
};

  var tree = new BinaryTree();

  tree.addNode('A');
  tree.addNode('B');
  tree.addNode('C');
  tree.addNode('D');
  tree.addNode('E');
  tree.addNode('F');
  tree.addNode('G');
  tree.addNode('H');
  tree.addNode('I');
  tree.addNode('J');
  tree.addNode('K');
  tree.addNode('L');
  tree.addNode('M');
  tree.addNode('N');
  tree.addNode('O');
  tree.addNode('P');
  tree.addNode('Q');
  tree.addNode('R');
  tree.addNode('S');
  tree.addNode('T');
  tree.addNode('U');
  tree.addNode('V');
  tree.addNode('W');
  tree.addNode('X');
  tree.addNode('Y');
  tree.addNode('Z');
  tree.print();
