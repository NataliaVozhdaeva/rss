async function getData() {
  const response = await fetch('../shelter/assets/pets.json');
  petsArr = await response.json();

  return petsArr;
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

init();

function forward() {
  pastArr = currArr;
  currArr = nextArr;
  nextArr = [];
  geterateArr(nextArr, currentArr);
}

function backward() {
  nextArr = currentArr;
  currentArr = pastArr;
  pastArr = [];
  geterateArr(pastArr, currentArr);
}

function changeToBackward() {
  let temporaryArr = currentArr;
  currentArr = pastArr;
  pastArr = temporaryArr;
  nextArr = [];
  geterateArr(nextArr, currentArr);
}

function changeToForward() {
  let temporaryArr = currentArr;
  currentArr = nextArr;
  nextArr = temporaryArr;
  pastArr = [];
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

btnNext.addEventListener('click', moveRight);
btnPrev.addEventListener('click', moveLeft);

slider.addEventListener('animationend', (animationEvent) => {
  slider.classList.remove('transition-left');
  slider.classList.remove('transition-right');
  btnNext.addEventListener('click', moveRight);
  btnPrev.addEventListener('click', moveLeft);
});

console.log(pastArr, currentArr, nextArr);

async function createCard() {
  const petsArr = await getData();
  const petsCards = document.querySelectorAll('.pets-item');

  petsCards.forEach((el, i) => {
    el.setAttribute('data-modal', petsArr[i].name);

    const img = el.querySelector('.pet-img');
    img.setAttribute('src', petsArr[i].img);
    img.setAttribute('alt', petsArr[i].breed + ' ' + petsArr[i].name);

    const name = el.querySelector('.pet-text');
    name.textContent = petsArr[i].name;
  });
}

createCard();

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
