// get form element
/* eslint-disable */

const modal = document.getElementById('modal');
const modalBtn = document.getElementById('modalBtn');
const closeBtn = document.getElementsByClassName('closeBtn')[0];

//  listen for open click

modalBtn.addEventListener('click', openModal);
//  listen for close click
closeBtn.addEventListener('click', closeModal);

// function to open modal
function openModal() {
  modal.style.display = 'block';
}


function closeModal() {
  modal.style.display = 'none';
}
closeModal();
