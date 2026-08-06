import { projects } from "./projectFiles.js";
import {initializeCarousels} from "./Carousel2.js"; 

function createModal(project){

    const technologies = project.technologies
        .map(technology => `
            <span class="technology-tag">
                ${technology}
            </span>
        `)
        .join("");

    const features = project.features
        .map(feature => `
            <li>
                <i data-lucide="check"></i>
                ${feature}
            </li>
        `)
        .join("");

    return `
        <div class="project-modal-layout">
            <div class="project-modal-gallery">
                <div class="project-carousel">
                    <div class="carousel-images">
                        ${project.images
                        .map((image, index) => `
                            <img
                            src="${image}"
                            alt="${project.title}"
                            class="${index === 0 ? "active" : ""}">
                        `)
                        .join("")}
                    </div>
                    <button class="prev">
                        &#10094;
                    </button>
                    <button class="next">
                        &#10095;
                    </button>
                    <div class="carousel-dots"></div>
                </div>
            </div>
            <div class="project-modal-info">
                <h2>${project.title}</h2>
                <div class="project-modal-meta">
                    <span>${project.type}</span>
                    <span>${project.role}</span>
                    <span>${project.duration}</span>
                </div>
                <p class="project-modal-description">
                    ${project.description}
                </p>
                <h3>Tecnologias</h3>
                <div class="project-technologies">
                    ${technologies}
                </div>
                <h3>Funcionalidades</h3>
                <ul class="project-features">
                    ${features}
                </ul>
                <div class="project-buttons">
                    ${project.github
                    ? `
                    <a href="${project.github}"
                    class="btn-secondary"
                    target="_blank">

                    GitHub

                    </a>
                    `
                    : ""
                    }
                </div>
            </div>
        </div>
    `;
}

export function initializeProjectModal() {

    const modal = document.getElementById("projectModal");
    const modalBody = document.getElementById("modalBody");
    const closeButton = document.querySelector(".close-modal");
    const overlay = document.querySelector(".modal-overlay");
    const buttons = document.querySelectorAll(".open-project");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const id = button.dataset.project;
            const project = projects.find(project => project.id === id);

            modalBody.innerHTML = createModal(project);

            lucide.createIcons();
            initializeCarousels();

            modal.classList.add("active");
        });
    });

    closeButton.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    overlay.addEventListener("click", () => {
        modal.classList.remove("active");
    });
}
