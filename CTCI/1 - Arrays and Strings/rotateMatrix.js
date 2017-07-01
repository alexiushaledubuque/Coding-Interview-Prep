/**
 * 1. Takes an input string - matrix 
 * 2. Get the indices of each array
 * 3. Map the index of an item to its new place
 * 3. Reverse each array of strings
 * 4. Return the rotated string
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 *
 */

const rotateMatrix =  ((matrix) => {
  // Philippians 4:13 (NKJV) I can do all things through Christ who strengthens me.
  a = matrix;
  a = Object.keys(a[0]).map((c) => a.map((r) => r[c]));
  
  // row reverse
  for (var i in a){
    a[i] = a[i].reverse();
  }
  return a;
})

rotateMatrix([ [ 1, 2 ], [ 3, 4 ] ])
