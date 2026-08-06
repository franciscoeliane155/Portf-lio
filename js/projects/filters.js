import { categories } from "./projectConfig.js";
import { renderProjects } from "./renderProjects.js";
import { setFilter, getProjectsToRender } from "./Threefunctions.js";

export function createFilters() {

    const container = document.getElementById("projectsFilters");

    if (!container) return;

    container.innerHTML = Object.entries(categories)
        .map(([key, category], index) => `
            <button
                class="filter-btn ${index === 0 ? "active" : ""}"
                data-filter="${key}">
                <i data-lucide="${category.icon}"></i>
                ${category.label}
            </button>
        `)
        .join("");
    lucide.createIcons();
}

export function initializeFilters() {

    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(button => {
        
        button.addEventListener("click", () => {

            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            const filter = button.dataset.filter;

            setFilter(filter);
            renderProjects(getProjectsToRender());
        });
    });
}

