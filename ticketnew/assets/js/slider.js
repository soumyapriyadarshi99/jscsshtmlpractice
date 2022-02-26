// for slider
const MouseWheelHandler = (e, element) => {
  let delta = 0;
  if (typeof e === "number") {
    delta = e;
  } else {
    if (e.deltaX !== 0) {
      delta = e.deltaX;
    } else {
      delta = e.deltaY;
    }
    e.preventDefault();
  }
  element.scrollLeft -= delta;
};
const slider = (parentId) => {
  const carousel = {};
  const parentEl = document.getElementById(parentId);
  carousel.e = parentEl.querySelector("#carousel");
  carousel.items = parentEl.querySelector("#carousel-items");
  carousel.leftScroll = parentEl.querySelector("#left-scroll-button");
  carousel.rightScroll = parentEl.querySelector("#right-scroll-button");
  carousel.items.addEventListener("mousewheel", handleMouse, false);
  carousel.items.addEventListener("scroll", scrollEvent);
  carousel.leftScroll.addEventListener("click", leftScrollClick);
  carousel.rightScroll.addEventListener("click", rightScrollClick);
  setLeftScrollOpacity();
  setRightScrollOpacity();
  function handleMouse(e) {
    MouseWheelHandler(e, carousel.items);
  }
  function leftScrollClick() {
    MouseWheelHandler(100, carousel.items);
  }
  function rightScrollClick() {
    MouseWheelHandler(-100, carousel.items);
  }
  function scrollEvent(e) {
    setLeftScrollOpacity();
    setRightScrollOpacity();
  }
  function setLeftScrollOpacity() {
    if (isScrolledAllLeft()) {
      carousel.leftScroll.style.opacity = 0;
    } else {
      carousel.leftScroll.style.opacity = 1;
    }
  }
};

(function () {
  document.getElementById("mainslider-upcoming").style.display = "none";

  const upComingBtn = document.getElementById("btn-upcoming");
  const nowShowingBtn =document.getElementById("btn-now-showing");

  nowShowingBtn.addEventListener('click', () => {
    document.getElementById("mainslider-nowshowing").style.display = "block";
    document.getElementById("mainslider-upcoming").style.display = "none";
  })

  upComingBtn.addEventListener("click", () =>{
    document.getElementById("mainslider-upcoming").style.display = "block";
    document.getElementById("mainslider-nowshowing").style.display = "none";
    slider("mainslider-upcoming");
  })
  slider("mainslider-nowshowing");
})();
