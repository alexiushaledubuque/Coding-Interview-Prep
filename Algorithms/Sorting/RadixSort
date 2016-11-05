const radixSort = (array) => {
  let mod = 10, 
  	  dev = 1,
  	  maxDigitCount = 0;
  	
  // configure the maxDigitCount
  for (let m = 0; m < array.length; m++) {
      if (String(array[m]).length > maxDigitCount){
  		maxDigitCount = String(array[m]).length;
  	}
  }

  // sort the items for number of maxDigitCount cycles
  for (let i = 0; i < maxDigitCount; i++, dev *= 10, mod *= 10) {
      for(let j = 0; j < array.length; j++) {
        let bucket = parseInt((array[j] % mod) / dev);
        if(counter[bucket]==null) {
          counter[bucket] = [];
        }
        counter[bucket].push(array[j]);
      }

      // Remove items from sorting array counter to prepare for the next cycle of sorting
      let pos = 0;
      for(let j = 0; j < counter.length; j++) {
          let value = null;
        if(counter[j]!=null) {
          while ((value = counter[j].shift()) != null) {
              array[pos++] = value;
          }
        }
      }
  }
  // remove temporary storage to clean up memory
  delete counter;

  // return the sorted array
  return array;
}

let counter = [[]];
let array = [1,23,5,3,210,9,2,9842,39];

radixSort(array);