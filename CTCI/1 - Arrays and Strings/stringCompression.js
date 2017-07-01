/**
 * 1. Takes an input string 
 * 2. Counts contiguous sequences of the same character
 * 3. And replaces them with charactor#
 * 4. If the string is unique, the original string is returned
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 *
 */

const stringCompression = ((str) => {
  if (!str) return str

  let compressed = '',
      current = '',
      counter = 1,
      strCheck = '',
      strCheck2 = ''
  
  for (let i = 0; i < str.length; i++) {
    current = str[i]
    if (current === str[i + 1]) {
      counter++
    } else {
      compressed += current + counter
      counter = 1
    }
  }
  
  // determines if I return the original string or compressed string
  strCheck = compressed.match(/\d/g)
  strCheck2 = strCheck.reduce((total, digit) => {
    return Number(total) + Number(digit)
  })
  
  return strCheck.length === strCheck2 ? str : compressed
})

stringCompression('bbbbbbb')