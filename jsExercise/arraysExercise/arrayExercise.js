function printReverse(arr) {
	var length = arr.length;
	arr.forEach(function(element, i){
		arr.push(arr[(length-i-1)%length]);
	});
	arr.splice(0, length);
	return arr;
}

function isUniform(arr){
	var firstElement = arr[0];
	var isSame = true;
	arr.forEach(function(element){
		if (element !== firstElement) {
			isSame = false;
		}
	});
	return isSame;
}

function sumArray(arr) {
	var sum = 0;
	arr.forEach(function(element){
		sum +=element;
	});
	return sum;
}

function max(arr) {
	var max = Number.MIN_SAFE_INTEGER;
	arr.forEach(function(element){
		if (element > max) {
			max = element;
		}
	});
	return max;
}