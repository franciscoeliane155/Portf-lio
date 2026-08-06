import { projects } from "./projectFiles.js";
import { createProjectCard } from "./projectCard.js";
import { initializeCarousels } from "./carousel2.js";
import { isShowingAll } from "./showMore.js";
import { initializeProjectModal } from "./projectModal.js";

export function renderProjects(projectList = projects) {
    const grid = document.getElementById("projectsGrid");

    if (!grid) return;

    const visibleProjects = isShowingAll()
    ? projectList
    : projectList.filter(project => project.featured);
    
    const sortedProjects = [...visibleProjects]
    .sort((a, b) => a.priority - b.priority);
    
    grid.innerHTML = sortedProjects
        .map(project => createProjectCard(project))
        .join("");

    lucide.createIcons();

    initializeCarousels();
    initializeProjectModal();
}