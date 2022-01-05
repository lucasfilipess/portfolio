import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

type Props = {
  dark?: boolean
}

const LocaleSwitcher = ({ dark = false }: Props) => {
  const router = useRouter()
  const { locales, locale: activeLocale } = router

  return (
    <div className="flex items-center">
      {locales?.map((locale, index) => {
        const { pathname, query, asPath } = router
        return (
          <div key={`locale-${index}`}>
            <Link href={{ pathname, query }} as={asPath} locale={locale}>
              <a className="flex items-center justify-center px-4 py-2 text-sm">
                <Image
                  src={
                    locale === 'en-US'
                      ? '/img/united-states.png'
                      : locale === 'pt-BR'
                      ? '/img/brazil.png'
                      : ''
                  }
                  width={20}
                  height={20}
                  quality={100}
                />
                <span
                  className={`ml-2 ${
                    activeLocale === locale
                      ? 'text-cyan-600 hover:text-cyan-500'
                      : dark
                      ? 'text-gray-900 hover:bg-gray-50'
                      : 'text-white hover:text-gray-300'
                  }`}
                >
                  {locale === 'en-US'
                    ? 'English'
                    : locale === 'pt-BR'
                    ? 'Português'
                    : ''}
                </span>
              </a>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
export default LocaleSwitcher
