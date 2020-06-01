var numSquares = 6;
var colors = generateRandomColor(numSquares);
var pickedColor = pickRandomColor();

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function() {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	h1.style.backgroundColor = "#3ca8d6";
	numSquares = 3;
	colors = generateRandomColor(numSquares);
	pickedColor = pickRandomColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "NEW COLORS";
	messageDisplay.textContent = "";
	for(var i = 0;i<squares.length;i++)
	{
		if(colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click",function() {
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	h1.style.backgroundColor = "#3ca8d6";
	numSquares = 6;
	colors = generateRandomColor(numSquares);
	pickedColor = pickRandomColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "NEW COLORS";
	messageDisplay.textContent = "";
	for(var i = 0;i<squares.length;i++)
	{
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click",function() {
	//generate all new colors
	colors = generateRandomColor(numSquares);
	//pick a new random color
	pickedColor = pickRandomColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of square
	resetButton.textContent = "NEW COLORS";
	messageDisplay.textContent = "";
	for(var i = 0;i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#3ca8d6";
});

colorDisplay.textContent = pickedColor;

for(var i = 0;i < squares.length; i++)
{
	// Add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click",function(){
		//take color of clicked square
		var clickedColor = this.style.backgroundColor;

		//compare color to picked color
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "CORRECT!";
			resetButton.textContent = "PLAY AGAIN?";
			h1.style.backgroundColor = pickedColor;
			changeColors(pickedColor);
			//alert("Corect");
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "TRY AGAIN";
			//alert("Incorect");
		}
	});
}

function changeColors(color) {
	
	//loop through all colors
	for(var i=0; i< colors.length; i++)
	{
		// Change each square color to given color
		squares[i].style.backgroundColor = color;
	}
}

function pickRandomColor() {
	var index = Math.floor(Math.random() * colors.length);
	return colors[index];
}

function generateRandomColor(num) {
	//make an array
	var arr = [];
	//add num random colors to array
	for(i=0; i<num; i++)
	{
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);	
		//rgb(r, g, b);
		arr[i] = "rgb(" + r + ", " + g + ", " + b + ")";
	}
	//return array
	return arr;
}