/*
    With Storage
    Approach: 
    1. Check if lengths differ by more than 2
    2. Create a hash for first string
    3. Iterate over the 2nd array
    4. Check if current value is in the Set
    5. If it is, deduct the value of hash character by 1
		6. If the hash value is zero, delete from hash
    7. If it's not in the hash, add the value to the Set
    8. Return the result of hash length check (1 = true, more than 1 = false)

    Time Complexity - O(n) Space O(n) for increasing storage needs
*/

const oneAway = ((str1, str2) => {
  let hash = {}
  
  // if length difference greater than one OR values are equal - it's false
  if (Math.abs(str1.length - str2.length) > 1 || str1 === str2) {
    return false
  }
  
  str1.split('').forEach((str) => {
    if (hash[str]) {
      hash[str]++
    } else {
      hash[str] = 1
    }
  })
  
  str2.split('').forEach((str) => {
    if (hash.hasOwnProperty(str)) {
      hash[str]--
      if (!hash[str]) {
        delete hash[str]
      }
    }
  })
  
  return Object.keys(hash).length === 1
})

oneAway('pales', 'ple')

/*
    Without Storage
    Approach: 
    1. Check if lengths differ by more than 2 Or the values are equal
    2. Create a flag to check if strings have been editted
    3. Iterate over the both arrays
    4. If characters values are not equal, Check if current value is in the Set
    5. If it is, deduct the value of hash character by 1
		6. If the hash value is zero, delete from hash
    7. If it's not in the hash, add the value to the Set
    8. Return the result of hash length check (1 = true, more than 1 = false)

    Time Complexity - O(n) Space O(1)
*/

const oneAway = ((str1, str2) => {
  
  if (Math.abs(str1.length - str2.length) > 1 || str1 === str2) {
    return false
  }

  let edit = false;

  // iterate over both strings at the same time
  for (let i = 0, j = 0; i < str1.length && j < str2.length; i++, j++) {
    if (str1[i] !== str2[j]) {
      if (edit) {
        return false
      }
      
      if (str1.length > str2.length) {
        j--
      }
      else if (str1.length < str2.length) {
        i--
      }
      edit = true
    }
  }
  return true
})

oneAway('pale', 'bale')