// CREATE CARDS:

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

// CREATE GAME BOARD:

// set var 'gameBoard' to the div with the ID 'game-board' from index.html:
var gameBoard = document.getElementById('game-board');
// create an array of card names:
var cards = ['queen', 'queen', 'king', 'king'];
// create an empty array for cards in play
var cardsInPlay = [];

// create function for game board:
var createBoard = function() {
	// loop 4 times, one for each card
 for (i = 0; i < 4; i++) {
 	// set var cardElement to create a div for the card
	var cardElement = document.createElement('div');
	// give the card the class name 'card'
	cardElement.className = 'card';
	// set var 'board' to be the 'board' div from the HTML
	var board = document.getElementsByClassName('board')[0]; // why the [0]?
	// append the new div (cardElement) with the class 'card' to the board
	// why appendChild? isn't creating the 'div' cardElement enough?
	board.appendChild(cardElement);
	// set up card with 'i' value from the 'cards' array
 	// what does data-card do exactly?
 	cardElement.setAttribute('data-card', cards[i]);
 	// add 'click' event listener and run 'isTwoCards' function when clicked
 	cardElement.addEventListener('click', isTwoCards);
}
};

//CREATE GAME LOGIC

var isMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.")
	}
};

/*  This logic doesn't work:

var isMatch = function() {
	if (cardOne === cardTwo) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}
if (cardOne === cardThree) {
	alert("You found a match!");
} else {
	alert("Sorry, try agian.");
}
if (cardOne === cardFour) {
	alert ("You found a match!");
} else {
	alert("Sorry, try again.");
}
if (cardTwo === cardThree) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}
if (cardTwo === cardFour) {
	alert("You found a match!")
} else {
	alert("Sorry, try again.")
}
if (cardThree === cardFour) {
	alert("You found a match!")
} else {
	alert("Sorry, try again.")
}
};
*/


// CREATE isTwoCards FUNCTION
var isTwoCards = function() {
	// when clicked, get attribute of 'data-card' and push to 'cardsInPlay' array.
	cardsInPlay.push(this.getAttribute('data-card'));
	// set 'this' to display card images, based on card names (set to variables 'queen' and 'king')
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='King_of_spades.png'>";
	} else if (this.getAttribute('data-card') === 'queen') {
		this.innerHTML = "<img src='Queen_of_spades.png'>"
	}
	// if two cards clicked (in play), run isMatch function with variables from the 'cardsInPlay' array
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		resetBoard();
		// reset board by assigning empty array to cardsInPlay - this doesn't work
		cardsInPlay = [];
	}
};

/* Attempted reset functions:

var resetBoard = function() {
		document.getElementsByClassName('card');
		.removeAttribute('card');
};


var resetBoard = function() {
var resetDiv = document.getElementsById('game-board');
resetDiv.parentNode.removeChild(resetDiv);
}

*/

createBoard();











