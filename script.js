const openModal = document.querySelector('.reviews-cooperation-container-contact')
const overlay = document.querySelector('.overlay')
const navBurgermenuForm = document.querySelector('.nav-burgermenu-form')
const navBurgermenu = document.querySelector('.nav-burgermenu-overlay')

navBurgermenuForm.addEventListener('click',function(){
    navBurgermenu.style.display = 'flex'
})
document.addEventListener('keydown',function(e){
    if(e.key == 'Escape'){
        navBurgermenu.style.display = 'none'
    }
})

openModal.addEventListener('click', function(){
    overlay.style.display = 'flex';
})
overlay.addEventListener('click',function(e){
    alert('Closed')
    overlay.style.display = 'none';
})
