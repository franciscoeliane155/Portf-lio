import { initializeCertificateModal } from "./certificateModal.js";

export function initializeCertificates() {

    initializeCertificateModal();

    if (window.lucide) {
        lucide.createIcons();
    }
}