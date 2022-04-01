
//sums a + b as well as any number in between
//if a = 1 and b = 4, sums: 1 + 2 + 3 + 4 = 10
const sumAll = function(a, b) {
	let finalSum = 0; 
		
	let i = a;
	if (a < 0 || b < 0 ||
			 isNaN(a) || isNaN(b) || 
			 	typeof a === 'string' || 
			 		typeof b === 'string') { // if argument passed is non-numeric or negative value
		return 'ERROR';
	} else if (a < b) {
		do {
	 		finalSum += i;
			 i++;
	} while (i <= b);
}	else if (a > b) { // so it will work if the larger number is first argument passed
		do {
			finalSum += i;
			i--;
	} while (i >= b);
}
	return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
