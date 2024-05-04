let timeoutID;
let activeSlideShow;

const projectsContainer = document.getElementById("projects-container");

document.body.onload = onLoad;

function onLoad() {
    activeSlideShow = null;
    
    appendContainerItems();
}

function appendContainerItems() {
    for (let i = 0; i < projects.length ; i++) {
        const project = projects[i];

        const article = document.createElement("a");
        article.classList.add("item");
        let url = new URL("details.html", window.location.href);
        url.searchParams.set('game', i);
        article.href = url.toString();
        
        const slideShow = document.createElement("div");
        slideShow.classList.add("slide-show");

        slideShow.slideShowIndex = i;
        slideShow.slideIndex = 0;
        slideShow.addEventListener('mouseenter', startSlideShow);
        slideShow.addEventListener('mouseleave', stopSlideShow);
        
        const imagePathsArray = project.imagePaths;
        for (let i = 0 ; i < imagePathsArray.length ; i++) {
            const imagePath = imagePathsArray[i];
            
            const image = document.createElement("img");
            image.src = imagePath;
            slideShow.appendChild(image);
        }

        const gameInfo = document.createElement("div");
        gameInfo.classList.add("game-info");

        const gameInfoText = document.createElement("div");

        // const gameCardHeader = document.createElement("div");
        // gameCardHeader.classList.add("card-header");

        const gameTitle = document.createElement("span");
        gameTitle.classList.add("title-text");
        gameTitle.innerHTML = project.title;

        // const detailsButton = document.createElement("a");
        // detailsButton.classList.add("button-card");
        // detailsButton.innerHTML = "Details";
        // let url = new URL("details.html", window.location.origin);
        // url.searchParams.set('game', i);
        // detailsButton.href = url.toString();
        
        // gameCardHeader.appendChild(gameTitle);
        // gameCardHeader.appendChild(detailsButton);

        const gameSummary = document.createElement("div");
        gameSummary.classList.add("margin-bottom");
        gameSummary.classList.add("margin-top");
        gameSummary.innerHTML = project["summary"];
        
        gameInfoText.appendChild(gameTitle);
        gameInfoText.appendChild(gameSummary);

        const links = document.createElement("div");
        links.classList.add("image-button-row");
        
        const linksArray = project.links;
        for (let i = 0 ; i < linksArray.length ; i++) {
            const link = linksArray[i];
            
            const anchor = document.createElement("a");
            anchor.href = link.href;
            const image = document.createElement("img");
            image.src = link.image;
            anchor.appendChild(image);
            links.appendChild(anchor);
        }

        const gameDate = document.createElement("span");
        gameDate.classList.add("game-date");
        gameDate.classList.add("accent-text");
        gameDate.innerHTML = project.releaseDate;

        links.appendChild(gameDate);

        gameInfo.appendChild(gameInfoText);
        gameInfo.appendChild(links);

        article.appendChild(slideShow);
        article.appendChild(gameInfo);

        projectsContainer.appendChild(article);
    }
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
    activeSlideShow.children[activeSlideShow.slideIndex].style.display = "none";
    activeSlideShow.children[0].style.display = "block";
    activeSlideShow.slideIndex = 0;
}