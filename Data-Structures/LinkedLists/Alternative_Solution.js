/*
[2] Implement a set-like data structure that supports Insert, Remove, and
GetRandomElement efficiently. Example: If you insert the elements 1, 3, 6, 8
and remove 6, the structure should contain [1, 3, 8]. Now, GetRandom should
return one of 1, 3 or 8 with equal probability.
*/

var HashTable = function() {
  this.storage = [];
  this.reference = {};
}

HashTable.prototype.insert = function(element) {
  // check if element exists in reference
  if (!this.reference.hasOwnProperty(element)) {
    // it does not exist, so append element to array
    this.storage.push(element);
    // update reference with index of element in storage
    this.reference[element] = this.storage.length -1;
  }
}

HashTable.prototype.remove = function(element) {
  // check if element exists in reference
  if (this.reference.hasOwnProperty(element)) {
    var index = this.reference[element];
    delete this.reference[element];
    // move last element in storage to current index

    // prev solution: var elementToBeMoved = (this.storage.splice(this.storage.length-1))[0];
    // new solution: get element at last index and then reset the length of storage
    var lastIndex = this.storage.length - 1
    var elementToBeMoved = this.storage[lastIndex];
    // set length storage array - 1 to delete last element in storage array
    this.storage.length = lastIndex;

    this.storage[index] = elementToBeMoved;
    // update reference of moved element;
    this.reference[elementToBeMoved] = index;
    // return true if this.reference[element] has been deleted
    return !this.reference.hasOwnProperty(element);
  } else {
    return null;
  }
}

HashTable.prototype.getRandomElement = function() {
  // use storage to see index of available elements
  var length = this.storage.length;
  var randIndex = Math.floor(Math.random() * length);
  return this.storage[randIndex];
}
