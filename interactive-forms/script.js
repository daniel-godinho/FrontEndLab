let card = document.querySelector('.card');
let loginButton = document.querySelector('.loginButton');
let btnRegister = document.querySelector('.btnRegister');

loginButton.onclick = () => {
  card.classList.remove('cadastroActive');
  card.classList.add('loginActive');
};

btnRegister.onclick = () => {
  card.classList.remove('loginActive');
  card.classList.add('cadastroActive');
};
