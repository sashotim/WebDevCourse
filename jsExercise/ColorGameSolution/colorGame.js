var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
			reset();
		})
	}

	for (var i=0; i<squares.length; i++) {
	 	//add listeners for clicks
	 	squares[i].addEventListener("click", function(){
	 		var clickedColor = this.style.backgroundColor;

	 		if (clickedColor === pickedColor) {
	 			messageDisplay.textContent = "Correct!";
	 			changeColors(pickedColor);
	 			h1.style.backgroundColor = pickedColor;
	 			resetButton.textContent = "Play Again?";
	 		} else {
	 			this.style.backgroundColor = "#232323";
	 			messageDisplay.textContent = "Try Again";
	 		}
	 	})
	}

	reset();
}



function reset(){
	//generate new colors
	colors = generateRandomColors(numOfSquares);
	//pick a new random color
	pickedColor = pickColor();
	//display color on h1
	colorDisplay.textContent = pickedColor;

	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function() {
	reset();
})

function changeColors(color) {
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];

	//add num random colors to array
	for(var i=0; i<num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return array
	return arr;
}

function randomColor() {
	//pick RED 0-255
	var r = Math.floor(Math.random()*256);
	//pick GREEN 0-255
	var g = Math.floor(Math.random()*256);
	//pick BLUR 0-255
	var b = Math.floor(Math.random()*256);

	return "rgb(" + r + ", " + g +", " + b + ")";
}