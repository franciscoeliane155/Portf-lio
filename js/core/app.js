import { initializeTopbar } from "./topbar.js";

initializeTopbar();

const page = document.body.dataset.page;

async function loadPage() {
    
    switch (page) {
        case "home": {
            const module = await import("../home/home.js");
            module.initializeHome();
            break;
        }

        case "projects": {
            const module = await import("../projects/projects.js");
            module.initializeProjects();
            break;
        }

        case "aboutMe": {
            const module = await import("../aboutMe/aboutMe.js");
            module.initializeAbout();
            break;
        }

        case "certificates": {
            const module = await import("../certificates/certificates.js");
            module.initializeCertificates?.();
            break;
        }

        case "contacts": {
            const module = await import("../contacts/contacts.js");
            module.initializeContacts?.();
            break;
        }
    }
}

loadPage();