'use strict';
const modalOnButton = document.querySelector('.modal-on');
const modalCloseElements = document.querySelectorAll('.closeModal');
const appearingItems = document.querySelectorAll('.invisible');


let modalOn = function () {
    for (let i = 0; i < appearingItems.length; i += 1){
        appearingItems[i].classList.remove("invisible");
        appearingItems[i].classList.remove("zeroOpacity");
    }
    appearingItems[1].focus();
}

let addOpacity = function() {
    for (let i = 0; i < appearingItems.length; i += 1){
        appearingItems[i].classList.add("zeroOpacity")
    } 
}

let addInvisibility = function() {
    for (let i = 0; i < appearingItems.length; i += 1){
        appearingItems[i].classList.add("invisible")
    } 
}

let modalOff = function () {
    addOpacity();
    setTimeout(addInvisibility, 300);
}

modalOnButton.addEventListener('click', modalOn);

for (let i = 0; i < modalCloseElements.length; i += 1) {
    modalCloseElements[i].addEventListener('click', modalOff);
}