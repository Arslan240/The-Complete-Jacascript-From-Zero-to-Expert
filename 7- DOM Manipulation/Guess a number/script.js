/*console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;



console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23; 
*/

// Random number, rand will return number btw 0 and 1. To make it upto 1 and 20 we multiply the number with 20
let secretNumber = Math.trunc(Math.random() * 20) + 1; //making sure number is atleast 1.
let score = 20;
let highscore = 0;

// Event Listener
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // 0 is a falsy value which is converted to boolean false.
  if(!guess) {
    document.querySelector('.message').textContent = 'No number';
  } else if (guess === secretNumber) {
    if (score > highscore){
      highscore = score;
      console.log('highscore', highscore);
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.message').textContent = 'Correct Number!'; 
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    rightOrWrong('Too high!');
    
  } else if(guess < secretNumber) {
    rightOrWrong('Too Low');
  }
});

document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('.message').textContent = 'Start Guessing'; 
  document.querySelector('.score').textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = null;
});

function rightOrWrong(message){
  if(score > 1) {
    document.querySelector('.message').textContent = message; 
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'You lost the game!'; 
    document.querySelector('.score').textContent = 0;
  }
}