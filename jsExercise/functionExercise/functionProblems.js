function isEven(num) {
	if (num % 2 === 0) {
		return true;
	}
	else {
		return false;
	}
}

function factorial(num) {
	var res = 1;
	while (num>0) {
		res = num*res;
		num--
	}
	return res;
}

function kebabToSnake(input) {
	var str = input.replace(/-/g, "_");
	return str;
}