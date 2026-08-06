export function initializeCarousels() {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach(carousel => {

        const images = carousel.querySelectorAll(".carousel-images img");
        const prev = carousel.querySelector(".prev");
        const next = carousel.querySelector(".next");
        const dotsContainer = carousel.querySelector(".carousel-dots");

        let current = 0;

        // Criar bolinhas
        images.forEach((_, index) => {

            const dot = document.createElement("span");

            if(index === 0){
                dot.classList.add("active");
            }

            dot.addEventListener("click", () => {
                current = index;
                updateCarousel();
            });

            dotsContainer.appendChild(dot);

        });

        const dots = dotsContainer.querySelectorAll("span");

        function updateCarousel(){

            images.forEach(img => img.classList.remove("active"));
            dots.forEach(dot => dot.classList.remove("active"));

            images[current].classList.add("active");
            dots[current].classList.add("active");

        }

        next.addEventListener("click", () => {

            current++;

            if(current >= images.length){
                current = 0;
            }

            updateCarousel();
        });

        prev.addEventListener("click", () => {

            current--;

            if(current < 0){
                current = images.length - 1;
            }

            updateCarousel();
        });
    });
}