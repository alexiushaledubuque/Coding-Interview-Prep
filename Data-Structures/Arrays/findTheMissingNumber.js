const findMissingNumber = array => {
  
  if (array) {
    for(var i = 1; i < numArray.length; i++) {
      if(numArray[i] - numArray[i-1] != 1) {
        return `Missing number: ${i + 1}`
      }
    }  
  }
    
  return 'no missing number'
}

var numArray = [1,2,3,4,5,,7,8] 

findMissingNumber(numArray) // Missing number: 6
