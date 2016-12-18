//Conver function to ES6

const binaryToDecimal = (n) => {
  
  let result = 0

  const binaryArray = n.split('').reverse()

  for (let i = 0; i < binaryArray.length; i++){
    if (Number(binaryArray[i]) === 1){
      result += Math.pow(2, i)
    }
  }
  return result
};
