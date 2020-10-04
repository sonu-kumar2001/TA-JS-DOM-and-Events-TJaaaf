let form = document.querySelector('form');
let input = document.querySelector('input');
let ul = document.querySelector('ul');
let userInfo = [];

function handler(event) {
    event.preventDefault();
    userInfo.push(form.elements.text.value);
    input.value = ''
    createUi();
}

form.addEventListener('submit',handler);

function createUi() {
    ul.innerHTML = '';
    userInfo.forEach(element => {
        let li = document.createElement('li');
        li.innerText = element;
        let span = document.createElement('span');
        span.innerHTML ='<i class="far fa-times-circle"></i>';
        li.append(span);
        ul.append(li);

        span.addEventListener('click', function(event) {
            event.currentTarget.parentElement.remove();
            let index = userInfo.indexOf(element);
            userInfo.splice(index);
        });
    });
}
