import { renderProjects } from "./renderProjects.js";
import { setSearch, getProjectsToRender } from "./Threefunctions.js";

export function initializeSearch() {

    const input = document.getElementById("searchProjects");

    if (!input) return;

    input.addEventListener("input", () => {
        const text = input.value;
        setSearch(text);

        renderProjects(getProjectsToRender());
    });
}