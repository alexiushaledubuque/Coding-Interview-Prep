// Basic Stack Implementation
var Stack = function() {
  var storage = [];

  this.push = function(value){
    storage.push(value);
  };

  this.pop = function(){
    return storage.pop();
  };

  this.size = function(){
    return storage.length;
  };
};

// Implement the Queue using 2 Stacks
var Queue = function() {

  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(value){
    inbox.push(value);
  };

  this.dequeue = function(){
    var length = inbox.size();

    while (length > 0){
      outbox.push(inbox.pop());
      length--;
    }
    var sendback = outbox.pop();

    length = outbox.size();

    while (length > 0){
      inbox.push(outbox.pop());
      length--;
    }
    return sendback;
  };

  this.size = function(){
    debugger;
    return inbox.size();
  };
