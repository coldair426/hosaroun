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
