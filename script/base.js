// sticky pc header.
window.addEventListener('scroll', () => {
  if (
    window.pageYOffset >
    document.querySelector('.navigation').offsetHeight +
      document.querySelector('.navigation').offsetTop
  ) {
    document.querySelector('.sticky-header').style.visibility = 'visible';
    document.querySelector('.sticky-header').style.height = '60px';
  } else {
    document.querySelector('.sticky-header').style.visibility = 'hidden';
    document.querySelector('.sticky-header').style.height = '0px';
  }
});

// 모바일 네비게이션 메뉴.
document
  .querySelector('.header__mobile-navigation-icon')
  .addEventListener('click', () => {
    document.querySelector(
      '.header__mobile-navigation-slide'
    ).style.visibility = 'visible';
    document.querySelector('.header__mobile-navigation-slide').style.width =
      '60%';
  });
document
  .querySelector('.header__mobile-navigation-close')
  .addEventListener('click', () => {
    document.querySelector(
      '.header__mobile-navigation-slide'
    ).style.visibility = 'hidden';
    document.querySelector('.header__mobile-navigation-slide').style.width =
      '0px';
  });
// 모바일 네비게이션 메뉴가 펼쳐져 있을 때, 메인을 클릭하면 메뉴 닫힘.
document.querySelector('main').addEventListener('click', () => {
  if (
    (document.querySelector(
      '.header__mobile-navigation-slide'
    ).style.visibility = 'visible')
  ) {
    document.querySelector(
      '.header__mobile-navigation-slide'
    ).style.visibility = 'hidden';
    document.querySelector('.header__mobile-navigation-slide').style.width =
      '0px';
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

// rooms images preload.
// preload 함수.
function roomsImgsPreload(arr, index) {
  index = index || 0;
  if (index < arr.length) {
    const img = new Image();
    img.src = arr[index];
    img.addEventListener('load', () => {
      roomsImgsPreload(arr, index + 1);
    });
  }
}
// 내부 imgs src 배열.
const roomsIndoorImgsArr = [];
for (i = 1; i < 20; i++) {
  roomsIndoorImgsArr.push(`./img_src/rooms/indoor/(${i}).jpg`);
}
// 외부 imgs src 배열.
const roomsOutdoorImgsArr = [];
for (i = 1; i < 11; i++) {
  roomsOutdoorImgsArr.push(`./img_src/rooms/outdoor/(${i}).jpg`);
}
// 내부, 외부 imgs 병렬 load.
window.addEventListener('load', roomsImgsPreload(roomsIndoorImgsArr));
window.addEventListener('load', roomsImgsPreload(roomsOutdoorImgsArr));
