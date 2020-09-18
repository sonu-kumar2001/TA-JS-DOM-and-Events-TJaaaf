let user = document.querySelector('.user-icon');
let computer = document.querySelector('.computer-icon');

let handArr = ['fa-hand-rock','fa-hand-paper','fa-hand-scissors','fa-hand-lizard','fa-hand-spock'];

function createUi() {
    handArr.forEach(element => {
        let i1 = document.createElement('i');
        let i2 = document.createElement('i');
        i1.className = `far ${element}`;
        i2.className = `far ${element}`;
        user.append(i1);
        computer.append(i2);
    });
}
createUi();
    let h3 = document.querySelector('.result');
    let winningUser = document.querySelector('#winning-user');
    let winningComputer = document.querySelector('#winning-computer');
function handler(event) {
    if(event.target.classList.contains('far')) {
        let userResult = event.target.classList[1];
        let computerResult = handArr[Math.floor(Math.random()*5)];
        if(userResult === computerResult) {
            h3.innerText = 'Tie'
        } else if((userResult === 'fa-hand-rock' && computerResult === 'fa-hand-lizard') || (userResult === 'fa-hand-scissors' && computerResult === 'fa-hand-paper') || (userResult === 'fa-hand-paper' && computerResult === 'fa-hand-rock') || (userResult === 'fa-hand-lizard' && computerResult === 'fa-hand-spock') || (userResult === 'fa-hand-spock' && computerResult === 'fa-hand-scissors') || (userResult === 'fa-hand-scissors' && computerResult === 'fa-hand-lizard')|| (userResult === 'fa-hand-lizard' && computerResult === 'fa-hand-paper') || (userResult === 'fa-hand-paper' && computerResult === 'fa-hand-spock')|| (userResult === 'fa-hand-spock' && computerResult === 'fa-hand-rock') || (userResult === 'fa-hand-rock' && computerResult === 'fa-hand-scissors')) {
            h3.innerText = 'YOU WIN'
            winningUser.innerText = Number(winningUser.innerText) + 1;
        } else {
            h3.innerText = 'YOU LOST'
            winningComputer.innerText = Number(winningComputer.innerText) + 1;
        }
    }

}
user.addEventListener('click',handler);

let clear = document.querySelector('.redo');

function clearHandler() {
    h3.innerText = '';
    winningComputer.innerText = 0;
    winningUser.innerText = 0;
}
clear.addEventListener('click',clearHandler);
