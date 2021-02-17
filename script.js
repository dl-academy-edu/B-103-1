var popupBtn = document.querySelector('.button-js');
var popupOverlay = document.querySelector('.overlay-js');
var closeBtn = popupOverlay.querySelector('.close-js');
var input = document.querySelector('input');

popupBtn.addEventListener('click', function(){
    popupOverlay.classList.add('open-popup');
    input.focus();
})

closeBtn.addEventListener('click', function(){
    popupOverlay.classList.remove('open-popup');
    popupBtn.focus();
})

window.addEventListener('keydown', function(event){
    if (event.code === 'Escape') {
        popupOverlay.classList.remove('open-popup');
    }
})