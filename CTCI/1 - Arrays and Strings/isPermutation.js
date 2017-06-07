/*
		Approach:
		1. Permutations have the same number of characters
		2. If different lengths, return false
		3. They use all of the same letters just transposed
		4. Convert the strings into arrays
		5. Sort the arrays and Join back into strings
		6. Return boolean

		Time Complexity: sort() is also Quicksort which uses O(nlogn)
		Since I'm using O(nlogn) twice, the proper time complexity is 
		O(nlgn + xlgx)
		
		Space Complexity: Constant O(1)
*/

const isPermutation = (str1, str2) => {
  if (str1.length !== str2.length) return false
  return str1.split('').sort().join('') === str2.split('').sort().join('')
}

isPermutation('cat', 'tca')
isPermutation('cata', 'tcaa')