function main(arr, ...listRemove) {
	return arr.filter(each => !listRemove.includes(each));
}
module.exports = { main };
