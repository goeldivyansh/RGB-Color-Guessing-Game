var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");
var green = document.querySelector(".green");
var red = document.querySelector(".red");

init();
//Reset(New Colors) Button Event listener
resetButton.addEventListener("click",reset);

function init() 
{
	// mode button event listeners
	setUpModeButtons();
	// square event listeners
	setUpSquares();
	reset();
}

function setUpModeButtons() {
	for(var i=0;i<modeBtns.length;i++)
	{
		modeBtns[i].addEventListener("click", function(){
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "EASY" ? numSquares = 3 : numSquares = 6 ;
			reset();
		});
	}
}

function setUpSquares() {
	for(var i = 0;i < squares.length; i++)
	{
		//add click listeners to squares
		squares[i].addEventListener("click",function(){
			//take color of clicked square
			var clickedColor = this.style.backgroundColor;

			//compare color to picked color
			if(clickedColor === pickedColor) {
				messageDisplay.classList.remove("red");
				messageDisplay.classList.add("green");
				messageDisplay.textContent = "CORRECT!";
				resetButton.textContent = "PLAY AGAIN?";
				h1.style.backgroundColor = pickedColor;
				changeColors(pickedColor);
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.classList.remove("green");
				messageDisplay.classList.add("red");
				messageDisplay.textContent = "TRY AGAIN";
			}
		});
	}
}

function reset() 
{
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color
	pickedColor = pickRandomColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of square
	resetButton.textContent = "NEW COLORS";
	messageDisplay.textContent = "";
	for(var i = 0;i < squares.length; i++){
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];		
		}
		else {
			squares[i].style.display = "none";
		}
	}
	//sets default background color
	h1.style.backgroundColor = "#3ca8d6";
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

function generateRandomColors(num) {
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