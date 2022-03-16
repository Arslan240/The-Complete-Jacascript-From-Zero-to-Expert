'use strict';

// Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.querySelector('current--0');
const current1El = document.querySelector('current--1');



// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

// Rolling DICE Functionality
btnRoll.addEventListener('click', () => {
  // Generating dice number randomly.
  const dice = Math.trunc(Math.random() * 6) + 1; //creates number from 1 to 6.

  // Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // Check for rolled 1
  if(dice !== 1) {
    //add dice score enter
    currentScore += dice
  }
})