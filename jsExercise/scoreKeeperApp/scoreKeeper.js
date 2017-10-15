var pointsPlayerOne = document.querySelector("#pointsPlayerOne");
var pointsPlayerTwo = document.querySelector("#pointsPlayerTwo");
var playingTo = document.querySelector("#playingTo");
var inputField = document.querySelector("#inputField");
var playerOnePoint = document.querySelector("#playerOnePoint");
var playerTwoPoint = document.querySelector("#playerTwoPoint");
var reset = document.querySelector("#reset");
var maxScore = document.querySelector("#maxScore");
var gameOver = false;


var scorePlayerOne = 0;
var scorePlayerTwo = 0;
var winningScore = 5;

pointsPlayerOne.textContent = scorePlayerOne;
pointsPlayerTwo.textContent = scorePlayerTwo;
maxScore.textContent = winningScore;

playerOnePoint.addEventListener("click", function () {
	if (!gameOver) {
		scorePlayerOne++;
		if (scorePlayerOne === winningScore) {
			gameOver = true;
			pointsPlayerOne.style.color = "green";
		}
		pointsPlayerOne.textContent = scorePlayerOne;
	} 
});
playerTwoPoint.addEventListener("click", function () {
	if (!gameOver) {
		scorePlayerTwo++;
		if (scorePlayerTwo === winningScore) {
			gameOver = true;
			pointsPlayerTwo.style.color = "green";
		}
		pointsPlayerTwo.textContent = scorePlayerTwo;
	} 
});

function restart() {
	scorePlayerOne = 0;
	scorePlayerTwo = 0;
	pointsPlayerOne.textContent = scorePlayerOne;
	pointsPlayerTwo.textContent = scorePlayerTwo;
	pointsPlayerOne.style.color = "black";
	pointsPlayerTwo.style.color = "black";
	gameOver = false;
};

reset.addEventListener("click", function() {
	restart();
});

inputField.addEventListener("change", function() {
	winningScore = Number(inputField.value);
	maxScore.textContent = winningScore;
	restart();
});

