import Contact from "../Layout/Body/Sections/Contact";
import Presents from "../Layout/Body/Sections/Presents";
import Projects from "../Layout/Body/Sections/Projects";
import Skills from "../Layout/Body/Sections/Skills";
import Values from "../Layout/Body/Sections/Values";

/**
 * displays home page content
 * @returns JSX.Element
 */
export default function Home() {
  return (
    <>
      <Presents />
      <Values />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}