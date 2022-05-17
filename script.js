'use strict';

// grabbing DOM elements
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
let scoreElement = document.querySelector('.score');
let highScore = document.querySelector('.label-highscore');
const body = document.querySelector('body');

// Generating random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber)

// Declaring score variable to count down each attempt
let score = 20;

// Adding even listener to check button and display message according user input and changing background color when WIN.
btnCheck.addEventListener('click', function() {

    const guess = Number(guessInput.value);

    if(!guess) {
        message.innerHTML = `🤦‍♀️ No Number`;
    } else if (guess === secretNumber) {
        message.innerHTML = `👍👏 Correct Number!`;
        number.innerHTML = secretNumber;
        body.style.backgroundColor = '#60b347';
        number.style.width = '30rem';
    } else if (guess < secretNumber) {
        if (score > 0) {
            message.innerHTML = `Number to LOW!`;
            score--;
            scoreElement.innerHTML = score;
        } else {
            message.innerHTML = `🤯💥 You lose the GAME!`;
        }
    } else if (guess > secretNumber) {
        if(score > 0) {
            message.innerHTML = `Number to HIGH!`;
            score--;
            scoreElement.innerHTML = score;
        } else {
            message.innerHTML = `🤯💥 You lose the GAME!`;
        }
    } 
})

// Restoring default values when clicked on AGAIN button
btnAgain.addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    message.innerHTML = 'Start guessing...';
    number.innerHTML = '?';
    body.style.backgroundColor = '#222';
    number.style.width = '15rem';
    guessInput.value = '';
    scoreElement.innerHTML = score;
})
