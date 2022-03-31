const removeFromArray = function(array, ...query) {

	array = array.filter(item => !query.includes(item))
		return array;

}

// Do not edit below this line
module.exports = removeFromArray;
