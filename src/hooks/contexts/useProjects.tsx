// import axios from "axios";
import { useEffect, useState, createContext } from "react";
import { ProjectProps } from "../../components/Cards/Card";
import { projectsAll } from "../../core/datas/projects";

export const ProjectContext = createContext<ProjectProps[]>([]);

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const ProjectContextProvider = ({ children }: Props) => {
  const [projects, setProjects] = useState<ProjectProps[]>([]);
  const apiConnection = async () => {
    try {
      // const datas = await axios.get("https://127.0.0.1:8000/api");
      // setProjects(datas.data.projects);
      setProjects(projectsAll);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    apiConnection();
  }, []);

  return (
    <ProjectContext.Provider value={projects}>
      {children}
    </ProjectContext.Provider>
  );
};