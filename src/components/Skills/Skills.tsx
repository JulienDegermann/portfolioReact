import { defaultStyles, customStyles, SkillsProps } from "./index.tsx";
import { useState } from "react";

export default function Skills(
  { skill, key }: SkillProps
) {

  const [hovered, setHovered] = useState(false)

  return (
    <div
      key={key}
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
          ...customStyles(skill.category),
          ...{ 
            scale: hovered ? '2' : '1', 
            zIndex: hovered ? '1' : '0',
            transition: hovered ? 'scale .25s' : 'scale 1s',},
        }}
      > {skill.name.toUpperCase()} </p>
    </div >
  )
}


interface SkillProps {
  skill: SkillsProps
  key: number
}