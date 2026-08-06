import { createFilters, initializeFilters } from "./filters.js";
import { renderProjects } from "./renderProjects.js";
import { initializeSearch } from "./search.js";
import { toggleShowMore, isShowingAll } from "./showMore.js";
import { getProjectsToRender } from "./Threefunctions.js";

export let currentFilter = "all";
export let currentSearch = "";
export let showingAll = false;

export function initializeProjects(){

    createFilters();
    renderProjects();
    initializeFilters();
    initializeSearch();

    const button = document.getElementById("toggleProjects");

    if(button){

        button.addEventListener("click",()=>{
            toggleShowMore();
            renderProjects(getProjectsToRender());
            button.textContent = isShowingAll()
                ? "Mostrar menos"
                : "Ver mais projetos";
        });
    }
}