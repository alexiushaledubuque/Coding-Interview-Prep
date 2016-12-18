// Merge 2 sorted arrays. Merge b array into a array

function sortedMerge(a, b) {
	var aIdx = a.length - 1,
		bIdx = b.length - 1,
		mIdx = aIdx + bIdx + 1;

	while (bIdx >= 0) {
		if (a[aIdx] < b[bIdx]){
			a[mIdx] = b[bIdx];
			bIdx--;
		} else {
			a[mIdx] = a[aIdx];
			aIdx--;
		}
		mIdx--;
	}
	return a;
}

console.log(sortedMerge([1,3,5,7,9], [2,4,6,8,10]));
