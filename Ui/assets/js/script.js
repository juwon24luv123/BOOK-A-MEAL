// get form element

var modal = document.getElementById('modal');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//  listen for open click

modalBtn.addEventListener('click', openModal);
//  listen for close click
closeBtn.addEventListener('click', closeModal);

// function to open modal
function openModal(){
    modal.style.display = 'block';
}


function closeModal(){
    modal.style.display = 'none';
}
closeModal();