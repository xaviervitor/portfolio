let gameIndex;

const spanTitle = document.getElementById("span-title");
const spanSummary = document.getElementById("span-summary");
const spanPlatforms = document.getElementById("span-platforms");
const spanTools = document.getElementById("span-tools");
const spanRole = document.getElementById("span-role");
const spanDuration = document.getElementById("span-duration");
const spanRelease = document.getElementById("span-release");
const divSlideShow = document.getElementById("slide-show");
const spanLinks = document.getElementById("span-links");
const divOverview = document.getElementById("div-overview");

document.body.onload = onLoad;

function onLoad() {
    var url = new URL(window.location.href);
    gameIndex = url.searchParams.get("game");

    document.title = projects[gameIndex].title;
    
    setGameInfo();
}

function setGameInfo() {
    spanTitle.innerHTML = projects[gameIndex].title;
    spanSummary.innerHTML = projects[gameIndex].summary;
    spanPlatforms.innerHTML = projects[gameIndex].platforms;
    spanTools.innerHTML = projects[gameIndex].tools;
    spanRole.innerHTML = projects[gameIndex].role;
    spanDuration.innerHTML = projects[gameIndex].duration;
    spanRelease.innerHTML = projects[gameIndex].releaseDate;

    const imagePathsArray = projects[gameIndex].imagePaths;
    for (let i = 0 ; i < imagePathsArray.length ; i++) {
        const imagePath = imagePathsArray[i];
        
        const image = document.createElement("img");
        image.src = imagePath;
        divSlideShow.appendChild(image);
    }

    const linksArray = projects[gameIndex].links;
    for (let i = 0 ; i < linksArray.length ; i++) {
        const link = linksArray[i];
        
        const anchor = document.createElement("a");
        anchor.href = link.href;
        const image = document.createElement("img");
        image.src = link.image;
        anchor.appendChild(image);
        spanLinks.appendChild(anchor);
    }

    divOverview.innerHTML = projects[gameIndex].overview;
}