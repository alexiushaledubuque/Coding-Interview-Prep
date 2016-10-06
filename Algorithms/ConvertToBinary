// #15 Write a function that would translate any integer into binary.

var convertToBinary = function(int){
  // Concatenate leading 0 for positive integers
  if (int > -1) return '0' + (int >>> 0).toString(2);

  // Leave off leading 0 for negative numbers
  return int.toString(2);

  // return (int).toString(2) also returns the same result
  // (-int <<< 0).toString(2); returns '11111111111111111111111111111101' but
  // (-int).toString(2) returns '11'
};
