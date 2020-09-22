let form = document.querySelector("form");
let formControl = document.querySelectorAll('.form-control');
let input = document.querySelectorAll('input');
let userInfo = {};

function handleSubmit(event) {
  event.preventDefault();
  userInfo.userName = form.elements.username.value;
  userInfo.name = form.elements.name.value;
  userInfo.email = form.elements.email.value;
  userInfo.phone = form.elements.phone.value;
  userInfo.password = form.elements.password.value;
  userInfo.passwordCheck = form.elements['password-check'].value;
  
  checkingError(event.target.elements);
  forEachElement();
}

form.addEventListener("submit", handleSubmit);

function checkingError(e) {
  if(userInfo.userName == '' || userInfo.userName.length < 4) {
    document.querySelector('.username').textContent = `username can't be less than 4 characters `;
    e.username.parentElement.classList.add('error');
  } else {
    e.username.parentElement.classList.add('success');
  } 

  if(userInfo.name == ''|| [...userInfo.name].filter(element => !isNaN(element)).length != 0) {
    document.querySelector('.name').textContent = `You can't use number in the name field `;
    e.name.parentElement.classList.add('error');
  }else {
    e.name.parentElement.classList.add('success');
  } 

  if(userInfo.email == ''||userInfo.email.length < 6) {
      document.querySelector('.email').textContent = `Not a valid email `;
      e.email.parentElement.classList.add('error');
    } else {
      e.email.parentElement.classList.add('success');
    }

    if(userInfo.phone == ''||[...userInfo.phone].filter(element => isNaN(element)).length !=0 || userInfo.length<7) {
      document.querySelector('.phone').textContent = `Phone number can only contain numbers `;
      e.phone.parentElement.classList.add('error');
    }else {
      e.phone.parentElement.classList.add('success');
    } 

    if(userInfo.password == ''||[...userInfo.password].filter(element => isNaN(element)).length !=0 || userInfo.password.includes('@')) {
      document.querySelector('.password').textContent = `Password must contain at least a symbol and a number should be less than 7 character `;
      e.password.parentElement.classList.add('error');
    }else {
      e.password.parentElement.classList.add('success');
    }

    if(userInfo.passwordCheck == ''||userInfo.password !== userInfo.passwordCheck) {
      document.querySelector('.password1').textContent = `Password and Confirm password is not same `;
      e['password-check'].parentElement.classList.add('error');
    }else {
      e['password-check'].parentElement.classList.add('success');
    }

    
   
}

// function empty() {
//   [...formControl].every(element => {
//     if(element.classList.contains('success')) {
//       alert('user added succesfully');
//     }
//   });
//   [...input].forEach(element => {
//     if(element.value == '') {
//       element.nextElementSibling.textContent = `${element.name} can not be blank`;
//       element.classList.add('error');
//   }else {
//     element.classList.add('success');
//   } });
// }

function forEachElement() {
 let isSuccess = [...formControl].every(element => {
   element.classList.contains('success');
  });
        if(!isSuccess) {
          [...input].forEach(element => {
            if(element.value == '') {
              element.nextElementSibling.textContent = `${element.name} can not be blank`;
              element.classList.add('error');
          }else {
            element.classList.add('success');
          }
          
          });
} else {
  alert('user added succesfully');
}

}


