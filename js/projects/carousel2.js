const carouselStates = {};

export function initializeCarousels() {

    const carousels = document.querySelectorAll(".project-carousel");
    carousels.forEach(createCarousel);
}

function createCarousel(carousel) {
    const projectId = carousel.dataset.project;
    const images = carousel.querySelectorAll(".carousel-images img");
    const prev = carousel.querySelector(".prev");
    const next = carousel.querySelector(".next");
    const dotsContainer = carousel.querySelector(".carousel-dots");

    let current = carouselStates[projectId] ?? 0;

    if (images.length <= 1) {
        prev.style.display = "none";
        next.style.display = "none";

        return;
    }

    images.forEach((_, index) => {

        const dot = document.createElement("span");

        if (index === 0) {
            dot.classList.add("active");
        }
        dot.addEventListener("click", () => {
            showImage(index);
        });

        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll("span");

    if(current >= images.length){
        current = 0;
    }

    function showImage(index) {
        images.forEach(image => image.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));
        current = index;

        carouselStates[projectId] = current;

        images[current].classList.add("active");
        dots[current].classList.add("active");
    }

    showImage(current);
    
    next.addEventListener("click", () => {
        const nextIndex = (current + 1) % images.length;
        showImage(nextIndex);
    });

    prev.addEventListener("click", () => {
        const prevIndex = (current - 1 + images.length) % images.length;
        showImage(prevIndex);
    });
}