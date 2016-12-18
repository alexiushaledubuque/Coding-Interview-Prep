// Merge 2 sorted arrays. Merge b array into a array
// Time complexity -> O(n log n) Space complexity -> O(n)
// pivot value can be any item; but, it's easier to start with the last item

function quickSort(array) {
	debugger;
	// base case
	if (array.length <=1){
		return array;
	}

	var pivotIndex = Math.floor((array.length - 1)/2);
	var pivotValue = array[pivotIndex],
		lessThanPivot = [],
		moreThanPivot = [];

	array = array.slice(0, pivotIndex).concat(array.slice(pivotIndex + 1));

	for (var i = 0; i < array.length; i++){
		if (array[i] < pivotValue) {
			lessThanPivot.push(array[i]);
		} else {
			moreThanPivot.push(array[i]);
		}
	}
	return quickSort(lessThanPivot).concat([pivotValue], quickSort(moreThanPivot));
}

console.log(quickSort([4,2,3,5,32,6,7,-98, -1]));
