let btnBack = document.querySelector('.btn-back');
let btnNext = document.querySelector('.btn-next');
let cardList = document.querySelectorAll('.card');
let counter = 0;

btnNext.onclick = function nextCard() {
  document.querySelector('.card.active').classList.remove('active');

  if (counter < cardList.length - 1) {
    counter++;
  } else {
    counter = 0;
  }

  cardList[counter].classList.add('active');
};

btnBack.onclick = function backCard() {
  document.querySelector('.card.active').classList.remove('active');

  if (counter > 0) {
    counter--;
  } else {
    counter = 0;
  }

  cardList[counter].classList.add('active');
};
