/*
https://www.sitepoint.com/implementing-memoization-in-javascript/
Memoization can potentially increase performance by caching the results of
previous function calls.
Memoized functions store a cache which is indexed by their input arguments.
If the arguments exist in the cache, then the cached value is returned.
Otherwise, the function is executed and the newly computed value is added to the cache.
Object arguments should be stringified before using as an index.
Memoization can be automatically applied to referentially transparent functions.
Memoization may not be ideal for infrequently called or fast executing functions.
*/

// Iterative fibonacci
const fibIterative = n => {
  let [a, b] = [1, 0]
  while (n-- > 0) {
    [a, b] = [b + a, a]
  }
  return b
}

fibIterative(7)


// Regular Recursive fibonacci
function fibonacci(n) {
  if (n === 0 || n === 1)
    return n;
  else
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Single Arguments
var fibonacci = (function() {
  var memo = {};

  function f(n) {
    var value;

    if (n in memo) {
      value = memo[n];
    } else {
      if (n === 0 || n === 1)
        value = n;
      else
        value = f(n - 1) + f(n - 2);

      memo[n] = value;
    }

    return value;
  }

  return f;
})();

// Multiple Arguments 2 Formats: named arguments & arguments array
var fibonacci = (function() {
  var memo = {};

  function f(x, n) {
    var value;

    memo[x] = memo[x] || {};

    if (x in memo && n in memo[x]) {
      value = memo[x][n];
    } else {
      if (n === 0 || n === 1)
        value = n;
      else
        value = f(x, n - 1) + f(x, n - 2);

      memo[x][n] = value;
    }

    return value;
  }

  return f;
})();

// Using the arguments array
var fibonacci = (function() {
  var memo = {};
  var slice = Array.prototype.slice;

  function f(x, n) {
    var args = slice.call(arguments);
    var value;

    if (args in memo) {
      value = memo[args];
    } else {
      if (n === 0 || n === 1)
        value = n;
      else
        value = f(x, n - 1) + f(x, n - 2);

      memo[arguments] = value;
    }

    return value;
  }

  return f;
})();

// Caching Object Arguments
var foo = (function() {
  var memo = {};

  function f(obj) {
    var index = JSON.stringify(obj);

    if (index in memo) {
      return memo[index];
    } else {
      // memoized function contents
      return (memo[index] = function_value);
    }

  }

  return f;
})();

// Automatic Memoization
function memoize(func) {
  var memo = {};
  var slice = Array.prototype.slice;

  return function() {
    var args = slice.call(arguments);

    if (args in memo)
      return memo[args];
    else
      return (memo[args] = func.apply(this, args));

  }
}

// Check runtimes with console.time & console.timeEnd
console.time ('someFunction Name');
// Run whatever needs to be timed inbetween the statements
fibonacci(20);
// Display the end time elapsed since the function executed
console.timeEnd('someFunction Name');
