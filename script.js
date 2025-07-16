const open = document.getElementById('start');
const close = document.getElementById('end');
const container = document.querySelector('.circle');
const container2 = document.querySelector('.page');

open.addEventListener('click', () => {
    console.log('clicked');
    container.classList.add('rotate');
    container2.classList.add('rotate2');
})

close.addEventListener('click', () => {
    container.classList.remove('rotate');
    container2.classList.remove('rotate2');
})