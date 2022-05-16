'use strict';

// grabbing DOM elements
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');
let scoreElement = document.querySelector('.score');

// Generating random number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

// Declaring score variable to count down each attempt
let score = 20;

// Adding even listener to check button and display message according user input
btnCheck.addEventListener('click', function() {

    const guess = Number(guessInput.value);

    if(!guess) {
        message.innerHTML = `🤦‍♀️ No Number`;
    } else if (guess === secretNumber) {
        message.innerHTML = `👍👏 Correct Number!`;
    } else if (guess < secretNumber) {
        message.innerHTML = `Number to LOW!`
        score--;
        scoreElement.innerHTML = score;
    } else if (guess > secretNumber) {
        message.innerHTML = `Number to HIGH!`
        score--;
        scoreElement.innerHTML = score;
    }
})


