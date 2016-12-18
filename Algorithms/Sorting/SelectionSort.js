/*
	Selection sort is a comparison sorting algorithm, specifically an in-place comparison sort. 
	It has O(n2) time complexity, making it inefficient on large lists, and generally 
	performs worse than the similar insertion sort. Selection sort is noted for its simplicity, 
	and it has performance advantages over more complicated algorithms in certain situations, 
	particularly where auxiliary memory is limited.

	The algorithm divides the input list into two parts: the sublist of items already sorted, 
	which is built up from left to right at the front (left) of the list, and the sublist of items 
	remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty 
	and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest 
	(or largest, depending on sorting order) element in the unsorted sublist, exchanging (swapping) it 
	with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries 
	one element to the right.

	Data structure	Array
	Worst-case performance	О(n2)
	Best-case performance	О(n2)
	Average performance	О(n2)
	Worst-case space complexity	О(n) total, O(1) auxiliary
*/

const selectionSort = nums => {
	// declare the minimum index and temp for swaps
	let min = 0,
			temp;
		
	for (var i = 0; i < nums.length; i++){
		// set the minimum index for later swap
		min = i;
		for (var e = i + 1; e < nums.length; e++){
			if (nums[e] < nums[min]){
				// reassign minimum index if value is less in a different location
				min = e;
			} 
		}
		// after finding minimum value & index, swap the current index item with the item at minimum value index 
		temp = nums[i];
		nums[i] = nums[min];
		nums[min] = temp;
	}
	// return the sorted array
	return nums;
};

var nums = [10, 1, 4, 20, 19];

selectionSort(nums);