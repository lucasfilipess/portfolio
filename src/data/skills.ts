import {
  SiJavascript,
  SiTypescript,
  SiNextDotJs,
  SiStyledComponents
} from 'react-icons/si'
import { useRouter } from 'next/router'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiDatabase } from 'react-icons/di'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { Props as SkillProps } from 'components/Skill'
import { LOCALE } from '../../locale'

export const SKILLS = (): SkillProps[] => {
  const { locale } = useRouter()
  const { skills } = LOCALE[locale === 'en-US' ? 'en-US' : 'pt-BR']
  return [
    {
      name: skills[0].name,
      description: skills[0].description,
      icon: AiFillHtml5
    },
    {
      name: skills[1].name,
      description: skills[1].description,
      icon: DiCss3
    },
    {
      name: skills[2].name,
      description: skills[2].description,
      icon: SiJavascript
    },
    {
      name: skills[3].name,
      description: skills[3].description,
      icon: SiTypescript
    },
    {
      name: skills[4].name,
      description: skills[4].description,
      icon: FaReact
    },
    {
      name: skills[5].name,
      description: skills[5].description,
      icon: SiNextDotJs
    },
    {
      name: skills[6].name,
      description: skills[6].description,
      icon: SiStyledComponents
    },
    {
      name: skills[7].name,
      description: skills[7].description,
      icon: FaNodeJs
    },
    {
      name: skills[8].name,
      description: skills[8].description,
      icon: DiDatabase
    }
  ]
}
