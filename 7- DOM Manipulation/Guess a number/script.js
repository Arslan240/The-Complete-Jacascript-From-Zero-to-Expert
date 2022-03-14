/*console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;



console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23; 
*/

// Event Listener
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // 0 is a falsy value which is converted to boolean false.
  if(!guess) {
    document.querySelector('.message').textContent = 'No number';
  }
});