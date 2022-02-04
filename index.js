// for dice 1 on the left side

var randomNumber1 = Math.floor(Math.random() * 6) +1; //  1 -6
var randomDice1 = "dice" + randomNumber1 + ".png";// dice + 2 + .png = dice2.png
var randomImages1 = "images/"  + randomDice1; //images/randomDice1 = images/dice2.png


var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImages1);


// for dice 2 on the right side
var randomNumber2 = Math.floor(Math.random() * 6) +1; 
var randomDice2 = "dice" + randomNumber2 + ".png";
var randomImages2 = "images/" + randomDice2;

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImages2);

// Conditions
// if player 1 wins
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
}
// if player 2 wins
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
}else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").textContent = "🤷‍♂️ Draw!";  //Draw
}