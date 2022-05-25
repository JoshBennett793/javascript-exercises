const fibonacci = (num) => {
  if (num < 0) return "OOPS";

  let a = 0,
    	b = 1,
    	temp;

  while (num >= 0) {
		temp = a;
		a += b;
		b = temp;
		num--;
	}

	return b;
};

// Do not edit below this line
module.exports = fibonacci;
