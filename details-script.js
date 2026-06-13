import * as Projects from "./modules/projects.js";
import * as SlideShow from "./modules/slideshow.js";
import * as Zoom from "./modules/zoom.js";

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

    const projects = Projects.projectList;
    const project = projects[projectIndex];
    if (!project) {
        window.location.replace("porfolio/no-project.html");
        return;
    }

    setGameInfo(project);
}

function setGameInfo(project) {
    document.title = project.title;
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', project.details, false);
    xhr.send();
    divDetails.innerHTML = xhr.responseText;
    Zoom.setupImagesZoom(document.getElementsByClassName("zoomable"));

    spanTitle.innerHTML = project.title;
    spanSummary.innerHTML = project.summary;
    spanPlatforms.innerHTML = project.platforms;
    spanTools.innerHTML = project.tools.join(", ");
    spanRole.innerHTML = project.role;
    spanDuration.innerHTML = project.duration;
    spanRelease.innerHTML = project.releaseDate;

    SlideShow.initSlideShow(divSlideShow, 0, 0);

    const imagePathsArray = project.imagePaths;
    for (let i = 0 ; i < imagePathsArray.length ; i++) {
        const imagePath = imagePathsArray[i];

        const image = document.createElement("img");
        image.src = imagePath;
        divSlideShow.appendChild(image);
    }

    const linksArray = project.links;

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