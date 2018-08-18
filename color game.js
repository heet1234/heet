var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");

var pickedColor = pickColor();

//for displaying picked color and uppercasing it
var colorDisplay = document.querySelector(".colorDisplay");
colorDisplay.textContent = pickedColor;
colorDisplay.style.textTransform = "uppercase";


// for message if clicked color is right or wrong
var messageDisplay = document.querySelector("#message");

var h1 = document.querySelector(".h");

var resetButton = document.querySelector("#reset");

var easyBtn = document.querySelector("#easyBtn");

var hardBtn = document.querySelector("#hardBtn");



easyBtn.addEventListener("click", function() {
	// body...
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	hardBtn.style.color = "rgb(40, 110, 221)";
	colors = generateRandomColors(3);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "rgb(40, 110, 221)";
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else{
			squares[i].style.display = "none";
		}
	}

})


hardBtn.addEventListener("click", function() {
	// body...
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	easyBtn.style.color = "rgb(40, 110, 221)";
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "rgb(40, 110, 221)";
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
		
	}

})


resetButton.addEventListener("click", function() {
	// generate new colore
	colors = generateRandomColors(6);
	// pick a new random color from array
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	// change color of squares
	for (var i = squares.length - 1; i >= 0; i--) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
	// background color change of h1
	h1.style.backgroundColor = "rgb(40, 110, 221)";
	// for if correct color is selected button text changes to play again but to change it again to new colors
	resetButton.textContent = "New colors";
	//resetButton.classList.add("button");
	// there should be no text inn messageDisplay even after button is clicked
	messageDisplay.textContent = "";

	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");

})


for (var i = squares.length - 1; i >= 0; i--) {

	// add initial colors
	squares[i].style.backgroundColor = colors[i];

	// add click listeners
	squares[i].addEventListener("click", function(){
		// grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare it with color of picked square
		if (clickedColor === pickedColor){
			messageDisplay.textContent = "correct!";
			changeColors(clickedColor);
			// background color of h1 is set as of clicked color
			h1.style.backgroundColor = clickedColor;
			// button says play again
			resetButton.textContent = "Play Again?";
		} else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "try again!!!";
		}
	});

}


// to change colors of all the squares and ggive them color as of clicked color
function changeColors(color){
	// loop through all the squares
	for (var i = squares.length - 1; i >= 0; i--) {
		squares[i].style.backgroundColor = color;
	}
}


// randomizing picked color
function pickColor(){
	// body...
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


// generating random colors
function generateRandomColors(num) {
	var array = [];
	for (var i = 0; i<num; i++){
		array.push(randomColor());
	}
	return array;
}

function randomColor() {
	// body...
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb("+r + ", " + g + ", " + b + ")";
}



