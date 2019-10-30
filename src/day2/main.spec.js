const { main } = require('./main');

describe('ให้สตริงสองตัวที่มีขนาดความยาวเท่ากัน ให้เทียบตัวอักษรสตริง 2 ตัว ว่าต่างกันมากแค่ไหนและคืนค่าออกมาเป็นตัวเลขโดยที่ 0 หมายถึงไม่ต่างเลย', () => {
	test('ให้สตริง sun และ sun ไม่มีตัวอักษรที่ต่างกันเลย ควรคืนค่า 0', () => {
		expect(main("sun", 'sun')).toBe(0)
	});
	test('ให้สตริง usn และ usn ไม่มีตัวอักษรที่ต่างกันเลย ควรคืนค่า 0', () => {
		expect(main("usn", 'usn')).toBe(0)
	});
	test('ให้สตริง nus และ sun ทั้งหมดมีตัวอักษรตัวที่ 1 และ 3 ที่ต่างกัน ควรคืนค่า 2', () => {
		expect(main("nus", 'sun')).toBe(2)
	});
	test('ให้สตริง sun และ nus ทั้งหมดมีตัวอักษรตัวที่ 1 และ 3 ที่ต่างกัน ควรคืนค่า 2', () => {
		expect(main("sun", 'nus')).toBe(2)
	});
	test('ให้สตริง sun และ usn ทั้งหมดมีตัวอักษรตัวที่ 1 และ 2 ที่ต่างกัน ควรคืนค่า 2', () => {
		expect(main("sun", 'usn')).toBe(2)
	});
	test('ให้สตริง usn และ sun ทั้งหมดมีตัวอักษรตัวที่ 1 และ 2 ที่ต่างกัน ควรคืนค่า 2', () => {
		expect(main("usn", 'sun')).toBe(2)
	});
	test('ให้สตริง usn และ nus ทั้งสามไม่เหมือนกันเลย ควรคืนค่า 3', () => {
		expect(main("usn", 'nus')).toBe(3)
	});
	test('ให้สตริง nus และ usn ทั้งสามไม่เหมือนกันเลย ควรคืนค่า 3', () => {
		expect(main("nus", 'usn')).toBe(3)
	});

	test('ให้สตริง cherry และ cherry ไม่มีตัวอักษรที่ต่างกันเลย ควรคืนค่า 0', () => {
		expect(main("cherry", 'cherry')).toBe(0)
	});
	test('ให้สตริง cherry และ cryher ทั้งหมดมีตัวอักษรตัวที่ 2,3,4,5,6 ที่ต่างกัน ควรคืนค่า 5', () => {
		expect(main("cherry", 'cryher')).toBe(5)
	});
	test('ให้สตริง cryher และ cherry ทั้งหมดมีตัวอักษรตัวที่ 2,3,4,5,6 ที่ต่างกัน ควรคืนค่า 5', () => {
		expect(main("cryher", 'cherry')).toBe(5)
	});
	test('ให้สตริง cheryr และ cherry ทั้งหมดมีตัวอักษรตัวที่ 5 และ 6 ที่ต่างกัน ควรคืนค่า 2', () => {
		expect(main("cheryr", 'cherry')).toBe(2)
	});
	test('ให้สตริง cherry และ cheryr ทั้งหมดมีตัวอักษรตัวที่ 5 และ 6 ที่ต่างกัน ควรคืนค่า 2', () => {
		expect(main("cherry", 'cheryr')).toBe(2)
	});
	test('ให้สตริง hercyr และ cherry ทั้งหกไม่เหมือนกันเลย ควรคืนค่า 6', () => {
		expect(main("hercyr", 'cherry')).toBe(6)
	});
	test('ให้สตริง cherry และ hercyr ทั้งหกไม่เหมือนกันเลย ควรคืนค่า 6', () => {
		expect(main("cherry", 'hercyr')).toBe(6)
	});
});
