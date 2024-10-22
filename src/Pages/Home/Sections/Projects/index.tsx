import Section from "../../../../components/Section";
import './styles.css';
import ProjectCarousel from "./ProjectCarousel";

import {useContext} from "react"
import {ProjectContext} from "../../../../hooks/contexts/useProjects.tsx"
import {ProjectProps} from "./ProjectCarousel";


export default function Projects() {
    const projects: ProjectProps[] = useContext(ProjectContext);

    console.log(projects)
    return (
        <Section id="projects" title="Mes créations" large={true}>
            <ul id={'creationsWrapper'}>
                {projects.map(
                    (project, index) =>
                        <li className={'creation'} key={index}>
                            <a href={project.url}>
                                <h2>{project.title} </h2>
                                <p>Technos : {project.stacks?.map(stack => stack.name).join(', ')}</p>
                            </a>
                        </li>
                )}

            </ul>
            {/*<ProjectCarousel/>*/}
        </Section>
    )
}