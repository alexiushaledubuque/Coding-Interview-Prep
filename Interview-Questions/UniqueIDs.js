/*
  Given the array of IDs, which contains many duplicate integers and one unique
   integer, find the unique integer.
*/

function myFunction(arg) {
    var hashObj = {};

    for (var i = 0; i < arg.length; i++){
    	if (!hashObj.hasOwnProperty(arg[i])){
        	hashObj[arg[i]] = 1;
        }else {
        	hashObj[arg[i]]++;
        }
    }

    for (var prop in hashObj) {
    	if (hashObj[prop] < 2){
    		return 'running with ' + prop;
        }
    }
}

// run your function through some test cases here
// remember: debugging is half the battle!
console.log(myFunction([10,11,12,13,14,15,15,10,11,13,12]));
