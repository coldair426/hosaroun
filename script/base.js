const header = document.getElementsByClassName('header')[0]; // header get.
const stickyHeader = document.getElementsByClassName(
  'sticky-header-selecter'
)[0];
const navigation = document.getElementsByClassName('navigation')[0];
const mobileNavigationIcon = document.getElementsByClassName(
  'header__mobile-navigation-icon'
)[0];
const mobileNavigationCloseIcon = document.getElementsByClassName(
  'header__mobile-navigation-close-icon'
)[0];
const mobileNavigationSliede = document.getElementsByClassName(
  'header__mobile-navigation-slide'
)[0];

// sticky pc header
stickyHeader.classList.add('sticky-header-none');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > header.offsetHeight + navigation.offsetTop) {
    stickyHeader.classList.remove('sticky-header-none');
    stickyHeader.classList.add('sticky-header');
  } else {
    stickyHeader.classList.add('sticky-header-none');
    stickyHeader.classList.remove('sticky-header');
  }
});

// 모바일 네비게이션 메뉴.
mobileNavigationIcon.addEventListener('click', () => {
  mobileNavigationSliede.style.display = 'flex';
});
mobileNavigationCloseIcon.addEventListener('click', () => {
  mobileNavigationSliede.style.display = 'none';
});
