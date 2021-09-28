import { useRouter } from 'next/router'
import { MetricsProps } from '../components/Lecode'
import { LOCALE } from '../../locale'

export const METRICS = (): MetricsProps[] => {
  const { locale } = useRouter()
  const { metrics } = LOCALE[locale === 'en-US' ? 'en-US' : 'pt-BR']

  return [
    {
      stat: metrics[0].stat,
      emphasis: metrics[0].emphasis,
      rest: metrics[0].rest
    },
    {
      stat: metrics[1].stat,
      emphasis: metrics[1].emphasis,
      rest: metrics[1].rest
    },
    {
      stat: metrics[2].stat,
      emphasis: metrics[2].emphasis,
      rest: metrics[2].rest
    },
    {
      stat: metrics[3].stat,
      emphasis: metrics[3].emphasis,
      rest: metrics[3].rest
    }
  ]
}
