console.log(document.querySelector('img.active'));
//Console é um objeto pronto do JS, e todo objeto possui métodos e que por sua vez, são funções (Ações)

let btnBack = document.querySelector('.btn-back');
let btnNext = document.querySelector('.btn-next');
let listaImagens = document.querySelectorAll('img');
let counter = 0;

btnNext.onclick = function nextSlide() {
  document.querySelector('img.active').classList.remove('active');

  if (counter < listaImagens.length - 1) {
    counter++;
  } else {
    counter = listaImagens.length - 1;
  }

  listaImagens[counter].classList.add('active');
};

btnBack.onclick = function backSlide() {
  document.querySelector('img.active').classList.remove('active');

  if (counter > 0) {
    counter--;
  } else {
    counter = 0;
  }

  listaImagens[counter].classList.add('active');
};
