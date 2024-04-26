window.onload = function () {
    let slideshows = document.querySelectorAll('.slideshow');
    for (var i = 0 ; i < slideshows.length ; i++) {
        let slides = slideshows[i].children;
        index = 0;
        slideshows[i].addEventListener('click', function (event) {
            slides[index].style.display = "none";
            index++;
            if (index > slides.length - 1) index = 0
            slides[index].style.display = "block";
        });
    }
}