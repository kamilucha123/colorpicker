// targeting DOM elements
var colors = document.getElementsByTagName('input');
var color1 = colors[0];
var color2 = colors[1];
var body = document.getElementsByTagName('body')[0];
var h3 = document.getElementsByTagName('h3')[0];
var btn = document.getElementsByTagName('button')[0];

h3.innerHTML = "<p>From: " + color1.value + "</p><p>To: " + color2.value+"</p>";
// update just the background colors
function bgStyle(col1, col2){
	body.style.background = 'linear-gradient(to right, ' + col1 + ', ' + col2 + ')';
}

// update the backgroung colors and text info
function setBackground(colorone, colortwo, tag){
	tag.addEventListener("input", function(){
		h3.innerHTML = "<p>From: " + colorone.value + "</p><p>To: " + colortwo.value+"</p>";
		bgStyle(colorone.value, colortwo.value);
	})
	
}

// input for array.reduce()

function cat(a, b){
	return a + b;
}

// getting random hex colors for both of pickers
function luckyDip(){
	var hex = '0123456789abcdef';
	var rand1 = ['#'];
	var rand2 = ['#'];
	
	for (var i = 0; i < 6; i++){
		rand1.push(hex[Math.round(Math.random() * 15)]);
		rand2.push(hex[Math.round(Math.random() * 15)]);
	}

	bgStyle(rand1.reduce(cat), rand2.reduce(cat));
	h3.innerHTML = "<p>From: " + rand1.reduce(cat) + "</p><p>To: " + rand2.reduce(cat) +"</p>";
}

// main part of the program
setBackground(color1, color2, color1);
setBackground(color1, color2, color2);
btn.addEventListener('click', luckyDip);
