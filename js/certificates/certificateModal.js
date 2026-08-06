import { certificates } from "./certificateFiles.js";

export function initializeCertificateModal() {

    const modal = document.getElementById("certificateModal");
    const body = document.getElementById("certificateBody");

    if (!modal || !body) return;

    const overlay = modal.querySelector(".modal-overlay");
    const closeBtn = modal.querySelector(".close-certificate");

    document.querySelectorAll(".certificate-button").forEach(button => {
        button.addEventListener("click", () => {
            const id = button.dataset.certificate;
            const certificate = certificates.find(item => item.id === id);
            if (!certificate) return;
            body.innerHTML = `
                <iframe
                    src="${certificate.file}"
                    title="${certificate.title}">
                </iframe>
            `;
            modal.classList.add("show");
            lucide.createIcons();
        });
    });

    function closeModal() {
        modal.classList.remove("show");
        body.innerHTML = "";
    }

    overlay.addEventListener("click", closeModal);
    closeBtn.addEventListener("click", closeModal);
}