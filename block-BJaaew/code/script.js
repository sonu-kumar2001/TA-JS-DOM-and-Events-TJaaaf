let container = document.querySelector('.container');
let ul = document.querySelector('ul');
let input = document.querySelector('input');
let allPeople = got.houses.map(e => e.people).flat();
let filter = [...allPeople];
function createUi(data) {
    container.innerHTML = '';
        data.forEach(people => {
            let div1 = document.createElement('div');
            div1.classList.add('card');
            let div2 = document.createElement('div');
            div2.classList.add('flex');
            let img = document.createElement('img');
            img.src = people.image;
            let h2 = document.createElement('h2');
            h2.innerText = people.name;
            let p = document.createElement('p');
            p.innerText = people.description;
            let a = document.createElement('a');
            a.innerText = 'Learn More'
            div2.append(img, h2);
            div1.append(div2, p, a);
            container.append(div1);
        });
}
createUi(allPeople);

function buttonUi(){
    let li1 = document.createElement('li');
    li1.innerText = 'All';
    ul.append(li1);
    got.houses.forEach((item) => {  
     let li = document.createElement('li');
     li.innerText = item.name;
     ul.append(li);
    });
}
buttonUi();

function handler(event) {
    if(event.target.tagName == 'LI') {
        if(event.target.innerText == 'All') {
            createUi(allPeople);
        } else {
             got.houses.forEach(element => {
                if(element.name == event.target.innerText) filter = element.people; 
            });
            createUi(filter);
        }
    }
}

ul.addEventListener('click',handler);



function inputHAndler(event) {
   let search = filter.filter(element => element.name.toLowerCase().includes(event.target.value.toLowerCase()));
   createUi(search);
}

input.addEventListener('input',inputHAndler);

