let petsList = document.querySelector('.pets-list');
const btnNext = document.querySelector('.pagination-next');
const btnPrev = document.querySelector('.pagination-prev');
const currentPage = document.querySelector('.pagination-current');
const btnToStart = document.querySelector('.pagination-start');
const btnToEnd = document.querySelector('.pagination-finish');

let currentPageNum = 1;
currentPage.textContent = currentPageNum;

function geterateStartDate(arr) {
  let newArr = arr.sort(() => Math.random() - 0.5);
  return newArr;
}

let petsPerPage = 8;

if (window.innerWidth < 1279 && window.innerWidth > 639) {
  petsPerPage = 6;
}

if (window.innerWidth < 639) {
  petsPerPage = 3;
}

let createZoo = () => {
  let arr = [0, 1, 2, 3, 4, 5, 6, 7];

  let zoo = [];
  for (let i = 0; i < 6; i++) {
    zoo = zoo.concat(geterateStartDate(arr));
  }

  let subarray = [];
  for (let i = 0; i < Math.ceil(zoo.length / petsPerPage); i++) {
    subarray[i] = zoo.slice(i * petsPerPage, i * petsPerPage + petsPerPage);
  }

  return subarray;
};

let zoo = createZoo();

async function initPets() {
  const petsArr = await getData();

  function createCardsTemplate() {
    petsList.innerHTML = '';
    for (let i = 0; i < petsPerPage; i++) {
      let card = document.createElement('li');
      card.classList = 'pets-item js-open-modal';
      petsList.append(card);
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

  function createCards(cards, page) {
    page = currentPageNum;
    createCardsTemplate();

    Array.from(cards).forEach((el, i) => {
      el.setAttribute('data-modal', petsArr[zoo[page - 1][i]].name);

      const img = el.querySelector('.pet-img');
      img.setAttribute('src', petsArr[zoo[page - 1][i]].img);
      img.setAttribute('alt', petsArr[zoo[page - 1][i]].breed + ' ' + petsArr[zoo[page - 1][i]].name);

      const name = el.querySelector('.pet-text');
      name.textContent = petsArr[zoo[page - 1][i]].name;
    });
  }

  const cards = document.getElementsByClassName('pets-item');

  createCards(cards, 1);

  const modalButtons = document.querySelectorAll('.js-open-modal');
  const closeButtons = document.querySelectorAll('.js-modal-close');
  const overlay = document.querySelector('#overlay-modal');
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

initPets();

if (currentPageNum === 1) {
  btnPrev.setAttribute('disabled', true);
  btnToStart.setAttribute('disabled', true);
}

const pagePlusHandler = () => {
  currentPageNum++;
  currentPage.textContent = currentPageNum;
};

const pageMinusHandler = () => {
  currentPageNum--;
  currentPage.textContent = currentPageNum;
};

const nextPage = () => {
  pagePlusHandler();
  if (currentPageNum > 1) {
    btnPrev.removeAttribute('disabled');
    btnToStart.removeAttribute('disabled');
  }

  if (currentPageNum === 48 / petsPerPage) {
    btnNext.setAttribute('disabled', true);
    btnToEnd.setAttribute('disabled', true);
  }

  initPets();
};

const prevPage = () => {
  pageMinusHandler();
  if (currentPageNum === 1) {
    btnPrev.setAttribute('disabled', true);
    btnToStart.setAttribute('disabled', true);
  }
  if (currentPageNum < 48 / petsPerPage) {
    btnNext.removeAttribute('disabled');
    btnToEnd.removeAttribute('disabled');
  }

  initPets();
};

moveToEnd = () => {
  currentPageNum = 48 / petsPerPage;
  btnNext.setAttribute('disabled', true);
  btnToEnd.setAttribute('disabled', true);
  btnPrev.removeAttribute('disabled');
  btnToStart.removeAttribute('disabled');
  initPets();
  currentPage.textContent = currentPageNum;
};

moveToStart = () => {
  currentPageNum = 1;
  btnNext.removeAttribute('disabled');
  btnToEnd.removeAttribute('disabled');
  btnPrev.setAttribute('disabled', true);
  btnToStart.setAttribute('disabled', true);
  initPets();
  currentPage.textContent = currentPageNum;
};

btnNext.addEventListener('click', nextPage);
btnPrev.addEventListener('click', prevPage);
btnToEnd.addEventListener('click', moveToEnd);
btnToStart.addEventListener('click', moveToStart);
