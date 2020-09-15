let box1 = document.querySelector('.first');
let box2 = document.querySelector('.second');

function handler() {
    let R = Math.round(Math.random()*255);
    let G = Math.round(Math.random()*255);
    let B = Math.round(Math.random()*255);

    box1.style.backgroundColor = `rgb(${R}, ${G}, ${B})`
}
function handlerTwo() {
    let R = Math.round(Math.random()*255);
    let G = Math.round(Math.random()*255);
    let B = Math.round(Math.random()*255);

    box2.style.backgroundColor = `rgb(${R}, ${G}, ${B})`
}

box1.addEventListener('click', handler);
box2.addEventListener('mousemove',handlerTwo);