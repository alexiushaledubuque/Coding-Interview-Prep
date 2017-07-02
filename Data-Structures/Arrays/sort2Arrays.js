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

const sort2Arrays = (arr1, arr2) => {
  return [bubbleSort(arr1), bubbleSort(arr2)]
}

sort2Arrays([4,3,2,0,1], ['E','D','C','A','B'])

// Constant space (swaps) and O(n) BubbleSort

// A is [0,1,2,3,4,] 
// B is [A,B,C,D,E]