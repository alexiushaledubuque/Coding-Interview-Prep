/*
Insertion sort is a simple sort algorithm which builds the final sorted array one item at a time. The first item is considered
already sorted. Then the next item is compared to the sorted item(s) and items are swapped if the new item is less than an already
sorted item.

Data structure ->	Array

Time Complexity
Worst case -> О(n2) 	comparisons, swaps
Best case -> O(n) 		comparisons, O(1) swaps
Average case ->	О(n2) 	comparisons, swaps

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
  var k,
      value,
      size = array.length;

  for (var i = 0; i < size; i++){
    value = array[i];
    k = i - 1;

    while (array[k] > value){
        array[i--] = array[k--];
    }
    array[i] = value;
  }
  return array;
};

var array = [10,1,400, 0, 007, 3,11, 2000,-1, -876, 4];

console.log(insertionSort(array));
