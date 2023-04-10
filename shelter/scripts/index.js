async function getData() {
  const response = await fetch('../shelter/assets/pets.json');
  petsArr = await response.json();

  return petsArr;
}

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
    img.setAttribute('src', `../assets/img/modal/${petsArr[i].name.toLowerCase()}.png`);
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
