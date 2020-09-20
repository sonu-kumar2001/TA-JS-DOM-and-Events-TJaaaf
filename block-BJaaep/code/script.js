let li = document.querySelectorAll('.events');
let arr = [...li];

function withoutDelegation(e,i) {
    e.style.transform = `rotateY(360deg)`
    e.innerText = `${i+1}`;
    setTimeout(function () {
        e.style.transform = `rotateY(180deg)`
        e.innerText = '';
    }, 5000);

}

arr.forEach((event,index) => {
    event.addEventListener('click', function() {
        withoutDelegation(event,index);
    })
})
//with event deligation

let ul = document.querySelector('.box-event');
let withEvent = document.querySelectorAll('.with-event');

function handler(event) {
    if(event.target.dataset.number) {
        withoutDelegation(event.target,Number(event.target.dataset.number));
    }
} 

ul.addEventListener('click',handler);