import { ElementType, RefObject } from 'react'
import { useRouter } from 'next/router'
import { scrollTo } from 'utils'
import { LOCALE } from '../../locale'

export type MainProps = {
  name: string
  ref: RefObject<HTMLDivElement>
}

export type SocialProps = {
  name: string
  href: string
  icon: ElementType
}

export type NavigationProps = {
  main: MainProps[]
  social: SocialProps[]
}

export type Props = {
  navigation: NavigationProps
}

const Footer = ({ navigation }: Props) => {
  const { locale } = useRouter()
  const { footer } = LOCALE[locale === 'en-US' ? 'en-US' : 'pt-BR']
  return (
    <footer className="mt-24 bg-white sm:mt-12">
      <div className="mx-auto max-w-md py-12 px-4 overflow-hidden sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.main.map(({ ref, name }, index) => (
            <div key={`menu-${index}`} className="px-5 py-2">
              <button
                onClick={() => scrollTo({ ref })}
                className="text-base text-gray-400 hover:text-gray-300"
              >
                {name}
              </button>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map(({ name, href, icon: Icon }, index) => (
            <a
              key={`menu-${index}`}
              href={href}
              className="text-gray-400 hover:text-gray-300"
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only">{name}</span>
              <Icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; {footer}
        </p>
      </div>
    </footer>
  )
}

export default Footer
