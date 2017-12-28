'use strict';

((app) => {
	const objectPropertyFilter = () => {
		const filterObjects = (objectList, selectedItems, targetProperty) => {
			if (!selectedItems || !selectedItems.length) {
				return objectList;
			}
			const filtered = [];

			objectList.forEach((obj) => {
				let numberOfMatches = 0;
				for (let i = 0, len = selectedItems.length; i < len; i += 1) {
					const category = selectedItems[i];

					if (obj[targetProperty].indexOf(category) > -1) {
						numberOfMatches += 1;

						if (numberOfMatches === len) {
							filtered.push(obj);
							break;
						}
					}
				}
			});

			return filtered;
		};

		return filterObjects;
	};

	app.filter('objectProperty', objectPropertyFilter);
})(angular.module('rwApp'));
