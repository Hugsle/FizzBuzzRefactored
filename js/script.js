$(document).ready(function() {
var input = function(number) {
var number = prompt("Please enter a number");
		for (var i = 1; i < Number(number); i++) {
			if (number % 1 != 0) {
				var number = prompt("Please enter a non decimal number");
			} else if (i % 3 == 0 && i % 5 == 0) {
				$('body').append("<div> Fizz Buzz </div>");
			} else if (i % 3 == 0) {
				$('body').append("<div> Fizz</div>");
			} else if (i % 5 == 0) {
				$('body').append("<div> Buzz </div>");
			} else {
				$('body').append("<div>" + i + "</div>");
			}
		}
	}
input();
});



/*var input = function(number) {

var number = prompt("Please enter a number");
	
		for (var i = 1; i < Number(number); i++) {
			if (number % 1 != 0) {
				var number = prompt("Please enter a non decimal number");
			} else if (i % 3 == 0 && i % 5 == 0) {
				console.log("Fizz Buzz");
			} else if (i % 3 == 0) {
				console.log("Fizz");
			} else if (i % 5 == 0) {
				console.log("Buzz");
			} else {
				console.log(i);
			}
		}

	}
input();*/


