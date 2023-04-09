//mobile-menu

const burger = document.querySelector('.burger-menu');
const menuItems = document.querySelectorAll('.navigation-item');
const navigation = document.querySelector('.navigation');

const toggleMobileMenu = () => {
  console.log('menu click');
  navigation.style.transition = 'transform 0.55s cubic-bezier(0.785, 0.135, 0.15, 0.86)';
  //burger.classList.toggle('clicked');
  navigation.classList.toggle('show');
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
