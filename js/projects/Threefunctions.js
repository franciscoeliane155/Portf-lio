import { projects } from "./projectFiles.js";

let currentFilter = "all";
let currentSearch = "";
let showingAll = false;

export function setFilter(filter) {
    currentFilter = filter;
}

export function setSearch(text) {
    currentSearch = text.toLowerCase().trim();
}

export function toggleShowMore() {
    showingAll = !showingAll;
}

export function setShowingAll(value) {
    showingAll = value;
}

export function isShowingAll() {
    return showingAll;
}

export function getProjectsToRender() {

    let result = [...projects];

    if (!showingAll) {
        result = result.filter(project => project.featured);
    }

    if (currentFilter !== "all") {
        result = result.filter(project =>
            project.category === currentFilter
        );
    }

    if (currentSearch !== "") {

        result = result.filter(project =>

            project.title.toLowerCase().includes(currentSearch) ||
            project.description.toLowerCase().includes(currentSearch) ||
            project.technologies.some(technology =>
                technology.toLowerCase().includes(currentSearch)
            )

        );
    }
    return result;
}