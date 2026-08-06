let card = document.querySelector('.card');
let loginButton = document.querySelector('.loginButton');
let BtnRegister = document.querySelector('.BtnRegister');

loginButton.onclick = () => {
  card.classList.remove('cadastroActive');
  card.classList.add('loginActive');
};

loginButton.onclick = () => {
  card.classList.remove('loginActive');
  card.classList.add('cadastroActive');
};
