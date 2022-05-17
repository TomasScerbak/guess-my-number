# Guess My Number Game

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size (wider screens only)
- Guess the number where game should display whether guessed # is low or high
- Game should store highest score
- Player can reset the game

### Links

- Solution URL: [https://github.com/TomasScerbak/guess-my-number.git]
- Live Site URL: [https://tomasscerbak.github.io/guess-my-number/]

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- Desktop only
- JavaScript

### What I learned

I learned how to use ternary operator and also how to style and change HTML elements on event.

From the HTML persective, I learned to provide to user different img quality depending on device using WEBP format and @2x formats for RETINA displey.

To see how you can add code snippets, see below:

```js
     } else if (guess !== secretNumber) {
        if (score > 1) {
            message.innerHTML = guess > secretNumber ? 'Number to HIGH!' : 'Number to LOW!'
            score--;
            scoreElement.innerHTML = score;
        } else {
            message.innerHTML = `🤯💥 You lose the GAME!`;
        }
    }
```

### Continued development

building small vanilla JS project to master JavaScript and gain strong basics.

## Author

- Website - [Tomas Scerbak](https://tomasscerbak.github.io/tomas-scerbak-portfolio/)
- Frontend Mentor - [@Potato](https://www.frontendmentor.io/profile/TomasScerbak)
