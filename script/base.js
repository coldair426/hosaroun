const header = document.getElementsByClassName('header')[0]; // header get.
const navigation = document.getElementsByClassName('navigation')[0];
const mobileNavigationIcon = document.getElementsByClassName(
  'header__mobile-navigation-icon'
)[0];
const mobileNavigationClose = document.getElementsByClassName(
  'header__mobile-navigation-close'
)[0];
const mobileNavigationSliede = document.getElementsByClassName(
  'header__mobile-navigation-slide'
)[0];

// sticky pc header.
window.addEventListener('scroll', () => {
  if (window.pageYOffset > header.offsetHeight + navigation.offsetTop) {
    document.querySelector('.sticky-header').style.visibility = 'visible';
    document.querySelector('.sticky-header').style.height = '60px';
  } else {
    document.querySelector('.sticky-header').style.visibility = 'hidden';
    document.querySelector('.sticky-header').style.height = '0px';
  }
});

// 모바일 네비게이션 메뉴.
mobileNavigationIcon.addEventListener('click', () => {
  mobileNavigationSliede.style.visibility = 'visible';
  mobileNavigationSliede.style.width = '60%';
});
mobileNavigationClose.addEventListener('click', () => {
  mobileNavigationSliede.style.visibility = 'hidden';
  mobileNavigationSliede.style.width = '0px';
});
// 모바일 네비게이션 메뉴가 펼쳐져 있을 때, 메인을 클릭하면 메뉴 닫힘.
document.querySelector('main').addEventListener('click', () => {
  if ((mobileNavigationSliede.style.visibility = 'visible')) {
    mobileNavigationSliede.style.visibility = 'hidden';
    mobileNavigationSliede.style.width = '0px';
  }
});

// 현재 페이지 표시.
document.addEventListener('DOMContentLoaded', () => {
  if (document.title === '호사로운 Overview') {
    document.querySelector('.navigation__overview-mark').style.visibility =
      'visible';
    document.querySelector(
      '.header__mobile-navigation-overview-mark'
    ).style.visibility = 'visible';
    document.querySelector('.sticky-header__overview-mark').style.visibility =
      'visible';
  }
  if (document.title === '호사로운 Rooms') {
    document.querySelector('.navigation__rooms-mark').style.visibility =
      'visible';
    document.querySelector(
      '.header__mobile-navigation-rooms-mark'
    ).style.visibility = 'visible';
    document.querySelector('.sticky-header__rooms-mark').style.visibility =
      'visible';
  }
  if (document.title === '호사로운 Location') {
    document.querySelector('.navigation__location-mark').style.visibility =
      'visible';
    document.querySelector(
      '.header__mobile-navigation-location-mark'
    ).style.visibility = 'visible';
    document.querySelector('.sticky-header__location-mark').style.visibility =
      'visible';
  }
  if (document.title === '호사로운 Book now') {
    document.querySelector('.navigation__booknow-mark').style.visibility =
      'visible';
    document.querySelector(
      '.header__mobile-navigation-booknow-mark'
    ).style.visibility = 'visible';
    document.querySelector('.sticky-header__booknow-mark').style.visibility =
      'visible';
  }
  if (document.title === '호사로운 Contact us') {
    document.querySelector('.navigation__contactus-mark').style.visibility =
      'visible';
    document.querySelector(
      '.header__mobile-navigation-contactus-mark'
    ).style.visibility = 'visible';
    document.querySelector('.sticky-header__contactus-mark').style.visibility =
      'visible';
  }
});
