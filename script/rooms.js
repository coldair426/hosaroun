const indoorImg = document.querySelector('.indoor__img');
const indoorButtonBefore = document.querySelector(
  '.indoor .img__before-button'
);
const indoorButtonAfter = document.querySelector('.indoor .img__after-button');
const outdoorImg = document.querySelector('.outdoor__img');
const outdoorButtonBefore = document.querySelector(
  '.outdoor .img__before-button'
);
const outdoorButtonAfter = document.querySelector(
  '.outdoor .img__after-button'
);

const indoorImgArr = [];
for (i = 1; i < 20; i++) {
  indoorImgArr.push(`./img_src/rooms/indoor/(${i}).jpg`);
}
let indoorImgIndex = 0;
indoorImg.src = indoorImgArr[indoorImgIndex];

indoorButtonBefore.addEventListener('click', () => {
  if (indoorImgIndex === 0) {
    indoorImgIndex = 18;
    indoorImg.src = indoorImgArr[indoorImgIndex];
  } else {
    indoorImgIndex -= 1;
    indoorImg.src = indoorImgArr[indoorImgIndex];
  }
});
indoorButtonAfter.addEventListener('click', () => {
  if (indoorImgIndex === 18) {
    indoorImgIndex = 0;
    indoorImg.src = indoorImgArr[indoorImgIndex];
  } else {
    indoorImgIndex += 1;
    indoorImg.src = indoorImgArr[indoorImgIndex];
  }
});

const outdoorImgArr = [];
for (i = 1; i < 11; i++) {
  outdoorImgArr.push(`./img_src/rooms/outdoor/(${i}).jpg`);
}
let outdoorImgIndex = 0;
outdoorImg.src = outdoorImgArr[outdoorImgIndex];

outdoorButtonBefore.addEventListener('click', () => {
  if (outdoorImgIndex === 0) {
    outdoorImgIndex = 9;
    outdoorImg.src = outdoorImgArr[outdoorImgIndex];
  } else {
    outdoorImgIndex -= 1;
    outdoorImg.src = outdoorImgArr[outdoorImgIndex];
  }
});
outdoorButtonAfter.addEventListener('click', () => {
  if (outdoorImgIndex === 9) {
    outdoorImgIndex = 0;
    outdoorImg.src = outdoorImgArr[outdoorImgIndex];
  } else {
    outdoorImgIndex += 1;
    outdoorImg.src = outdoorImgArr[outdoorImgIndex];
  }
});
