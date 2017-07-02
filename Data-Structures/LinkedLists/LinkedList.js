var LinkedList = function() {
  this.head = null;
}

LinkedList.prototype.newNode = function(value) {
  var node = {
    data: value,
    next: null
  }

  return node;
};

LinkedList.prototype.append = function(value){
    var addNode = this.newNode(value);

    if (!this.head){
      this.head = addNode;
      return;
    }

    var traverse = this.head;

    while(traverse.next !== null){
      traverse = traverse.next;
    }
    traverse.next = addNode;
};

LinkedList.prototype.prepend = function(value) {
  //debugger;
  var addNode = this.newNode(value);
  addNode.next = this.head;
  this.head = addNode;
};

LinkedList.prototype.size = function() {
  var traverse = this.head;
  var size = 0;

  while (traverse !== null){
    size++;
    traverse = traverse.next;
  }
  return size;
}

LinkedList.prototype.contains = function(value){
  var traverse = this.head;

  while (traverse !== null){
    if (traverse.data === value){
      return true;
    }
    traverse = traverse.next;
  }
  return false;
}

LinkedList.prototype.palindrome = function(){
  // Iterative
  debugger;
  var current = this.head;
  var array = [];

  while (current !== null){
    array.push(current.data);
    current = current.next;
  }
  var reverse = array.reverse();
  return array === reverse;
}

LinkedList.prototype.reverse = function(sll) {
	debugger;
    if (this.head === null || this.head.next === null) {
        return;
    }
    let traverse = this.head;
    let arr = [];
    
    while(traverse.next !== null) {
      arr.push(traverse.data)
      traverse = traverse.next
    }
    arr.push(traverse.data)
    
    let newList = new LinkedList();
    newList.head = this.newNode(arr.pop());
    
    var current = newList.head;
  
    for (let i = arr.length - 1; i > 0; i--) {
      newList.append(arr[i])
    }
    newList.append(arr[0])
    return JSON.stringify(newList);
}

LinkedList.prototype.remove = function(value){
  //debugger;
  if (!this.contains(value)){
    console.log("Item: ", value + " not in the list");
    return;
  }

  if (this.head.data === value){
    this.head = this.head.next;
    return;
  }

  var previous = null;
  var current = this.head;

  while(current.data !== value){
    previous = current;
    current = current.next;
  }

  previous.next = current.next;
};

LinkedList.prototype.removeDupsBuff = function(){
  var object = {};
  var previous = null;
  var current = this.head;

  while(current !== null){
    if (!object.hasOwnProperty(current.data)){
      object[current.data] = true;
      previous = current;
    } else {
      previous.next = current.next;
    }
    current = current.next;
  }
};

LinkedList.prototype.print = function() {
  //debugger;
  var output = '[';

  var current = this.head;

  while (current !== null){
    output += current.data;

    if (current.next !== null){
      output += ', ';
    }

    current = current.next;
  }

  output += ']';
  console.log(output);
}

var list = new LinkedList();

// list.append('r');
// list.append('a');
// list.append('c');
// list.append('e');
// list.append('c');
// list.append('a');
// list.append('r');

list.prepend(1);
list.prepend(2);
list.prepend(3);
list.prepend(4);
list
list.print();
list.reverse();
//console.log(list.palindrome());
// list.print();
