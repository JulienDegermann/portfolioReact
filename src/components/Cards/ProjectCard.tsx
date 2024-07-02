// import { useEffect } from 'react'
import { Colors } from '../../core/colors'
// import axios from 'axios'

export default function ProjectCard(
  { project, selector, selected }: ProjectCardProps) {

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       console.log("start axios request")
  //       const res = await axios.get(project.link)
  //       console.log(res)
  //       const pasrser = new DOMParser()
  //       const doc = pasrser.parseFromString(res.data, 'text/html')
  //       // const metaTags = doc.querySelectorAll('meta[property^="og:"]')
  //       // console.log(metaTags)

  //     }
  //     catch (error) {
  //       console.error(project.title, error)
  //     }
  //   }

  //   getData()

  // }, [project.link])
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

export interface ProjectProps {
  title?: string
  description?: string
  image?: string
  link: string
  stacks?: string[]
}

interface ProjectCardProps {
  project: ProjectProps
  selector?: (project: ProjectProps) => void
  selected: boolean
}