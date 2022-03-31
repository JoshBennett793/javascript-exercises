const reverseString = function(string) {
	string = string.split('');
	string.reverse();
	return string.join('');
};

// Do not edit below this line
module.exports = reverseString;