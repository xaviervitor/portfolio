import * as Projects from "./modules/projects.js";
import * as SlideShow from "./modules/slideshow.js";

const projectsContainer = document.getElementById("projects-container");
const olderProjectsContainer = document.getElementById("older-projects-container");

document.body.onload = onLoad;

function onLoad() {
    for (let i = 0; i < Projects.projectList.length - Projects.olderProjectsLength; i++) {
        appendProjects(i, projectsContainer);
    }

    for (let i = Projects.projectList.length - Projects.olderProjectsLength ; i < Projects.projectList.length ; i++) {
        appendOlderProjects(i, olderProjectsContainer);
    }
}

function appendProjects(projectIndex, container) {
    const project = Projects.projectList[projectIndex];

    const article = document.createElement("a");
    article.classList.add("item");
    let url = new URL("portfolio/details.html", window.location.origin);
    url.searchParams.set("project", projectIndex);
    article.href = url.toString();

    const slideShow = document.createElement("div");
    slideShow.classList.add("slide-show");

    SlideShow.initSlideShow(slideShow, projectIndex, 0);

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

    const spanTools = document.createElement("div");
    const toolsArray = project.tools;
    for (let i = 0 ; i < toolsArray.length ; i++) {
        const tool = toolsArray[i];

        const toolSpan = document.createElement("span");
        toolSpan.classList.add("badge");
        toolSpan.innerHTML = tool;
        spanTools.appendChild(toolSpan);
    }

    const gameSummary = document.createElement("div");
    gameSummary.classList.add("margin-bottom");
    gameSummary.innerHTML = project["summary"];

    gameInfoText.appendChild(gameTitle);
    gameInfoText.appendChild(spanTools);
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

    container.appendChild(article);
}

function appendOlderProjects(projectIndex, container) {
    const project = Projects.projectList[projectIndex];

    const article = document.createElement("a");
    let url = new URL("portfolio/details.html", window.location.origin);
    url.searchParams.set("project", projectIndex);
    article.href = url.toString();
    article.classList.add("item-small");

    const image = document.createElement("img");
    image.classList.add("item-small-img");
    image.src = project.imagePaths[0];
    article.appendChild(image);

    const gameInfo = document.createElement("div");
    gameInfo.classList.add("item-small-content");

    const gameTitle = document.createElement("span");
    gameTitle.classList.add("medium-title-text");
    gameTitle.innerHTML = project.title;
    gameInfo.appendChild(gameTitle);

    const gameSummary = document.createElement("div");
    gameSummary.classList.add("double-line-text");
    gameSummary.innerHTML = project.summary;
    gameInfo.appendChild(gameSummary);

    article.appendChild(gameInfo);

    const aside = document.createElement("div");
    aside.classList.add("item-small-aside");

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

    aside.appendChild(links);
    aside.appendChild(gameDate);
    article.appendChild(aside);

    container.appendChild(article);
}