import { GiBrain, GiHealthNormal } from 'react-icons/gi'
import { useRouter } from 'next/router'
import { LOCALE } from '../../locale'
import { PortfolioProps } from 'components/Work'

export const PORTFOLIO = (): PortfolioProps[] => {
  const { locale } = useRouter()
  const { portfolio } = LOCALE[locale === 'en-US' ? 'en-US' : 'pt-BR']
  return [
    {
      coverImage: '/img/ethicsnet.png',
      icon: GiBrain,
      title: portfolio[0].title,
      description: portfolio[0].description,
      href: 'https://chrome.google.com/webstore/detail/ethicsnet/djamiamgnjcpjhkknjddilkaibbhmhgc?hl=pt-br',
      client: {
        name: portfolio[0].client.name,
        comment: portfolio[0].client.comment
      }
    },
    {
      coverImage: '/img/bentcare.png',
      icon: GiHealthNormal,
      title: portfolio[1].title,
      description: portfolio[1].description,
      href: 'https://bentcare.com.br/',
      client: {
        name: portfolio[1].client.name,
        comment: portfolio[1].client.comment
      }
    }
  ]
}
