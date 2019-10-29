export function main(root) {
	let data = []
	const getValues = (root) => {
		let current = root
		while (current.right) {
			current = current.right
			data.push(current.value)
		}
		if (current.left) {
			current = current.left
			data.push(current.value)
			while (current.right) {
				current = current.right
				data.push(current.value)
			}
		}
		data.push(root.value)
	}
	getValues(root)
	let unique = [...new Set(data)].sort((a, b) => {
		return b - a
	});
	// console.log("data >>>", unique);
	return unique[unique.length > 1 ? 1 : 0]
}