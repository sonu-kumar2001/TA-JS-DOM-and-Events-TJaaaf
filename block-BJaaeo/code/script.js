let button = document.querySelector('.buttons');
let output = document.querySelector('.output');
function handler(event) {
   if(event.target.dataset.number) {
    let out = event.target.dataset.number;
    output.textContent += out;
   } else if (event.target.dataset.operation) {
    let out = event.target.dataset.operation;
    output.textContent += out;
   }
}
button.addEventListener('click',handler);

let evaluate = document.querySelector('.eval');

evaluate.addEventListener('click',function(){
    output.textContent = eval(output.textContent);
});

let reset = document.querySelector('.clear');

reset.addEventListener('click',function(){
    output.innerText = '';
})