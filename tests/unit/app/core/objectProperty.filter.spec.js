/* eslint no-undef: 0 */

const mockObjectList = [
	{
		id: 1,
		name: 'Test 1',
		categories: ['Cat1', 'Cat2'],
	},
	{
		id: 2,
		name: 'Test 2',
		categories: ['Cat3'],
	},
	{
		id: 3,
		name: 'Test 3',
		categories: ['Cat4', 'Cat5'],
	},
	{
		id: 4,
		name: 'Test 3',
		categories: ['Cat4', 'Cat5'],
	},
];

describe('Object Property Filter', () => {
	beforeEach(() => {
		bard.appModule('rwApp');
		bard.inject('objectPropertyFilter');

		console.log('test');
	});

	it('should exist', () => {
		expect(objectPropertyFilter).toBeDefined();
	});

	it('should only show items with a category of "Cat1"', () => {
		const actual = objectPropertyFilter(mockObjectList, ['Cat1'], 'categories');
		const expected = [
			{
				id: 1,
				name: 'Test 1',
				categories: ['Cat1', 'Cat2'],
			},
		];

		expect(expected).toEqual(actual);
	});

	it('should only show items with the categories "Cat5" and "Cat4" ', () => {
		const actual = objectPropertyFilter(mockObjectList, ['Cat5', 'Cat4'], 'categories');
		const expected = [
			{
				id: 3,
				name: 'Test 3',
				categories: ['Cat4', 'Cat5'],
			},
			{
				id: 4,
				name: 'Test 3',
				categories: ['Cat4', 'Cat5'],
			},
		];

		expect(expected).toEqual(actual);
	});

	it('should not filter any results if there is a bad property passe din', () => {
		const actual = objectPropertyFilter(mockObjectList, [], 'categoriessss');
		expect(mockObjectList).toEqual(actual);
	});

	it('should not filter any results if there aren\'t any selected items are passed in ', () => {
		const actual = objectPropertyFilter(mockObjectList, [], 'categories');
		expect(mockObjectList).toEqual(actual);
	});

	it('should not filter any results if there aren\'t any selected items is null', () => {
		const actual = objectPropertyFilter(mockObjectList, null, 'categories');
		expect(mockObjectList).toEqual(actual);
	});
});
