import {
  SiJavascript,
  SiTypescript,
  SiNextDotJs,
  SiStyledComponents
} from 'react-icons/si'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiDatabase } from 'react-icons/di'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { Props as SkillProps } from 'components/Skill'

export const SKILLS: SkillProps[] = [
  {
    name: 'HTML5',
    description:
      'HTML5 is a markup language for the World Wide Web and is key Internet technology.',
    icon: AiFillHtml5
  },
  {
    name: 'CSS3',
    description:
      'CSS3 is the third version of Cascading Style Sheets, which defines styles for a web project.',
    icon: DiCss3
  },
  {
    name: 'JavaScript',
    description:
      'JavaScript is a structured, high-level scripting interpreted programming language with weak dynamic typing and multiparadigm. ',
    icon: SiJavascript
  },
  {
    name: 'TypeScript',
    description:
      'TypeScript is a strict syntactic superset of JavaScript and adds optional static typing to the language.',
    icon: SiTypescript
  },
  {
    name: 'ReactJS',
    description:
      'ReactJS is an open source JavaScript library focused on creating user interfaces on web pages.',
    icon: FaReact
  },
  {
    name: 'NextJS',
    description:
      'NextJS is an open-source React front-end development web framework that enables server-side rendering and static website generation for web applications.',
    icon: SiNextDotJs
  },
  {
    name: 'Styled-Components',
    description:
      'Utilizing tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allow you to write actual CSS code to style your components.',
    icon: SiStyledComponents
  },
  {
    name: 'NodeJS',
    description: `NodeJs is open-source, cross-platform software based on ${"Google's"} V8 interpreter that allows JavaScript code to run outside of a web browser.`,
    icon: FaNodeJs
  },
  {
    name: 'Database',
    description: 'SQL and No-SQL databases',
    icon: DiDatabase
  }
]
