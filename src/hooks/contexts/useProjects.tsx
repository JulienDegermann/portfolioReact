import axios from "axios"
import { useEffect, useState, createContext } from "react"
import { ProjectProps } from "../../components/ProjectCarousel/ProjectCarousel"


export const ProjectContext = createContext<ProjectProps[]>([])

export const ProjectContextProvider = ({ children }: Props) => {
  const [projects, setProjects] = useState([])

  const apiConnection = async () => {
    try {
      const datas = await axios.get('https://127.0.0.1:8002/api');
      setProjects(datas.data);
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    apiConnection();
  }, [])

  return (
    <ProjectContext.Provider
      value={projects}
    >
      {children}
    </ProjectContext.Provider>
  )
}

interface Props {
  children: JSX.Element | JSX.Element[]
}
