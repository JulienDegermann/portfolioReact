// import { useEffect } from 'react'

import { ProjectProps } from "../index.tsx"
import { Colors } from "../../../../../../core/styles/colors.ts"


// import axios from 'axios'

export default function ProjectCard(
  { project, selector, selected }: Props) {

  return (
    <div
      style={{
        width: '100px',
        height: '100px',
        border: selected ? `4px solid ${Colors.PRIMARY}` : `1px solid transparent`,
        background: selected ? Colors.DARK : 'transparent',
        cursor: 'pointer',
        // padding: '1rem',
        margin: '0',
      }}
      onClick={selector ? () => selector(project) : () => { return null }}
    >
      <h3
        style={{
          color: selected ? Colors.PRIMARY : Colors.DARK,
          textAlign: 'center',
          width: 'auto'
        }}
      >
        {project.title}
      </h3>
      {/* <img
        src={`assets/images/${project.image}`}
        alt={`image de ${project.title}`}
        style={{
          width: '90%',
          height: '100%',
          objectFit: 'cover'
        }}
      /> */}
    </div>
  )
}

interface Props {
  project: ProjectProps
  selector?: (project: ProjectProps) => void 
  selected: boolean
}