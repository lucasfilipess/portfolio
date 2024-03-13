import { GiBrain, GiHealthNormal, GiHouseKeys } from 'react-icons/gi'
import { IoMdCode } from "react-icons/io";
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
    },
    {
      coverImage: '/img/im-broker.png',
      icon: GiHouseKeys,
      title: portfolio[2].title,
      description: portfolio[2].description,
      href: 'https://imbroker.tec.br/',
      client: {
        name: portfolio[2].client.name,
        comment: portfolio[2].client.comment
      }
    },
    {
      coverImage: '/img/open-plc.png',
      icon: IoMdCode,
      title: portfolio[3].title,
      description: portfolio[3].description,
      href: 'https://autonomylogic.com/',
      client: {
        name: portfolio[3].client.name,
        comment: portfolio[3].client.comment
      }
    }
  ]
}
