import { useState, useEffect, useRef } from "react";
import { ProjectContextProvider } from "./hooks/contexts/useProjects";
import Header from "./components/Header/Header";
import ScrollBar from "./components/ScrollBar";
import Presents from "./components/sections/Presents";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";


export default function App() {

  const [visibility, setVisibility] = useState(false)
  const lastTitle = useRef(document.title)

  /**
   * Change the title of the page when the tab is not visible
   */
  useEffect(() => {
    const handleVisibility = () => {
      document.title = visibility ? lastTitle.current : 'REVIENS !'
      visibility ? setVisibility(false) : setVisibility(true)
    }

    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [visibility])


  return (
    <>
      {/* <ScrollContextProvider> */}
        <ProjectContextProvider>
          <ScrollBar />
          <Header />
          <Presents />
          <Projects />
          <Skills />
        </ProjectContextProvider>
      {/* </ScrollContextProvider> */}
    </>
  )
}