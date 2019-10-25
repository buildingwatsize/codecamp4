export function main(arr) {
	
	// Validate Array Length
	if (arr.length === 0) return 0

	// Initialize
	let rooms = [[arr[0]]] // Set Default Room (it's always have atleast 1 room)
	let [prevStartTime, prevEndTime] = arr[0] // Set Previous Time from first input index

	// Start groupping rooms
	for (let index = 1; index < arr.length; index++) {
		let [startTime, endTime] = arr[index] // Set current Time by each input slot
		
		// Run search overlapping
		rooms.every((room, roomIdx) => {
			
			let notOverlapCount = 0 // Set zero of not overlaping data
			room.forEach(slot => {
				// Set Previous Time by each slot in that room
				[prevStartTime, prevEndTime] = slot

				if ((startTime < prevStartTime && endTime < prevStartTime) || (startTime > prevEndTime && endTime > prevEndTime)) {
					// not overlap case
					// before we push data to that room we must check it's not overlaping all
					notOverlapCount++
				} else if ((startTime >= prevStartTime && startTime <= prevEndTime) || (endTime >= prevStartTime && endTime <= prevEndTime)) {
					// overlap case
					// after it was checked all of room and found , it will be a new room
					if (roomIdx === rooms.length - 1) {
						rooms.push([arr[index]])
					}
				}
			})
			
			// if not overlap all it'll be push in that room
			if (notOverlapCount === room.length) {
				room.push(arr[index])
				return false
			}
			
			// defualt return of every function
			return true
		})
	}

	// return count rooms
	return rooms.length
}