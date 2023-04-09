//mobile-menu

const burger = document.querySelector('.burger-menu');
const menuItems = document.querySelectorAll('.navigation-item');
const navigation = document.querySelector('.navigation');
const body = document.querySelector('html');
const overlay = document.querySelector('.overlay');

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

//slider

/* const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');
const feeedbackContent = document.querySelectorAll('.feedback-item');
let activeSlideNumber = 0;

function showFeedback() {
  feeedbackContent[activeSlideNumber].classList.remove('non-displayed');
}

showFeedback(activeSlideNumber);

btnNext.addEventListener('click', () => {
  feeedbackContent[activeSlideNumber].classList.add('non-displayed');
  activeSlideNumber = (activeSlideNumber + 1) % feeedbackContent.length;
  showFeedback(activeSlideNumber);
});

btnPrev.addEventListener('click', () => {
  feeedbackContent[activeSlideNumber].classList.add('non-displayed');
  activeSlideNumber = (activeSlideNumber + feeedbackContent.length - 1) % feeedbackContent.length;
  showFeedback(activeSlideNumber);
});
 */
