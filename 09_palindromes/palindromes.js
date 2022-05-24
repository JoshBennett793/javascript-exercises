const palindromes = (string) => {
	string = string.toLowerCase().replace(/[^a-zA-Z]/g, "").split("");
	return string.join("") === string.reverse().join("") ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
