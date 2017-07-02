// Sum 2 Binary number strings and 
// return the sum as a binary string

var sumBinary = (bin1, bin2) => {
  
  // Convert to decimals
  var bin1 = parseInt(bin1, 2),
      bin2 = parseInt(bin2, 2),
      
      // sum values
      sum = bin1 + bin2
      
  // See the decimal values    
  console.log(`${bin1}   ${bin2}`)
  
  // Convert back to binary with bit manipulation
  sum = (sum >>> 0).toString(2)
  return sum
}

sumBinary('11111', '11000000001');
