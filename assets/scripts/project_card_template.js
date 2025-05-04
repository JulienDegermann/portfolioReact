export default function projectCardTemplate(project) {
    const card = document.createElement("a");
    card.href = project.link;
    card.className = "projects_card";
    card.target = "_blank";
    card.rel = "noopener noreferrer";

    card.innerHTML = `<img src="assets/images/${project.image}" alt="${
        project.title
    }" class="projects_card_image" />
    <div class="projects_text">
    <h4 class="projects_title">${
        project.title
    } <br /> <span class="projects_description">${project.description.toLowerCase()}<span></h4>
    <p class="projects_stacks">${project.stacks
        .map((stack) => `#${stack} `)
        .join(" ")}</p>
    </div>`;

    return card;
}
