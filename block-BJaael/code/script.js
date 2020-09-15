let boxes = document.querySelector('.boxes');

for(i=0; i<500; i++) {
    let box = document.createElement('div');
    box.classList.add('box');
    box.innerText = `${Math.round(Math.random()*501)}`
    boxes.append(box);
}

let boxAll = document.querySelectorAll('.box');

function handler() {
    Array.from(boxAll).forEach(element => {
        element.innerText = `${Math.round(Math.random()*501)}`
        element.style.backgroundColor = `#${Math.round(Math.random()*501)}`
    });
};

boxes.addEventListener('mousemove',handler);
