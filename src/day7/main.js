function main(arr) {
	// THANKS: https://stackoverflow.com/questions/42773836/how-to-find-all-subsets-of-a-set-in-javascript
	return arr.reduce(
		(previous, current) => {
			// console.log(previous, "\t=>\t", current, "\t=>\t", previous.map(set => [current, ...set].sort()), "\t=>\tCONCAT")
			return previous.concat(
				previous.map(each => [current, ...each].sort())
			)
		}, // Function
		[[]] // Initial
	);
}

module.exports = { main };

// console.log(main([1]));
// console.log(main([1, 2, 3]));
// รอบที่ 1: previous = [[]] (มาจากค่าตั้งต้น), current = 1 (Element ที่ 0 ของ Array) Return = [[], [1]] (มาจาก prev [[]] concat new, prev [[1], []])
// รอบที่ 2: previous = [[], [1]] (มาจากค่าตั้งต้น), current = 2 (Element ที่ 1 ของ Array) Return = [[], [1], [2], [1, 2]] (มาจาก prev [[], [1]] concat new, prev [[2], [2, 1]])
// รอบที่ 3: previous = [[], [1], [2], [1, 2]] (มาจากค่าตั้งต้น), current = 2 (Element ที่ 1 ของ Array) Return = [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
//  (มาจาก prev [[], [1], [2], [1, 2]] concat new, prev [[3], [3, 1], [3, 2], [3, 1, 2]])