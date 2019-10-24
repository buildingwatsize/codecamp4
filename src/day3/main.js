function main(str) {

	// Thanks: https://stackoverflow.com/questions/21997437/javascript-split-string-by-multiple-occurrences-of-letters
	
	let groupsLetter = str.match(/(.)\1*/g) // ["AA", "B", "A"]
	let resultGroupsLetter = ""
	groupsLetter.forEach(element => { resultGroupsLetter += element.length + element[0] })

	return resultGroupsLetter
}

module.exports = { main };