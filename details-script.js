let projectIndex;

const spanTitle = document.getElementById("span-title");
const spanSummary = document.getElementById("span-summary");
const spanPlatforms = document.getElementById("span-platforms");
const spanTools = document.getElementById("span-tools");
const spanRole = document.getElementById("span-role");
const spanDuration = document.getElementById("span-duration");
const spanRelease = document.getElementById("span-release");
const divSlideShow = document.getElementById("slide-show");
const divDetails = document.getElementById("div-details");

const spanLinksList = document.getElementsByClassName("span-links");

document.body.onload = onLoad;

function onLoad() {
    var url = new URL(window.location.href);
    projectIndex = url.searchParams.get("project");

    document.title = projects[projectIndex].title;
    
    setGameInfo();
}

function setGameInfo() {
    fetch(projects[projectIndex].details)
    .then((response) => response.text())
    .then((text) => {
        divDetails.innerHTML = text;
    });

    spanTitle.innerHTML = projects[projectIndex].title;
    spanSummary.innerHTML = projects[projectIndex].summary;
    spanPlatforms.innerHTML = projects[projectIndex].platforms;
    spanTools.innerHTML = projects[projectIndex].tools;
    spanRole.innerHTML = projects[projectIndex].role;
    spanDuration.innerHTML = projects[projectIndex].duration;
    spanRelease.innerHTML = projects[projectIndex].releaseDate;

    initSlideShow(divSlideShow, 0, 0);

    const imagePathsArray = projects[projectIndex].imagePaths;
    for (let i = 0 ; i < imagePathsArray.length ; i++) {
        const imagePath = imagePathsArray[i];
        
        const image = document.createElement("img");
        image.src = imagePath;
        divSlideShow.appendChild(image);
    }

    const linksArray = projects[projectIndex].links;
    
    for (let i = 0 ; i < spanLinksList.length ; i++) {
        const spanLinks = spanLinksList[i];
        
        for (let i = 0 ; i < linksArray.length ; i++) {
            const link = linksArray[i];
            
            const anchor = document.createElement("a");
            anchor.href = link.href;
            const image = document.createElement("img");
            image.src = link.image;
            anchor.appendChild(image);
            spanLinks.appendChild(anchor);
        }
    }
}