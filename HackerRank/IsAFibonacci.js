// Determine if the integer given is in the Fibonacci Sequence
// Time Complexity O(n)
// Space Complexity O(1)

function processData(input) {

	// convert input string to an array for easy formatting
    input = input.split('\n');

    // shift the number of input tests & convert to a number
	var tests = Number(input.shift()),
		output = '';

	for (var i = 0; i < tests; i++){
		if (fibChecker(Number(input[i]))){
			output += 'IsFibo';
		} else {
			output += 'IsNotFibo';
		}
		output += '\n';
	}
	
	return output.trim();
}

// Subroutine which returns boolean if the number is a fibonacci # or not
var fibChecker = function(n){
	var sum = 0,
		prevPrev = 0,
		prev = 1;

	while (sum < n){
		sum = prev + prevPrev;
		if (sum === n) return true;
		prevPrev = prev;
		prev = sum;
	}
	return false;
};

console.log(processData('3\n5\n7\n8'));
