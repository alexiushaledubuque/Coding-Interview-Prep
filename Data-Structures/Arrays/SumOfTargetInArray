/*
[1] Given an array of integers, determine whether or not there exist two
 elements in the array (at different positions) whose sum is equal to some
 target value. Examples: [5, 4, 2, 4], 8 --> true [5, 1, 2, 4], 8 --> false
*/

//Refactored - O(n)
var twoIntegers = function (array, target){
  var size = array.length;
  var obj = {};

  for (var i = 0; i < size; i++){
    if (obj.hasOwnProperty(array[i])){
      obj[array[i]]++;
    } else {
      obj[array[i]] = 1;
    }
  }

  for (var prop in obj){
     if (Number(prop) < target) {
    	obj[prop]--;
    	if (obj[prop] === 0){
    		delete obj[prop];
    	}

	    if (obj.hasOwnProperty(target-Number(prop))){
	      return true;
	    }
    }
  }
  return false;
}

console.log(twoIntegers([5, 4, 2, 4], 8));
console.log(twoIntegers([5, 1, 2, 4], 8));

//Original O(n^2)
var twoIntegers = function (array, target){
  var size = array.length;

  for (var i = 0; i < size; i++){
    for (var e = i+1; e < size; e++){
      if (array[i] + array[e] === target){
        return true;
      }
    }
  }
  return false;
}

twoIntegers([5, 4, 2, 4], 8);
twoIntegers([5, 1, 2, 4], 8);

// [5, 4, 2, 4], 8 --> true [5, 1, 2, 4], 8 --> false
