// Iterative Approach  Time Complexity - O(n^2)
function countIslands (mapStr) {
  var subArrays = mapStr.split("\n");
  var array = [],
  	   islands = 0;
  subArrays.forEach(function(arr){
     array.push(arr.split(""));
  });

  for(var i=0;i<array.length;i++){
     for (var e=0; e <array[i].length; e++){

      // Encounter an Island - now check for possible clusters
      if (array[i][e] == "0"){
         // Check previous row & increase islands if no nearby 0 found
         if (i > 0 && array[i-1][e] !== "0" && e > 0 && array[i][e-1] !=="0"){
          islands++;
         }
         // Check previous row & decrease islands if a nearby 0 is found
         else if(i > 0 && array[i-1][e] === "0" &&  e > 0 &&
           array[i][e-1] === "0" && array[i-1][e-1] !== "0"){
           islands--;
         }
         // Check current row & increase islands if no nearby 0 found
         else if( i === 0 && e > 0 && array[i][e-1] !== "0"){
          islands++;
         }
         // Check within current array if island found and the next row does not have a nearby 0
         else if( e === 0 && i > 0 && array[i-1][e] !== "0"){
          islands++;
         }
         // Check the first item of the first row & increase islands if 0 found
         else if (i === 0 && e === 0){
          islands++;
         }
      }
     }
  }
  return islands;
 }

 //Recursive Approach with Subroutine
 function countIslands (mapStr) {
 	 // Chain methods - create array of strings - map to an array of arrays
   var map = mapStr.split('\n').map((row) => row.split(''));

   var islands = 0;
   //Iterate over array of arrays - across
   for (var row = 0; row < map.length; row ++) {
     //Iterate over single array in this position - down
     for (var col = 0; col < map[row].length; col++) {
       // Encounter an Island - now check for possible clusters
       if (map[row][col] === '0') {
         islands += 1;
         //Subroutine to check for clusters in 4 directions (up, down, front, back)
         floodFill(row, col);
       }
     }
   }

   return islands;

   function floodFill (x, y) {
   	 //Check if item is not null or has a dot
     if (!map[x] || !map[x][y] || map[x][y] === '.') {
       return;
     } else {
       //Replace the 0 with a dot
       map[x][y] = '.';
     }
     //Check if next column item is a 0 or dot
     floodFill(x, y + 1);
     //Check if previous column item is a 0 or dot
     floodFill(x, y - 1);
     //Check if next row item is a 0 or dot
     floodFill(x + 1, y);
     //Check if previous row item is a 0 or dot
     floodFill(x - 1, y);
   }
 }

countIslands('..0...\n.00..0\n0...0.');
