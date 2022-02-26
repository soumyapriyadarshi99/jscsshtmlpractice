//For advertisement in landing page
let i = 0;
const images = [
  "../assets/images/kiladi.jpg",
  "../assets/images/stsh.jpg",
  "../assets/images/tenet.jpg",
  "../assets/images/badhaaido.jpg",
  "../assets/images/giftcard.jpg",
  "../assets/images/goodluck.jpg",
  "../assets/images/moonfall.jpg",
];
const time = 2500;
changeImg = () => {
  document.slide.src = images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImg()", time);
};
window.onload = changeImg;
const handler = window.onload;
window.onload = () => {
  if (handler) {
    handler();
  }
};

