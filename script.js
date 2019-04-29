var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

setGradient();
// Display the initial CSS linear gradient property on page load:
// 1. show initial color code and remove after first input
// 2. set initial color as input color after loading the page
// -> use 2.

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// Add a random button which generates two random numbers for the colour inputs
// -> Create a button that triggers to generate two rgb(255, 0, 0) or #FFFFFF
// function that generate a ramdom color code
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
} 

function setRandomColor() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
  // $("#colorpad1").css("background-color", getRandomColor());
  // $("#colorpad2").css("background-color", getRandomColor());
  	setGradient();
}
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>




