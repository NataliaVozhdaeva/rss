const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');
const slider = document.querySelector('.js-slider');

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let prevArr = [];
let currentArr = [];
let nextArr = [];

function geterateArr(arr1, arr2) {
  let cartCount = 3;

  if (window.innerWidth < 1181 && window.innerWidth > 730) {
    cartCount = 2;
  }

  if (window.innerWidth < 731 && window.innerWidth > 300) {
    cartCount = 1;
  }

  for (let i = 0; i < cartCount; i++) {
    let el = getRandom(0, 8);
    if (!arr1.includes(el) && !arr2.includes(el)) {
      arr1.push(el);
    } else {
      i--;
    }
  }

  return arr1;
}

function init() {
  geterateArr(nextArr, currentArr);

  currentArr = nextArr;
  nextArr = [];

  geterateArr(nextArr, currentArr);

  pastArr = currentArr;
  currentArr = nextArr;
  nextArr = [];

  geterateArr(nextArr, currentArr);
}

function changeToBackward() {
  nextArr = currentArr;
  currentArr = pastArr;
  pastArr = [];
  pastArr = geterateArr(pastArr, currentArr);
}

function changeToForward() {
  pastArr = currentArr;
  currentArr = nextArr;
  nextArr = [];
  nextArr = geterateArr(nextArr, currentArr);
}

const moveLeft = () => {
  slider.classList.add('transition-left');
  btnPrev.removeEventListener('click', moveLeft);
  btnNext.removeEventListener('click', moveRight);
};

const moveRight = () => {
  slider.classList.add('transition-right');
  btnNext.removeEventListener('click', moveRight);
  btnPrev.removeEventListener('click', moveLeft);
};

async function initSlider() {
  const petsArr = await getData();

  init();

  function createCardsTemplate(cardClassName) {
    let cartCount = 3;

    if (window.innerWidth < 1181 && window.innerWidth > 730) {
      cartCount = 2;
    }

    if (window.innerWidth < 731 && window.innerWidth > 300) {
      cartCount = 1;
    }

    for (let i = 0; i < cartCount; i++) {
      let card = document.createElement('div');
      card.classList = cardClassName + ' pets-item js-open-modal';
      slider.append(card);
      let cartImg = document.createElement('img');
      cartImg.classList = 'pet-img';
      card.append(cartImg);
      let petText = document.createElement('p');
      petText.classList = 'pet-text text';
      card.append(petText);
      let cardBtn = document.createElement('button');
      cardBtn.classList = 'pet-btn btn';
      cardBtn.textContent = 'Learn more';
      card.append(cardBtn);
    }
  }

  const prevPetsCards = document.getElementsByClassName('item-prev');
  const curPetsCards = document.getElementsByClassName('item-cur');
  const nextPetsCards = document.getElementsByClassName('item-next');

  function createCards(cards, arr) {
    Array.from(cards).forEach((el, i) => {
      el.setAttribute('data-modal', petsArr[arr[i]].name);

      const img = el.querySelector('.pet-img');
      img.setAttribute('src', petsArr[arr[i]].img);
      img.setAttribute('alt', petsArr[arr[i]].breed + ' ' + petsArr[arr[i]].name);

      const name = el.querySelector('.pet-text');
      name.textContent = petsArr[arr[i]].name;
    });
  }
  createCardsTemplate('item-prev');
  createCardsTemplate('item-cur');
  createCardsTemplate('item-next');

  createCards(prevPetsCards, pastArr);
  createCards(curPetsCards, currentArr);
  createCards(nextPetsCards, nextArr);

  slider.addEventListener('animationend', (animationEvent) => {
    if (animationEvent.animationName === 'move-left') {
      slider.classList.remove('transition-left');
      changeToBackward();
      createCards(prevPetsCards, pastArr);
      createCards(curPetsCards, currentArr);
      createCards(nextPetsCards, nextArr);
    } else {
      slider.classList.remove('transition-right');
      changeToForward();
      createCards(prevPetsCards, pastArr);
      createCards(curPetsCards, currentArr);
      createCards(nextPetsCards, nextArr);
    }

    btnNext.addEventListener('click', moveRight);
    btnPrev.addEventListener('click', moveLeft);
  });

  const modalButtons = document.querySelectorAll('.js-open-modal');
  const overlay = document.querySelector('#overlay-modal');
  const closeButtons = document.querySelectorAll('.js-modal-close');
  const body = document.querySelector('html');

  modalButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      let modalId = this.getAttribute('data-modal');
      let modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

      modalElem.classList.add('active');
      overlay.classList.add('active');
      body.classList.add('stop-scroll');
    });
  });

  closeButtons.forEach(function (item) {
    item.addEventListener('click', function () {
      let parentModal = this.closest('.modal');
      parentModal.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('stop-scroll');
    });
  });

  overlay.addEventListener('click', () => {
    if (document.querySelector('.modal.active')) {
      document.querySelector('.modal.active').classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('stop-scroll');
    }
  });
}

initSlider();

btnNext.addEventListener('click', moveRight);
btnPrev.addEventListener('click', moveLeft);
