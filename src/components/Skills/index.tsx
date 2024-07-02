import { Colors } from "../../core/colors";

export const defaultStyles: defaultStylesProps = {
  padding: '1rem 2rem',
  margin: '.5rem',
  borderRadius: '1rem',
}


export const customStyles = (category: string) => {
  switch (category) {
    case 'front':
      return {
        background: Colors.PRIMARY,
        color: Colors.DARK,
        // border: `2px solid ${Colors.DARK}`,
      }
    case 'back':
      return {
        background: Colors.DARK,
        color: Colors.LIGHT,
        // border: `2px solid ${Colors.DARK}`,
      }
    case 'tool':
      return {
        background: Colors.LIGHT,
        color: Colors.DARK,
        // border: `2px solid ${Colors.DARK}`,
      }
    case 'communication':
      return {
        background: 'transparent',
        color: Colors.DARK,
        // border: `2px solid ${Colors.DARK}`,
      }
    case 'gestion':
      return {
        background: Colors.DARK,
        color: Colors.LIGHT,
        // border: `2px solid ${Colors.DARK}`,
      }
    case 'design':
      return {
        background: Colors.SECONDARY,
        color: Colors.LIGHT,
        // border: `2px solid ${Colors.LIGHT}`,
      }
    default:
      return {
        background: Colors.LIGHT,
        color: Colors.DARK,
        // border: `2px solid ${Colors.DARK}`,
      }
  }
}




interface defaultStylesProps {
  padding: string
  margin: string
  borderRadius: string
}

export const skills: SkillsProps[] = [
  {
    name: 'php',
    category: 'back'
  },
  {
    name: 'symfony',
    category: 'back'
  },
  {
    name: 'twig',
    category: 'front'
  },
  // {
  //   name: 'html',
  //   category: 'front'
  // },
  {
    name: 'javascript',
    category: 'front'
  },
  {
    name: 'typescript',
    category: 'front'
  },
  {
    name: 'react',
    category: 'front'
  },
  // {
  //   name: 'css',
  //   category: 'front'
  // },
  {
    name: 'sass',
    category: 'front'
  },
  {
    name: 'git',
    category: 'tool'
  },
  {
    name: 'github',
    category: 'tool'
  },
  {
    name: 'gitflow',
    category: 'backend'
  },
  {
    name: 'sql',
    category: 'back'
  },
  {
    name: 'mysql',
    category: 'back'
  },
  {
    name: 'wordpress',
    category: 'back'
  },
  {
    name: 'bootstrap',
    category: 'front'
  },
  {
    name: 'material-ui',
    category: 'front'
  },
  {
    name: 'api',
    category: 'back'
  },
  {
    name: 'api-platform',
    category: 'back'
  },
  {
    name: 'seo',
    category: 'front'
  },
  {
    name: 'vs code',
    category: 'tool'
  },
  {
    name: 'teams',
    category: 'communication'
  },
  {
    name: 'slack',
    category: 'communication'
  },
  {
    name: 'discord',
    category: 'communication'
  },
  {
    name: 'notion',
    category: 'tool'
  },
  {
    name: 'kanban',
    category: 'tool'
  },
  {
    name: 'scrum',
    category: 'tool'
  },
  {
    name: 'agile',
    category: 'tool'
  },
  {
    name: 'figma',
    category: 'design'
  },
  {
    name: 'ui',
    category: 'design'
  },
  {
    name: 'ux',
    category: 'design'
  },
]




export interface SkillsProps {
  name: string,
  category: string
}
export interface SkillProps {
  skill: SkillsProps
}



