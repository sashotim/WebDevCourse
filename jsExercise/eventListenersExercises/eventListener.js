var colorToggleButton = document.querySelector("#colorToggle");
var body = document.querySelector("body");
var isPurple = false;

colorToggleButton.addEventListener("click", function(){
	if (isPurple) {
		body.style.background = "purple";
	} else {
		body.style.background = "white";
	}

	isPurple = !isPurple;
});