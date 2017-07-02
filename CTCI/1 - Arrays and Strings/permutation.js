
// String Permutation
const permutation = (inputArr) => {
  let result = [];
  inputArr = inputArr.split('')
  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m.join(''))
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next))
    }
  }
}
permute(inputArr)

return result;
}
permutation('cat');

// Integer Permutation
const permutation = (inputArr) => {
  let result = [];
  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next))
     }
   }
 }
 permute(inputArr)
 return result;
}
permutation([1,2,3]);