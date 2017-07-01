/*
		Approach: - Could also use Permutations to find all Anagrams
		1. Anagrams rearrange the string like Permutations
		2. Iterate over the string
		3. Slice a letter from the string
		4. Recurse over the string with the sliced letter & remaining letters
		5. Build the new string
		6. Store the joined string in an array
		7. Return the array of strings

		Time Complexity: O(n)
		Space Complexity: Constant O(n)
*/

const allAnagrams = (string) => {
  const noDuplicates = {};
  
  const makeAnagram = (buildAnagram, remainingLetters) => {
    if (buildAnagram.length === string.length) {
      noDuplicates[buildAnagram] = true;
    }
    for (let i = 0; i < remainingLetters.length; i++) {
      const addLetter = buildAnagram + remainingLetters[i]; 
      const remainingLettersToAdd = remainingLetters.slice(0,i) + remainingLetters.slice(i+1);
      makeAnagram(addLetter, remainingLettersToAdd);
    }
  };

  makeAnagram('', string);

  return Object.keys(noDuplicates);
};

allAnagrams('abc')

// [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
