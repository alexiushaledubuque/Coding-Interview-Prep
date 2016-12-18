function sortScores(unorderedScores, highestPossibleScore) {

    // array of 0s at indices 0..highestPossibleScore
    var scoresToCounts = [];
    for (var i = 0; i < highestPossibleScore + 1; i++) {
        scoresToCounts.push(0);
    }

    // populate scoresToCounts
    unorderedScores.forEach(function(score) {
        scoresToCounts[score]++;
    });
    //console.log('Scores to count: ', scoresToCounts);

    // populate the final sorted array
    var sortedScores = [];

    // for each item in scoresToCounts

    scoresToCounts.forEach(function(count, score) {


        // for the number of times the item occurs
        for (var time = 0; time < count; time++) {
            sortedScores.push(score);
        }
    });

    return sortedScores;
}

var unsortedScores = [37, 89, 41, 65, 91, 53, 89, 65, 41];
const HIGHEST_POSSIBLE_SCORE = 100;

sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE);
// returns [37, 41, 53, 65, 89, 91]
