/*
  Bubble sort, sometimes referred to as sinking sort, is a simple sorting
  algorithm that repeatedly steps through the list to be sorted, compares each
  pair of adjacent items and swaps them if they are in the wrong order. The pass
  through the list is repeated until no swaps are needed, which indicates that
  the list is sorted. The algorithm, which is a comparison sort, is named for
  the way smaller or larger elements "bubble" to the top of the list. Although
  the algorithm is simple, it is too slow and impractical for most problems even
  when compared to insertion sort.[1] It can be practical if the input is usually
  in sorted order but may occasionally have some out-of-order elements nearly in
  position.
*/

var bubbleSort = function(array){
  // set a boolean sort flag
  var sorted = true;

  for (var i = 0; i < array.length; i++){
    // Compare current item to next item
    if(array[i] > array[i + 1]){
      // Save next item value to temp variable
      var temp = array[i + 1];
      // Change the next item to the value of the previous item
      array[i + 1] = array[i];
      // Change the current item to the value of the next item
      array[i] = temp;
      // Change the sorted flag since the sort is not complete
      sorted = false;
    }
  }
  // If the array is sorted, return it, else recurse and sort again
  return sorted ? array : bubbleSort(array);
}

// ES6 version
const bubbleSort = ((array) => {
  let sorted = true;
  for (var i = 0; i < array.length; i++){
    // Compare current item to next item
    if(array[i] > array[i + 1]){
      // Save next item value to temp variable
      var temp = array[i + 1];
      // Change the next item to the value of the previous item
      array[i + 1] = array[i];
      // Change the current item to the value of the next item
      array[i] = temp;
      // Change the sorted flag since the sort is not complete
      sorted = false;
    }
  }
  // If the array is sorted, return it, else recurse and sort again
  return sorted ? array : bubbleSort(array);
})



