import { categories, statuses } from "./projectConfig.js";

function createCategoryBadge(category) {

    const currentCategory = categories[category];

    if (!currentCategory) return "";

    return `
        <div class="project-category">
            <i data-lucide="${currentCategory.icon}"></i>
            <span>${currentCategory.label}</span>
        </div>
    `;
}

function createStatusBadge(status) {

    const currentStatus = statuses[status];

    if (!currentStatus) return "";

    return `
        <div class="project-status ${currentStatus.className}">
            <span class="status-dot"></span>
            ${currentStatus.label}
        </div>
    `;
}

export function createProjectCard(project) {

    const technologies = project.technologies
        .map(technology => `
            <span class="technology-tag">
                ${technology}
            </span>
        `)
        .join("");

    const visibleFeatures = project.features
        .slice(0,3)
        .map(feature => `
            <li>
                <i data-lucide="check"></i>
                ${feature}
            </li>
        `)
        .join("");

    const remaining = project.features.length - 4;

    return `

        <article class="project-card">

            <div
                class="project-carousel"
                data-project="${project.id}">

                <div class="carousel-images">
                    ${project.images
                    .map((image, index) => `
                        <img
                            src="${image}"
                            alt="${project.title}"
                            class="${index === 0 ? "active" : ""}"
                        >
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

            <div class="project-content">
                <div class="project-header">
                    ${createCategoryBadge(project.category)}
                    ${createStatusBadge(project.status)}
                </div>
                <h3>${project.title}</h3>
                <p class="project-description">
                    ${project.shortDescription}
                </p>
                <div class="project-technologies">
                    ${technologies}
                </div>
                <ul class="project-features">
                    ${visibleFeatures}
                </ul>

                ${
                    remaining > 0
                    ? `<p class="more-features">+${remaining} funcionalidades</p>`
                    : ""
                }

                <div class="project-buttons">

                    <button
                        class="btn-primary open-project"
                        data-project="${project.id}">

                        Saber mais
                    </button>

                    ${
                        project.github
                        ? `
                        <a
                        href="${project.github}"
                        class="btn-secondary"
                        target="_blank">

                        GitHub

                        </a>
                        `
                        : `<div class="empty-button-space"></div>`
                    }
                </div>
            </div>
        </article>
`;

}