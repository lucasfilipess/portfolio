import { SiUpwork } from 'react-icons/si'
import { useRouter } from 'next/router'
import { AiOutlineLink, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { LOCALE } from '../../locale'

import Image from 'next/image'

export type MetricsProps = {
  stat: string
  emphasis: string
  rest: string
}

export type Props = {
  metrics: MetricsProps[]
}

const Lecode = ({ metrics }: Props) => {
  const { locale } = useRouter()
  const { lecode } = LOCALE[locale === 'en-US' ? 'en-US' : 'pt-BR']

  return (
    <div className="relative bg-gray-900">
      <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
          <div className="h-full xl:relative xl:col-start-2 overflow-hidden">
            <Image
              className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
              src="/img/team.png"
              alt="People working on laptops"
              width={712}
              height={692}
              quality={100}
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
            />
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
        <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <h2 className="text-sm font-semibold tracking-wide uppercase">
            <span className="bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent">
              Lecode
            </span>
          </h2>
          <p className="mt-3 text-3xl font-extrabold text-white">
            {lecode.title}
          </p>
          <p className="mt-5 text-lg text-gray-300">{lecode.subtitle}</p>
          <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
            {metrics.map(({ stat, emphasis, rest }, index) => (
              <p key={`metric-${index}`}>
                <span className="block text-2xl font-bold text-white">
                  {stat}
                </span>
                <span className="mt-1 block text-base text-gray-300">
                  <span className="font-medium text-white">{emphasis}</span>{' '}
                  {rest}
                </span>
              </p>
            ))}
          </div>
          <div className="flex items-center gap-6 justify-end mt-16 pr-5">
            <a href="https://lecode.dev/" target="_blank" rel="noreferrer">
              <AiOutlineLink className="h-6 w-6 text-white" />
            </a>
            <a
              href="https://www.upwork.com/ag/lecode/"
              target="_blank"
              rel="noreferrer"
            >
              <SiUpwork className="h-6 w-6 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/company/lecodedev"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin className="h-6 w-6 text-white" />
            </a>
            <a
              href="https://github.com/lecode-dev"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="h-6 w-6 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Lecode
