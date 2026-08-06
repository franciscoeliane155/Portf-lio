export function initializeTopbar() {
    let lastScroll = 0;

    const navbar = document.querySelector(".topbar");

    if (!navbar) return;

    const navbarHeight = 85;

    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 20) {
            navbar.classList.remove("hide");
            navbar.classList.remove("scrolled");
            lastScroll = currentScroll;

            return;
        }

        navbar.classList.add("scrolled");

        if (Math.abs(currentScroll - lastScroll) <= 10) return;

        if (currentScroll > lastScroll && currentScroll > navbarHeight) {

            navbar.classList.add("hide");

        } else if (currentScroll < lastScroll) {

            navbar.classList.remove("hide");

        }

        lastScroll = currentScroll;
    });
}