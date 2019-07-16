var mcardsArray = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"

},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"

},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"

}
];

var cardsInPlay = [];

function checkForMatch(); {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}

function flipCard(cardId); {
	var flipCard === 0;
	var flipCard === 2;
console.log("User flipped" + cards[cardId].rank)
cardsInPlay.push(cards[cardId]);
if (cardsInPlay.length === 2 && cardsInPlay [] === cardsInPlay []) {
alert("You Found a Match");}
else if (cardsInPlay.length === 2 && cardsInPlay [] !== cardsInPlay [])
{alert("Sorry Try Again");
}	
}