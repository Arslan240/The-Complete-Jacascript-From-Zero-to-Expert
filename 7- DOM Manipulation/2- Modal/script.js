const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');



// because the code was repeating
const openModal = function (){
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

const closeModal = function (){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

btnsOpenModal.forEach((btn, index) => {
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Keyboard events are usually global events, they don't happen on one element but they happen on the whole document. So we add an event listener to the whole document.
document.addEventListener('keydown', (e) => {
  // when modal is not hidden, it's visible
  if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
