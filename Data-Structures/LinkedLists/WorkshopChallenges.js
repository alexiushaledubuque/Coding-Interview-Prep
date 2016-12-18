/*
[2] Implement a set-like data structure that supports Insert, Remove, and
GetRandomElement efficiently. Example: If you insert the elements 1, 3, 6, 8
and remove 6, the structure should contain [1, 3, 8]. Now, GetRandom should
return one of 1, 3 or 8 with equal probability.
*/

var LinkedList = function(){
  this.head = null;
};

LinkedList.prototype.insert = function(value){
  var addNode = this.newNode(value);

  if (!this.head){
    this.head = addNode;
    return;
  }

  var current = this.head;

  while(current.next !== null){
    current = current.next;
  }
  current.next = addNode;
};

LinkedList.prototype.size = function(){
  var size = 0;

  var traverse = this.head;

  while(traverse !== null){
    size++;
    traverse = traverse.next;
  }
  return size;
};

LinkedList.prototype.contains = function(value){
  var traverse = this.head;

  while (traverse.next !== null){
    if (traverse.data === value){
      return true;
    }
    traverse = traverse.next;
  }
  return false;
};

LinkedList.prototype.remove = function(value){
  var exist = this.contains(value);

  if (!exist){
    return "number not in set!";
  }

  var previous = null;
  var traverse = this.head;

  while(traverse.data !== value){
    previous = traverse;
    traverse = traverse.next;
  }
  previous.next = traverse.next;
};

LinkedList.prototype.getRandomElement = function(){
  var traverse = this.head;
  var array = [];

  while(traverse !== null){
    array.push(traverse.data);
    traverse = traverse.next;
  }
  var size = array.length;

  var random = (Math.floor(Math.random() * size));
  return array[random];
};

LinkedList.prototype.print = function() {
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
};

LinkedList.prototype.newNode = function(value){
  var Node = {
    data: value,
    next: null
  };
  return Node;
};

// Testing
var list = new LinkedList();

list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);
list.print();
list.remove(3);
list.print();
list.getRandomElement();
