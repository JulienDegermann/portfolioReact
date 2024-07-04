// import { ProjectContext } from "../hooks/contexts/useProjects.tsx";
// import { useContext, useState } from "react";
import { useState } from "react";
import { defaultStyles, customStyles } from "../core/styles/skillPills.ts";
import { SkillProps } from "../core/datas/skills.ts";


interface Props {
  skill: SkillProps
}

export default function SkillPill(
  { skill }: Props
) {

  const [hovered, setHovered] = useState(false)

  // const projects = useContext(ProjectContext)

  return (
    <div
      // key={key}
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      <p
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          ...defaultStyles,
          ...customStyles(skill),
          ...{
            scale: hovered ? '2' : '1',
            zIndex: hovered ? '1' : '0',
            transition: hovered ? 'scale .25s' : 'scale 1s',
          },
        }}
      > {skill.name.toUpperCase()} </p>
    </div >
  )
}