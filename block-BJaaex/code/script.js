let box = document.querySelector('.box');
let countMoves = document.querySelector('.count-move');

let iconArray = [
    "drum-steelpan", 
    "headphones-alt", 
    "microphone-alt", 
    "guitar", 
    "file-audio", 
    "record-vinyl", 
    "play", 
    "music"
]
let counter = 0;
let selectedElm = [];

function randomMix(iconArray = []) {
    let data = iconArray.concat(iconArray);
    data.sort(() => Math.random() - 0.5);

    return data;
}

function createUi(element) {
    let div = document.createElement('div');
    div.classList.add('inner-box',element);
    div.setAttribute('data-type',element);
    let i = document.createElement('i');
    i.classList.add(`fas`,`fa-${element}`,`hidden`);
    div.append(i);
    return div;
}

randomMix(iconArray).forEach((element) => box.append(createUi(element)));


function handler(event) {
    let target = event.target;
    if(target.classList.contains('inner-box') || target.classList.contains('fas')) {
        counter = counter + 1;
        if(target.classList.contains('fas')) {
            target.classList.remove('hidden');
            target.parentElement.classList.add('selected');
            selectedElm.push(target.parentElement);
        } else {
            target.children[0].classList.remove('hidden');
            target.classList.add('selected');
            selectedElm.push(target);
        }
        matchOrNot();
    }
}

function matchSelected(ele) {
    let types = ele.map((element) => element.dataset.type);
    if(types[0] === types[1]) {
        ele.forEach((ele) => ele.classList.add('success'));
    } else {
        ele.forEach((ele) => ele.classList.add('error'));
        setTimeout(()=> {
            ele.forEach((ele) => ele.children[0].classList.add('hidden'));
            ele.forEach((ele) => ele.classList.remove('error','selected'));
        },1000)
    }
    enabled();
}

function disabled() {
    document.querySelectorAll('.hidden').forEach((elm) => elm.parentElement.classList.add('disabled'));
}
function enabled() {
    document.querySelectorAll('.hidden').forEach((elm) => elm.parentElement.classList.remove('disabled'));
}
function matchOrNot() {
    if(counter === 2) {
        disabled();
        matchSelected(selectedElm);
        counter = 0;
        selectedElm = [];
    }
}

box.addEventListener('click',handler);
