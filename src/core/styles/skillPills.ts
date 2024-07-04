import { SkillProps } from "../datas/skills.ts";
import { Colors } from "../styles/colors";


interface defaultStylesProps {
  padding: string
  margin: string
  borderRadius: string
}

export const defaultStyles: defaultStylesProps = {
  padding: '1rem 2rem',
  margin: '.5rem',
  borderRadius: '1rem',
}




export const customStyles = (skill: SkillProps) => {
  switch (skill.category) {
    case 'front':
      return {
        background: Colors.PRIMARY,
        color: Colors.DARK,
      }
    case 'back':
      return {
        background: Colors.DARK,
        color: Colors.LIGHT,
      }
    case 'tool':
      return {
        background: Colors.LIGHT,
        color: Colors.DARK,
      }
    case 'communication':
      return {
        background: 'transparent',
        color: Colors.DARK,
      }
    case 'gestion':
      return {
        background: Colors.DARK,
        color: Colors.LIGHT,
      }
    case 'design':
      return {
        background: Colors.SECONDARY,
        color: Colors.LIGHT,
      }
    default:
      return {
        background: Colors.LIGHT,
        color: Colors.DARK,
      }
  }
}

