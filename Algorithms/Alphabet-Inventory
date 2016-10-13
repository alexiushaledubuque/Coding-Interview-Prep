
// Refactored for O(n) Time Complexity.

function alphaCount (alphabet, text) {
	alphabet = alphabet.toLowerCase();
	text = text.toLowerCase();

	var textObj = {}, alphaObj = {};
	var output = [];

	for (var i = 0; i < text.length; i++){
		if (text[i] in textObj){
			textObj[text[i]]++;
		} else {
			textObj[text[i]] = 1;
		}
	}

	for (var j = 0; j < alphabet.length; j++){
		if (alphabet[j] in textObj){
			output.push(alphabet[j] + ':' + textObj[alphabet[j]]);
		}
	}

	return output.length > 0 ? output.join(',') : 'no matches';
}

// console.log(alphaCount("aBc", "aabbccdd"));
// console.log(alphaCount("x", "Racer X is my friend :)"));
// console.log(alphaCount("123", "o hai"));
// console.log(alphaCount("aogeuh", "uaoeuaoeuaoeuaoauoaeu"));
