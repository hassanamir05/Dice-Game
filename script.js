const num1 = Math.floor(Math.random() * 6) + 1;
const num2 = Math.floor(Math.random() * 6) + 1;
const firstDiceImage = 'images/dice' + num1 + ".png";
const secondDiceImage = 'images/dice' + num2 + ".png";
document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);
document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage);
if (num1 > num2) {
    document.querySelector('h1').innerHTML = "Player 1 is the Winner!";
} else if (num1 < num2) {
    document.querySelector('h1').innerHTML = "Player 2 is the Winner!";
} else {
    document.querySelector('h1').innerHTML = "The Match is Draw!";
}