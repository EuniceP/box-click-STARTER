/* jshint browser: true, devel: true */
"use strict";
window.onload = function() {
	var boxes = document.getElementsByClassName('box');
	var cellColor;
	for (var i=0; i<boxes.length; i++) {
		cellColor = boxes[i].style.backgroundColor;		
		boxes[i].addEventListener('click', function(event) {
			// console.log(event);
			// console.log(window.screenx);
			this.style.backgroundColor = getRandomColor();
			this.style.borderRadius = "50px";
			
		});
		boxes[i].addEventListener('mouseover', function() {
			
			this.style.borderRadius = "25px";
			this.style.backgroundColor = getRandomColor();
			this.style.opacity = 1;
			this.style.transform = "rotate(90deg)";

			// this.style.backgroundColor = getRandomColor();
			
			// for (var j=0; j<45; j++) {
				
			// }
		});
		boxes[i].addEventListener('mouseout', function() {
			this.style.borderRadius = "0px";
			this.style.opacity = 0.2;
			//this.style.backgroundColor = cellColor;
			if (this.style.transform == "rotate(90deg)") {
				this.style.transform = "rotate(-90deg)";
			} else {
				this.style.transform = "rotate(90deg)";
			}
		});
		// boxes[i].addEventListener('click', function() {
		// 	if (this.style.backgroundColor === "white")
		// 		this.style.backgroundColor = "black";
		// 	else
		// 		this.style.backgroundColor = "white";
		// });
	}


	function getRandomColor() {
		var red = getRandom();
		var blue = getRandom();
		var green = getRandom();
		//return "rgb(" + red + ", " + green + ", " + blue + ")";
		 return `rgb(${red}, ${green}, ${blue})`;
	}
	function getRandom() {
		return Math.floor(Math.random() * 255);
	}
	

};
