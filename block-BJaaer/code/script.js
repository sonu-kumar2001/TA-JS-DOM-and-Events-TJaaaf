let form = document.querySelector('form');

let userInfo = {};

function handler(event) {
    event.preventDefault();
    userInfo.name = form.elements.text.value;
    userInfo.email = form.elements.email.value;
    userInfo.favourite = form.elements.favourite.value;
    userInfo.color = form.elements.color.value;
    userInfo.rating = form.elements.rating.value;
    userInfo.genre = form.elements.drone.value;
    userInfo.terms = form.elements.terms.checked;
    createModal();
}

form.addEventListener('submit',handler);

function createModal() {
    form.style.display = 'none';

    let div = document.createElement('div');
    div.classList.add('container');
    let name = document.createElement('h1');
    name.innerText = `Hello ${userInfo.name}`;
    let close =document.createElement('a');
    close.classList.add('close');
    close.innerText = 'Close'
    let email = document.createElement('h2');
    email.innerText = `Email : ${userInfo.email}`;
    let youLove = document.createElement('h2');
    youLove.innerText = `You Love : ${userInfo.favourite}`;
    let color = document.createElement('h2');
    color.innerText = `Color : ${userInfo.color}`;
    let rating = document.createElement('h2');
    rating.innerText = `Rating : ${userInfo.rating}`;
    let bookGenre = document.createElement('h2');
    bookGenre.innerText = `Book Genre : ${userInfo.genre}`;
    let terms = document.createElement('h2');
    terms.innerText = userInfo.terms ? "👉You agree to terms and conditions"
    : "👉You don't agree to terms and conditions";

    div.append(close,name,email,youLove,color,rating,bookGenre,terms);
    document.body.append(div);

    close.addEventListener('click',function() {
        window.location.reload();
    })
}

