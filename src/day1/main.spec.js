const { main } = require('./main');

describe('ให้สตริงที่มีตัวปิด วงเล็บ () ปีกกา {} หรือ ก้ามปู [] ให้เช็คดูว่าเครื่องหมายที่ให้ทั้งหมดต้องมีความสมดุลกัน', () => {
	test('ให้สตริง "([])[]({})" ควรคืนค่า true', () => {
		expect(main("([])[]({})")).toBe(true)
	});
	test('ให้สตริง "([)]" ควรคืนค่า false', () => {
		expect(main("([)]")).toBe(false)
	});
	test('ให้สตริง "((()" ควรคืนค่า false', () => {
		expect(main("((()")).toBe(false)
	});
	test('ให้สตริง "[])]{{}" ควรคืนค่า false', () => {
		expect(main("[])]{{}")).toBe(false)
	});
	test('ให้สตริง "{" ควรคืนค่า false', () => {
		expect(main("{")).toBe(false)
	});
	test('ให้สตริง "}}}}}" ควรคืนค่า false', () => {
		expect(main("}}}}}")).toBe(false)
	});
	test('ให้สตริง "ABCDEF" ควรคืนค่า false', () => {
		expect(main("ABCDEF")).toBe(false)
	});
	test('ให้สตริง "{}[]([])" ควรคืนค่า true', () => {
		expect(main("{}[]([])")).toBe(true)
	});
});
