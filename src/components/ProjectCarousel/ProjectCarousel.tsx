import { Colors } from "../../core/styles/colors.ts";
import ProjectCard from "../Cards/ProjectCard.tsx";
import { useContext, useEffect, useState } from 'react';
import Link from "../Link";
import { ProjectContext } from "../../hooks/contexts/useProjects.tsx";


export default function ProjectCarousel() {

  const [hovered, setHovered] = useState(false)

  const projects = useContext(ProjectContext)


  const [showProject, setShowProject] = useState<ProjectProps>({})

  useEffect(() => {
    setShowProject(projects[0])
  }, [projects])

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '1000px',
        margin: 'auto',
        height: '400px',
      }}
    >
      {showProject &&
        <div
          style={{
            width: '100%',
            height: '100%',
            border: '1px solid black',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '4px',
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <iframe src={showProject.url} width="100%" height="100%"></iframe>
          <div
            style={{
              position: 'absolute',
              bottom: '0',
              transition: 'all .5s',
              transform: hovered ? 'translateY(0)' : 'translateY(100%)',
              background: 'rgba(0, 0, 0, .75)',
              width: '100%',
              padding: '1rem',
              zIndex: 1000,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'inline-block',
                maxWidth: '75%',
              }}
            >
              <h2>
                {showProject.title ? showProject.title : 'Titre du projet'}
              </h2>
              <p>{showProject.need ? showProject.need : 'Besoins du projet'}</p>

            </div>

            <Link
              color={Colors.PRIMARY}
              text="Voir le projet"
              link={showProject.url}
            />

          </div>
        </div>
      }
      <div
        style={{
          flexDirection: 'column',
          width: 'max-content',
          height: 'max-content%',
          overflowY: 'scroll',
          overflowX: 'hidden',
          scrollbarWidth: 'none',
          minWidth: '100px',
        }}
      >
        {
          projects.map((project, index) => {
            return (
              <ProjectCard
                project={project}
                key={index}
                selector={setShowProject}
                selected={showProject === project ? true : false}
              />
            )
          })
        }
      </div>
    </div>

  )
}

export interface ProjectProps {
  title?: string
  need?: string
  action?: string
  url?: string
  images?: string[]
  industry?: string
  stack?: string[]
  createdAt?: string
  updatedAt?: string
}