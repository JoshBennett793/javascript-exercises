// A function to determine if a particular year
// is a leap year. Returns true or false
const leapYears = function(year) {
	
	if (year % 4 !== 0) {
		return false;
	}
		else if (year % 400 !== 0 &&
							year % 100 === 0) {
		return false;
	}
		else {
			return true;
		}
};

// Do not edit below this line
module.exports = leapYears;
