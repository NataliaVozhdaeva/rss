async function getData() {
  const response = await fetch('../shelter/assets/pets.json');

  return await response.json();
}

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
  for (let i = 0; i < 3; i++) {
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
  const prevPetsCards = document.querySelectorAll('.item-prev');
  const curPetsCards = document.querySelectorAll('.item-cur');
  const nextPetsCards = document.querySelectorAll('.item-next');

  init();

  function createCards(cards, arr) {
    cards.forEach((el, i) => {
      el.setAttribute('data-modal', petsArr[arr[i]].name);

      const img = el.querySelector('.pet-img');
      img.setAttribute('src', petsArr[arr[i]].img);
      img.setAttribute('alt', petsArr[arr[i]].breed + ' ' + petsArr[arr[i]].name);

      const name = el.querySelector('.pet-text');
      name.textContent = petsArr[arr[i]].name;
    });
  }

  console.log(pastArr, currentArr, nextArr);

  createCards(prevPetsCards, pastArr);
  createCards(curPetsCards, currentArr);
  createCards(nextPetsCards, nextArr);

  slider.addEventListener('animationend', (animationEvent) => {
    if (animationEvent.animationName === 'move-left') {
      slider.classList.remove('transition-left');
      changeToBackward();
      console.log(pastArr, currentArr, nextArr);
      createCards(prevPetsCards, pastArr);
      createCards(curPetsCards, currentArr);
      createCards(nextPetsCards, nextArr);
    } else {
      slider.classList.remove('transition-right');
      changeToForward();
      console.log(pastArr, currentArr, nextArr);
      createCards(prevPetsCards, pastArr);
      createCards(curPetsCards, currentArr);
      createCards(nextPetsCards, nextArr);
    }

    btnNext.addEventListener('click', moveRight);
    btnPrev.addEventListener('click', moveLeft);
  });
}

initSlider();

async function createModal() {
  const petsArr = await getData();
  const modals = document.querySelectorAll('.modal');
  modals.forEach((el, i) => {
    el.setAttribute('data-modal', petsArr[i].name);

    const img = el.querySelector('.modal-img');
    img.setAttribute('src', `./assets/img/modal/${petsArr[i].name.toLowerCase()}.png`);
    img.setAttribute('alt', petsArr[i].breed + ' ' + petsArr[i].name);

    el.querySelector('.modal-title').textContent = petsArr[i].name;
    el.querySelector('.modal-subtitle').textContent = petsArr[i].type + ' - ' + petsArr[i].breed;
    el.querySelector('.modal-text').textContent = petsArr[i].description;
    el.querySelector('.age').textContent = petsArr[i].age;
    el.querySelector('.inoculations').textContent = petsArr[i].inoculations;
    el.querySelector('.diseases').textContent = petsArr[i].diseases;
    el.querySelector('.parasites').textContent = petsArr[i].parasites;
  });
}

createModal();

btnNext.addEventListener('click', moveRight);
btnPrev.addEventListener('click', moveLeft);

///modal window
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

//mobile-menu

const burger = document.querySelector('.burger-menu');
const menuItems = document.querySelectorAll('.navigation-item');
const navigation = document.querySelector('.navigation');

const toggleMobileMenu = () => {
  navigation.style.transition = 'transform 0.55s cubic-bezier(0.785, 0.135, 0.15, 0.86)';
  burger.classList.toggle('clicked');
  navigation.classList.toggle('show');
  body.classList.toggle('stop-scroll');
  overlay.classList.toggle('active');
};

burger.addEventListener('click', toggleMobileMenu);

menuItems.forEach((item) => {
  item.addEventListener('click', toggleMobileMenu);
});

document.addEventListener('click', (e) => {
  if (e.target != navigation && navigation.classList.contains('show') && e.target != burger) {
    toggleMobileMenu();
  }
});
