import Contact from "./Sections/Contact.tsx";
import Presents from "./Sections/Presents";
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills";
import Values from "./Sections/Values";

/**
 * displays home page content
 * @returns JSX.Element
 */
export default function Home() {
    return (
        <>
            <Presents/>
            <Skills/>
            <Values/>
            <Projects/>
            <Contact/>
        </>
    )
}