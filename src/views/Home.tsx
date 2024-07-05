import Contact from "../components/sections/Contact";
import Presents from "../components/sections/Presents";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Values from "../components/sections/Values";

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