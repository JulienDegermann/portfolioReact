import Section from "../../../../components/Section";
import "./styles.css";

import { useContext } from "react";
import { ProjectContext } from "../../../../hooks/contexts/useProjects.tsx";
import { ProjectProps } from "./ProjectCarousel";

export default function Projects() {
    const projects: ProjectProps[] = useContext(ProjectContext);

    return (
        <Section id="projects" title="Mes créations" large={true}>
            <ul id={"creationsWrapper"}>
                {projects.map((project, index) => (
                    <li className={"project"} key={index}>
                        <a href={project.link}>
                            <h2 className="projectsTitle">{project.title} </h2>
                            <p className="projectsDescription">{project.description}</p>
                            <p className="projectsStacks">
                                {project.stacks
                                    ?.map((stack) => `#${stack}`)
                                    .join(" ")}
                            </p>
                        </a>
                    </li>
                ))}
            </ul>
            {/*<ProjectCarousel/>*/}
        </Section>
    );
}
