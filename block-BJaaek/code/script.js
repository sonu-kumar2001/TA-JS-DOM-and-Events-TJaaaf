let box1 = document.querySelector('.first');
let box2 = document.querySelector('.second');

function handler() {
    box1.style.backgroundColor = `#${Math.round(Math.random()*255)}`
    console.log(box1.style.backgroundColor);
}
function handlerTwo() {
    box2.style.backgroundColor = `#${Math.round(Math.random()*255)}`
}

box1.addEventListener('click', handler);
box2.addEventListener('mousemove',handlerTwo);