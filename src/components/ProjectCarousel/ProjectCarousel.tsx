import { Colors } from "../../core/colors";
import ProjectCard, { ProjectProps } from "../Cards/ProjectCard.tsx";
import { useState } from 'react';
import { projects } from './index.ts'
import Link from "../Link";


export default function ProjectCarousel() {

  const [hovered, setHovered] = useState(false)

  const [showProject, setShowProject] = useState<ProjectProps>(projects[0])

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
        <iframe src={showProject.link} width="100%" height="100%"></iframe>
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
              {showProject.title}
            </h2>
            <p>{showProject.description}</p>

          </div>

          <Link
            color={Colors.PRIMARY}
            text="Voir le projet"
            link={showProject.link}
          />

        </div>
      </div>
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