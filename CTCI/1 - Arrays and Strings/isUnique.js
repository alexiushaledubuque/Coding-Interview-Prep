/*
    With Storage
    Approach: 
    1. Iterate over the array
    2. Check if current value is in the Set
    3. If it is, return false
    4. If it's not, add the value to the Set
    5. When iteration is complete and no false triggered, return true

    Time Complexity - O(n) Space O(n) for increasing storage needs
*/
const isUnique = (arr) => {
  let temp = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (temp.has(arr[i])) {
      return false
    }
    temp.add(arr[i])
  }
  return true
}

/*
    With Storage
    Approach: 
    1. Sort the array
    2. Iterate
    3. If the current value is the same as the next value, return false
    4. If it's not, continue
    5. When iteration is complete and no false triggered, return true

    Time Complexity - O(n) Space O(1) Constant for comparison
*/
const isUniqueNoStorage = (arr) => {
  arr.sort((a,b) => a - b) // arr.sort() works the too
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i+1]) {
      return false
    }
  }
  return true
}
  
// Test Data
isUnique([1,2,3,4,5])     // true
isUniqueNoStorage([1,2,3,4,5,3])   // false

