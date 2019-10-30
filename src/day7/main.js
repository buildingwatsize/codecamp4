function main(arr) {
	// THANKS: https://stackoverflow.com/questions/42773836/how-to-find-all-subsets-of-a-set-in-javascript
	return arr.reduce(
		(subsets, value) => subsets.concat(
			subsets.map(set => [value, ...set].sort())
		),
		[[]]
	);
}

module.exports = { main };

// console.log(main([1]));
// console.log(main([1, 2]));