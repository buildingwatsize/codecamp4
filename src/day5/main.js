export function main(arr) {
	const order = { "R": 1, "G": 2, "B": 3 }
	const getVal = (ch) => order[ch] || Infinity
	return arr.sort((a, b) => getVal(a) - getVal(b))
}