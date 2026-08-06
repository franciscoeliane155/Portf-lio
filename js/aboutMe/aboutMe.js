export function initializeAbout() {

    const data = [

        {
            year: "2022",
            title: "Onde tudo começou",
            description: "Iniciei o curso de Técnico de Gestão e Programação de Sistemas Informáticos, onde descobri a programação."
        },

        {
            year: "2023",
            title: "Primeiros desafios",
            description: "Passei da teoria para a prática ao desenvolver aplicações desktop."
        },

        {
            year: "2024",
            title: "Descobrir a Web",
            description: "Comecei a desenvolver websites e aplicações web."
        },

        {
            year: "2025",
            title: "Descobrir a Web",
            description: "Comecei a desenvolver websites e aplicações web."
        },

        {
            year: "2026",
            title: "Descobrir a Web",
            description: "Comecei a desenvolver websites e aplicações web."
        }

    ];

    const timeline = document.getElementById("timeline");
    const content = document.getElementById("aboutContent");

    if (!timeline || !content) return;

    function showContent(index){

        const item = data[index];

        content.innerHTML = `

            <span class="about-year">
                ${item.year}
            </span>

            <h3>
                ${item.title}
            </h3>

            <p>
                ${item.description}
            </p>

        `;

        document.querySelectorAll(".timeline-item").forEach(card => {
            card.classList.remove("active");
        });

        document
            .querySelector(`.timeline-item[data-index="${index}"]`)
            .classList.add("active");

    }

    timeline.innerHTML = data.map((item,index)=>`
        <div class="timeline-item" data-index="${index}">
            ${item.year}
        </div>
    `).join("");

    document.querySelectorAll(".timeline-item").forEach(card=>{
        card.addEventListener("click",()=>{
            showContent(Number(card.dataset.index));
        });
    });

    showContent(0);

    if(window.lucide){
        lucide.createIcons();
    }
}