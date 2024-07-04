import Section from "../Section";
import ProjectCarousel from "../ProjectCarousel/ProjectCarousel";

export default function Projects() {
  return (
    <Section id="projects" title="Projets" large={true}>
      <ProjectCarousel />
    </Section>
  )
}