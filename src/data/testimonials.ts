import { useRouter } from 'next/router'
import { Props as TestimonialProps } from 'components/Testimonial'
import { LOCALE } from '../../locale'

export const TESTIMONIALS = (): TestimonialProps[] => {
  const { locale } = useRouter()
  const { testimonials } = LOCALE[locale === 'en-US' ? 'en-US' : 'pt-BR']
  return [
    {
      project: testimonials[0].project,
      title: testimonials[0].title,
      comment: testimonials[0].comment,
      name: 'Flávio Henrique Ferreira',
      date: testimonials[0].date,
      datetime: '2021-01-21'
    },
    {
      project: testimonials[1].project,
      title: testimonials[1].title,
      comment: testimonials[1].comment,
      name: 'Rafael Velasco',
      date: testimonials[1].date,
      datetime: '2021-03-11'
    },
    {
      project: testimonials[2].project,
      title: testimonials[2].title,
      comment: testimonials[2].comment,
      name: 'John Havenar',
      date: testimonials[2].date,
      datetime: '2020-10-20'
    },
    {
      project: testimonials[3].project,
      title: testimonials[3].title,
      comment: testimonials[3].comment,
      name: 'Eleanor Watson',
      date: testimonials[3].date,
      datetime: '2021-08-23'
    },
    {
      project: testimonials[4].project,
      title: testimonials[4].title,
      comment: testimonials[4].comment,
      name: 'John Havenar',
      date: testimonials[4].date,
      datetime: '2020-11-22'
    }
  ]
}
