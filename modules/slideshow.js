let activeSlideShow;
let timeoutID;

function initSlideShow(slideShow, slideShowIndex, slideIndex) {
    activeSlideShow = null;
    slideShow.slideShowIndex = slideShowIndex;
    slideShow.slideIndex = slideIndex;
    slideShow.addEventListener('mouseenter', startSlideShow);
    slideShow.addEventListener('mouseleave', stopSlideShow);
}

function startSlideShow(event) {
    activeSlideShow = event.currentTarget;
    timeoutID = setTimeout(advanceSlide, 500);
}

function advanceSlide() {
    if (!activeSlideShow) return;
    activeSlideShow.children[activeSlideShow.slideIndex].style.display = "none";
    activeSlideShow.slideIndex++;
    if (activeSlideShow.slideIndex > activeSlideShow.children.length - 1) activeSlideShow.slideIndex = 0
    activeSlideShow.children[activeSlideShow.slideIndex].style.display = "block";
    clearTimeout(timeoutID);
    timeoutID = setTimeout(advanceSlide, 2000);
}

function stopSlideShow(event) {
    resetSlide();
    activeSlideShow = null;
    clearTimeout(timeoutID);
}

function resetSlide() {
    if (!activeSlideShow) return;
    activeSlideShow.children[activeSlideShow.slideIndex].style.display = "none";
    activeSlideShow.children[0].style.display = "block";
    activeSlideShow.slideIndex = 0;
}

export { initSlideShow };