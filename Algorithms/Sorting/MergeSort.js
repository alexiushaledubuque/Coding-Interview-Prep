// Merge Sort algorithm sorts the items in the array by splitting the array in half
// then sorting each left/right half first, then merge the 2 halfs into 1 array
// Time Complexity 0 ( n log ( n)) - Space Complexity O(n)

function mergeSort(arr)
{
    if (arr.length < 2)
        return arr;

    var mid = Number(arr.length / 2),
        left   = arr.slice(0, mid),
        right  = arr.slice(mid, arr.length);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right)
{
    var results = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }

    while (left.length)
        results.push(left.shift());

    while (right.length)
        results.push(right.shift());

    return results;
}
