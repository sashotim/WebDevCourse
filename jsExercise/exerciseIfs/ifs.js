var age = prompt("What is your age?");

if (age<0) {
	console.log("error: write a positive number!");
}else if (Math.sqrt(age)%1 === 0) {
	console.log("perfect sqare!");
}
if (age === 21) {
	console.log("Happy 21st Birth Day!");
}
if ((age % 2) === 1) {
	console.log("Your age is odd!");
}
