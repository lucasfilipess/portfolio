import Image from 'next/image'
import { useRouter } from 'next/router'
import { ChevronRightIcon } from '@heroicons/react/solid'
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineInstagram
} from 'react-icons/ai'
import { SiUpwork } from 'react-icons/si'
import { LOCALE } from '../../locale'

const Hero = () => {
  const { locale } = useRouter()
  const { hero } = LOCALE[locale === 'en-US' ? 'en-US' : 'pt-BR']
  return (
    <div
      id="hero"
      className="flex items-center pt-10 h-hero bg-gray-900 sm:pt-16 md:h-screen lg:h-screen lg:pt-8 lg:pb-14 lg:overflow-hidden"
    >
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <a
                href="https://github.com/lucasfilipess?tab=repositories"
                target="_blank"
                className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                rel="noreferrer"
              >
                <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full">
                  Github
                </span>
                <span className="ml-4 text-sm">{hero.github}</span>
                <ChevronRightIcon
                  className="ml-2 w-5 h-5 text-gray-500"
                  aria-hidden="true"
                />
              </a>
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block">Lucas Filipe</span>
                <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5">
                  {hero.office}
                </span>
              </h1>
              <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                {hero.description1}{' '}
                <a
                  href="https://techmindit.com.br/site/"
                  target="_blank"
                  className="bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5"
                  rel="noreferrer"
                >
                  Techmind
                </a>{' '}
                {hero.description2}{' '}
                <a
                  href="https://lecode.dev/"
                  target="_blank"
                  className="bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5 "
                  rel="noreferrer"
                >
                  LeCode
                </a>{' '}
                {hero.description3}
              </p>
              <div className="mt-10 sm:mt-12">
                <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                  <div className="sm:flex justify-start items-center">
                    <div className="flex items-center mt-3 w-full sm:mt-0">
                      <a
                        href="mailto: lucasfilipedasilvasouza@gmail.com"
                        className="text-center block w-1/2 py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900 md:w-1/3 lg:w-1/3 "
                      >
                        {hero.contact}
                      </a>
                      <div className="flex items-center gap-6 ml-auto md:mx-auto lg:mx-auto">
                        <a
                          href="https://www.upwork.com/o/profiles/users/~01b27157790dd28700/"
                          target="_blank"
                          className="text-gray-300 hover:text-gray-100"
                          rel="noreferrer"
                        >
                          <SiUpwork className="h-6 w-6" />
                        </a>
                        <a
                          href="https://github.com/lucasfilipess"
                          target="_blank"
                          className="text-gray-300 hover:text-gray-100"
                          rel="noreferrer"
                        >
                          <AiFillGithub className="h-6 w-6" />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/lucas-souza-95b867174"
                          target="_blank"
                          className="text-gray-300 hover:text-gray-100"
                          rel="noreferrer"
                        >
                          <AiFillLinkedin className="h-6 w-6" />
                        </a>
                        <a
                          href="https://www.instagram.com/lucasfilipess/"
                          target="_blank"
                          className="text-gray-300 hover:text-gray-100"
                          rel="noreferrer"
                        >
                          <AiOutlineInstagram className="h-6 w-6" />
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              <Image
                className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/img/hero.svg"
                quality={100}
                width={634.625}
                height={540}
                alt="Hero illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero
