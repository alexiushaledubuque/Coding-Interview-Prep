/*
		Approach: 
		1. Sort the values in ascending order
		2. Return the array value at index array.length - num

		Time Complexity: O(n)
		Space Complexity: Constant O(1)
*/

const nthLargestArrayItem = ((array, num) => {
  array = array.sort((a,b) => a-b)
  console.log(`Array after sort is ${array}`)
  return array[array.length-num]
})

// nthLargestArrayItem([1,8,4,5,9,7,2,10,44,55,67], 2)
// nthLargestArrayItem([1,8,4,5,9,7,2,10,44,55,67], 5)