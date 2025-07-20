const open = document.getElementById('start');
const close = document.getElementById('end');
const container = document.querySelector('.circle');
const container2 = document.querySelector('.page');
const container3 = document.querySelector('.menu');

open.addEventListener('click', () => {
    console.log('clicked');
    container.classList.add('rotate');
    container2.classList.add('rotate2');
    container3.style.position = "absolute";
})

close.addEventListener('click', () => {
    container.classList.remove('rotate');
    container2.classList.remove('rotate2');
    container3.style.position = "fixed";
})