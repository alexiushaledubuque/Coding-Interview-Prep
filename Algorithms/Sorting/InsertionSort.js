/*
Insertion sort is a simple sort algorithm which builds the final sorted array one item at a time. 
The first item is considered already sorted. Then the next item is compared to the sorted item(s) 
and items are swapped if the new item is less than an already sorted item.

Data structure ->	Array

Time Complexity
Worst case -> О(n^2) 	comparisons, swaps
Best case -> O(n) 		comparisons, O(1) swaps
Average case ->	О(n^2) 	comparisons, swaps

Space complexity
Worst case -> О(n) total, O(1) auxiliary

Advantages
Simple implementation,
Efficient for (quite) small data sets, much like other quadratic sorting algorithms
Adaptive,
Stable; i.e., does not change the relative order of elements with equal keys
In-place; i.e., only requires a constant amount O(1) of additional memory space
Online; i.e., can sort a list as it receives it
*/

var insertionSort = function(array){
	debugger;
  var k,
      value,
      size = array.length;

  for (var i = 0; i < size; i++){
    // current item
    value = array[i];
    //previous item
    k = i - 1;

    while (array[k] > value){
    	// swap positions the previous item & current item
        array[i--] = array[k--];
    }
 	// assign value to current position in the array
    array[i] = value;
  }
  // return the sorted array
  return array;
};

// ES6 version
const insertionSort = nums => {
  let size = nums.length;
  
  for (var i = 1; i < size; i++){
    for (var j = 0; j < i; j++){
      if (nums[i] < nums[j]){

        // remove the item to be repositioned
        var remove = nums.splice(i, 1);
        
        // insert the removed item back into the array in the correct position
        nums.splice(j, 0, remove[0]);
      }
    }
  }
  return nums;
};

var nums = [10, 3, 4, 20, 1];
//var nums = [10,5,3,8,2,6,4,7,9,1]

insertionSort(nums);

var array = [10,1,400, 0, 7, 3,11, 2000,-1, -876, 4];

console.log(insertionSort(array));
