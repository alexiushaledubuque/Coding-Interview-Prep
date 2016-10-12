/*
Selection sort is to repetitively pick up the smallest element and put it into
the right position:

Find the smallest element, and put it to the first position.
Find the next smallest element, and put it to the second position.
Repeat until all elements are in the right positions.
A loop through the array finds the smallest element easily. After the smallest
element is put in the first position, it is fixed and then we can deal with the
rest of the array. The following implementation uses a nested loop to repetitively
pick up the smallest element and swap it to its final position. The swap() method
exchanges two elements in an array. Followed by a recursive example
*/

var selectionSort = function(array){
  // Iterate over array and compare 1st value to all others in the array
	for (var i = 0; i < array.length; i++){
    // Iterate over array starting from the 2nd element
		for (var j = i + 1; j < array.length; j++){
			var temp;
			// Swap 1st position with 2nd position if the 1st number is larger
			if (array[i] > array[j]){
				temp = array[j];
				array[j] = array[i];
				array[i] = temp;
			}
		}
	}
  //return the array
	return array;
};

selectionSort([10,1,3,7,20]);
