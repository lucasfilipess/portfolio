import { GiBrain, GiHealthNormal } from 'react-icons/gi'
import { PortfolioProps } from 'components/Work'

export const PORTFOLIO: PortfolioProps[] = [
  {
    coverImage: '/img/ethicsnet.png',
    icon: GiBrain,
    title: 'EthicsNet',
    description:
      'EthicsNet is building a community, one with the purpose of experimenting with different potential techniques to create datasets. EthicsNet is building a community, one with the purpose of experimenting with different potential techniques to create datasets – examples of nice behaviors (such as social norms), to help socialize A.I.',
    href: 'https://chrome.google.com/webstore/detail/ethicsnet/djamiamgnjcpjhkknjddilkaibbhmhgc?hl=pt-br',
    client: {
      name: 'Eleanor Watson',
      comment:
        'Thank you, Lucas, for all of your greatly valued technical and advisory assistance!'
    }
  },
  {
    coverImage: '/img/bentcare.png',
    icon: GiHealthNormal,
    title: 'Bentcare',
    description:
      'Bentcare has arrived to transform access to healthcare. Through a digital, modern, and versatile platform, it connects healthcare professionals to their patients in a faster, safer, more economical, and humanized way. Forget the traditional way of meeting and scheduling appointments and exams. Welcome to the reality of those who really want you well.',
    href: 'https://bentcare.com.br/',
    client: {
      name: 'Flávio Henrique Ferreira',
      comment: 'They have a good knowledge and worked very well.'
    }
  }
]
