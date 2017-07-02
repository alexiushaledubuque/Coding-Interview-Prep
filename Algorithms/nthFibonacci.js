// ITERATIVE APPROACH

// Time O(n) - Space O(n)
nthFibonacci = function(n) {
	debugger;
  var sum = 0;
  var array = [0, 1];

  for (var i = 0; i < n; i++){
    sum = array[array.length - 1] + array[array.length - 2];
    array.push(sum);
  }
  return array[n];
};

// Time O(n) - Space O(1) without using storage objects - just variables
nth2Fibonacci = function(n) {
  debugger;
  var sum = 0;
  var prevPrev = 0;
  var prev = 1;

  for (var i = 1; i < n; i++){
    sum = prev + prevPrev;
    prevPrev = prev;
    prev = sum;
  }
  return sum;
};
