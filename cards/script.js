let btnBack = document.querySelector('.btn-back');
let btnNext = document.querySelector('.btn-next');
let cardList = document.querySelectorAll('.card');
let cards = document.querySelector('.cards');
const cardsPerView = 3;
const maxCounter = cardList.length - cardsPerView;
let counter = 0;

btnNext.onclick = function nextCard() {
  document.querySelector('.card.active').classList.remove('active');

  if (counter < maxCounter) {
    counter++;

    cards.style.transform = `translateX(-${counter * 33.33}%)`;
  } else {
    counter = 0;

    cards.style.transform = `translateX(0%)`;
  }

  cardList[counter].classList.add('active');
};

btnBack.onclick = function backCard() {
  document.querySelector('.card.active').classList.remove('active');

  if (counter > 0) {
    counter--;

    cards.style.transform = `translateX(-${counter * 33.33}%)`;
  } else {
    counter = 0;

    cards.style.transform = `translateX(0%)`;
  }

  cardList[counter].classList.add('active');
};
