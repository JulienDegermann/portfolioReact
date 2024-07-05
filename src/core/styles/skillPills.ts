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


// define skills categories
const frontSkills = [
  'html',
  'css',
  'javascript',
  'java script',
  'react',
  'reactjs',
  'reactnative',
  'react js',
  'react native',
  'tailwind',
  'twig',
  'typescript',
  'type script',
  'sass',
  'bootstrap',
  'jquery',
  'vue',
  'nuxt',
  'angular',
  'wordpress',
  'material-ui',
  'bulma',
  'materialui',
  'api-platform',
  'apiplatform',
  'seo',
]
const backSkills = [
  'php',
  'nodes',
  'symfony',
  'express',
  'mongodb',
  'mysql',
  'postgresql',
  'sql',
  'api',
  'api platform',
  'rest',
  'graphql',

]
const designSkills = [
  'figma',
  'adobe xd',
  'photoshop',
  'illustrator',
  'ux',
  'ui'
]
const communicationSkills = ['mail',
  'slack',
  'discord',
  'whatsapp',
  'meet',
  'zoom',
  'teams'
]
const DevToolsSkills = [
  'git',
  'github',
  'gitflow',
  'ci/cd',
  'gitlab',
  'vscode',
  'terminal',
  'postman',
  'trello',
  'kanban',
  'notion',
  'scrum',
  'agile'
]


export const customStyles = (skill: SkillProps) => {
  if (frontSkills.includes(skill.name.toLowerCase())) {
    return {
      background: Colors.PRIMARY,
      color: Colors.DARK,
    }
  }

  if (backSkills.includes(skill.name.toLowerCase())) {
    return {
      background: Colors.DARK,
      color: Colors.LIGHT,
    }
  }

  if (DevToolsSkills.includes(skill.name.toLowerCase())) {
    return {
      background: Colors.LIGHT,
      color: Colors.DARK,
    }
  }
  if (communicationSkills.includes(skill.name.toLowerCase())) {
    return {
      background: 'transparent',
      color: Colors.DARK,
    }
  }
  if (designSkills.includes(skill.name.toLowerCase())) {
    return {
      background: Colors.SECONDARY,
      color: Colors.LIGHT,
    }
  }
}

