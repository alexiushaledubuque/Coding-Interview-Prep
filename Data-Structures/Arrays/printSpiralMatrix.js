// Print a matrix of arrays in spiral order

var array = [ 
  [1,  2,  3,   4],
  [5,  6,  7,   8],
  [9,  10, 11,  12],
  [13, 14, 15,  16]  
];

const spiralTraversal = (array) => {
  let discovered = new Set();
  let result = [];  
  let totalSpots = array.length * array[0].length;
  let direction = 'right';

  for (var i = 0; i < array.length; i ++) {
    for (var j = 0; j < array[i].length; j++) {   

      while (totalSpots) {
        while (direction === 'right' && !!bounds(array, i, j) && !discovered.has(array[i][j])) {  
          discovered.add(array[i][j]);                        
          result.push(array[i][j]);
          totalSpots--;                            
          j++;                         

        }

        direction = 'down';  
        i++;
        j--;


        while (direction === 'down' && !!bounds(array,i, j) && !discovered.has(array[i][i])) {      
          discovered.add(array[i][j]);                    
          result.push(array[i][j]);
          totalSpots--;          
          i++;                                           
        }


        direction = 'left';  
        j--;
        i--;


        while (direction === 'left' && !!bounds(array, i, j) && !discovered.has(array[i][j])) {  
          discovered.add(array[i][j]);                    
          result.push(array[i][j]);
          totalSpots--;       
          j--;                         
        }


        direction = 'up';          
        i--;
        j++


        while (direction === 'up' && bounds(array, i, j) && !discovered.has(array[i][j])) {
          discovered.add(array[i][j]);          
          result.push(array[i][j]);
          totalSpots--;          
          i--;                                   
        }

        direction = 'right';        
        j++;
        i++;

      }          
    }
  }
  return result;
}

const bounds = (array, i, j) => {
  if (i < array.length && i >= 0 && j < array[0].length && j >= 0) {
    return true;
  } else {
    return false;
  }
};

spiralTraversal(array)

// output => [ 1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10 ]