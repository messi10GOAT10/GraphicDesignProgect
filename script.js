const openModal = document.querySelector('.reviews-cooperation-container-contact')
const overlay = document.querySelector('.overlay')
openModal.addEventListener('click', function(){
    overlay.style.display = 'flex';
})
overlay.addEventListener('click',function(){
    overlay.style.display = 'none';
})