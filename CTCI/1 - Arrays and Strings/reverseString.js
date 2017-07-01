/*
		Approach: In-Place Reversal No Additional Storage
		1. Convert the string into an array
		2. Iterate over the array until half the length is reached
		3. Swap places of the current item with an item from the end of the array
		4. Return the modified string

		Time Complexity: O(n)
		Space Complexity: Constant O(1)
*/

const reverseString = ((str) => {
  str = str.split('')
  
  for (let i = 0; i < str.length/2; i++) {
    let temp = str[i]
    str[i] = str[str.length - 1 - i]
    str[str.length - 1 - i] = temp
  }
  
  return str.join('')
})

reverseString("It's Christmas time in the city")