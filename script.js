let timeoutID;

const projectsContainer = document.getElementById("projects-container");

document.body.onload = onLoad;

function onLoad() {
    appendContainerItems();
}

function appendContainerItems() {
    for (let i = 0; i < projects.length ; i++) {
        const project = projects[i];

        const article = document.createElement("a");
        article.classList.add("item");
        let url = new URL("portfolio/details.html", window.location.origin);
        url.searchParams.set("project", i);
        article.href = url.toString();
        
        const slideShow = document.createElement("div");
        slideShow.classList.add("slide-show");

        initSlideShow(slideShow, i, 0);
        
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

        const gameTitle = document.createElement("span");
        gameTitle.classList.add("title-text");
        gameTitle.innerHTML = project.title;

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