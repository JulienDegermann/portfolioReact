import project_card_template from "./project_card_template.js";
import projects from "../datas/projects.js";

export default function insert_project() {
    const project_container = document.getElementById("projects_wrapper");

    projects.map((project) => {
        project_container.append(project_card_template(project));
    });
}
