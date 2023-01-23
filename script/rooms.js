const indoorImg = document.querySelector('.indoor img');
const indoorButtonBefore = document.querySelector(
  '.indoor .img__before-button'
);
const indoorButtonAfter = document.querySelector('.indoor .img__after-button');
const outdoorImg = document.querySelector('.outdoor img');
const outdoorButtonBefore = document.querySelector(
  '.outdoor .img__before-button'
);
const outdoorButtonAfter = document.querySelector(
  '.outdoor .img__after-button'
);

indoorButtonBefore.addEventListener('click', () => {
  console.log('실내 이전 클릭');
  indoorImg.src = './img_src/img/main-room/main-room-vertical-4.jpg';
});
indoorButtonAfter.addEventListener('click', () => {
  console.log('실내 이후 클릭');
});
outdoorButtonBefore.addEventListener('click', () => {
  console.log('외부 이전 클릭');
});
outdoorButtonAfter.addEventListener('click', () => {
  console.log('외부 이후 클릭');
});
