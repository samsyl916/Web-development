var randomNumebr1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg1 = "images/dice" + randomNumebr1 + ".png";

document.querySelector(".img1").setAttribute("src", randomDiceImg1);

var randomNumebr2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg2 = "images/dice" + randomNumebr2 + ".png";

document.querySelector(".img2").setAttribute("src", randomDiceImg2);

if (randomNumebr1 === randomNumebr2) {
  document.querySelector("h1").textContent = "Draw!";
} else if (randomNumebr1 > randomNumebr2) {
  document.querySelector("h1").textContent = "Player 1 wins!";
} else {
  document.querySelector("h1").textContent = "Player 2 wins!";
}
