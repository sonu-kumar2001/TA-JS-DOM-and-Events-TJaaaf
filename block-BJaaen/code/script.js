let user = document.querySelector('.user-icon');
let computer = document.querySelector('.computer-icon');

let handArr = ['rock','paper','scissors','lizard','spock'];

function createUi() {
    handArr.forEach(element => {
        let i1 = document.createElement('i');
        i1.setAttribute('data-sign',element);
        let i2 = document.createElement('i');
        i2.setAttribute('data-sign',element);
        i1.className = `far fa-hand-${element}`;
        i2.className = `far fa-hand-${element}`;
        user.append(i1);
        computer.append(i2);
    });
}
createUi();
    let h3 = document.querySelector('.result');
    let winningUser = document.querySelector('#winning-user');
    let winningComputer = document.querySelector('#winning-computer');
    let userSelection = document.querySelector('.user-selection');
    let computerSelection = document.querySelector('.computer-selection');
function handler(event) {
    if(event.target.classList.contains('far')) {
        let userResult = event.target.dataset.sign;
        userSelection.innerText = userResult.toUpperCase();
        let computerResult = handArr[Math.floor(Math.random()*5)];
        computerSelection.innerText = computerResult.toUpperCase();
        if(userResult === computerResult) {
            h3.innerText = 'Tie'
        } else if((userResult === 'rock' && computerResult === 'lizard') || (userResult === 'scissors' && computerResult === 'paper') || (userResult === 'paper' && computerResult === 'rock') || (userResult === 'lizard' && computerResult === 'spock') || (userResult === 'spock' && computerResult === 'scissors') || (userResult === 'scissors' && computerResult === 'lizard')|| (userResult === 'lizard' && computerResult === 'paper') || (userResult === 'paper' && computerResult === 'spock')|| (userResult === 'spock' && computerResult === 'rock') || (userResult === 'rock' && computerResult === 'scissors')) {
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
    userSelection.innerText = '';
    computerSelection.innerText = '';
}
clear.addEventListener('click',clearHandler);
