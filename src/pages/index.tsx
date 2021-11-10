import type { NextPage } from 'next'
import { useRef } from 'react'
import { useRouter } from 'next/router'
import { MdComputer } from 'react-icons/md'
import { GiSkills } from 'react-icons/gi'
import { NextSeo } from 'next-seo'
import {
  AiOutlineComment,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineInstagram
} from 'react-icons/ai'
import { SiUpwork } from 'react-icons/si'
import Navbar, { NavigationProps } from 'components/Navbar'
import Hero from 'components/Hero'
import Work from 'components/Work'
import Skill from 'components/Skill'
import About from 'components/About'
import Testimonial from 'components/Testimonial'
import Lecode from 'components/Lecode'
import Footer from 'components/Footer'
import { PORTFOLIO, SKILLS, TESTIMONIALS, METRICS } from 'data'
import { LOCALE } from '../../locale'

const Landing: NextPage = () => {
  const { locale } = useRouter()
  const { navbar, landing } = LOCALE[locale === 'en-US' ? 'en-US' : 'pt-BR']
  const worksRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const lecodeRef = useRef<HTMLDivElement>(null)

  const navigation = [
    { name: navbar.work, ref: worksRef },
    { name: navbar.skills, ref: skillsRef },
    { name: navbar.about, ref: aboutRef },
    { name: navbar.testimonials, ref: testimonialsRef },
    { name: 'Lecode', ref: lecodeRef }
  ]

  const navbarNavigation: NavigationProps[] = navigation
  const footerNavigation = {
    main: navigation,
    social: [
      {
        name: 'Upwork',
        href: 'https://www.upwork.com/o/profiles/users/~01b27157790dd28700/',
        icon: SiUpwork
      },
      {
        name: 'Github',
        href: 'https://github.com/lucasfilipess',
        icon: AiFillGithub
      },
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/lucas-souza-95b867174',
        icon: AiFillLinkedin
      },
      {
        name: 'Instagram',
        href: 'https://www.instagram.com/lucasfilipess/',
        icon: AiOutlineInstagram
      }
    ]
  }
  return (
    <>
      <NextSeo
        title="Lucas Filipe"
        description={landing.seoDescription}
        canonical="http://lucasfilipess.tech"
        openGraph={{
          url: 'https://lucasfilipess.tech',
          title: 'Lucas Filipe',
          description: landing.seoDescription,
          images: [
            {
              url: 'https://lucasfilipess.tech/img/cover.jpeg',
              width: 1280,
              height: 720,
              alt: 'Lucas Filipe'
            }
          ],
          site_name: 'Lucas Filipe'
        }}
      />
      <div className="bg-white">
        <div className="relative overflow-hidden">
          <Navbar navigation={navbarNavigation} />
          <main>
            <Hero />
            <div
              className="relative pt-16 pb-32 overflow-hidden bg-gray-50"
              ref={worksRef}
            >
              <div className="relative bg-gray-50 pb-24 pt-12">
                <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
                  <div className="flex justify-center items-center w-full">
                    <h2 className="text-2xl font-semibold tracking-wider text-cyan-600 uppercase">
                      {landing.works}
                    </h2>
                    <MdComputer
                      className="h-6 w-6 text-cyan-600 ml-1"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                    {landing.worksDescription}
                  </p>
                </div>
              </div>
              <Work portfolio={PORTFOLIO()} />
            </div>
            <div
              ref={skillsRef}
              className="relative bg-white py-16 sm:pt-24 lg:pt-32"
            >
              <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <div className="flex justify-center items-center w-full">
                  <h2 className="text-2xl font-semibold tracking-wider text-cyan-600 uppercase">
                    {landing.skills}
                  </h2>
                  <GiSkills
                    className="h-6 w-6 text-cyan-600 ml-1"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                  {landing.skillsDescription}
                </p>
                <div className="mt-12">
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {SKILLS().map(({ name, icon, description }, index) => (
                      <Skill
                        key={`skill-${index}`}
                        name={name}
                        icon={icon}
                        description={description}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:pt-24 lg:pt-32" ref={aboutRef}>
              <About />
            </div>
            <div
              ref={testimonialsRef}
              className="relative bg-gray-50 pt-16 sm:px-24 lg:px-32 sm:pt-24 lg:pt-32"
            >
              <div className="relative">
                <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                  <div className="flex justify-center items-center w-full">
                    <h2 className="text-2xl font-semibold tracking-wider text-cyan-600 uppercase">
                      {landing.testimonials}
                    </h2>
                    <AiOutlineComment
                      className="h-6 w-6 text-cyan-600 ml-1"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                    {landing.testimonialsDescription}
                  </p>
                </div>
                <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
                  {TESTIMONIALS().map(
                    (
                      { project, title, comment, name, date, datetime },
                      index
                    ) => (
                      <Testimonial
                        key={`testimonial-${index}`}
                        project={project}
                        title={title}
                        comment={comment}
                        name={name}
                        date={date}
                        datetime={datetime}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="pt-16" ref={lecodeRef}>
              <Lecode metrics={METRICS()} />
            </div>
          </main>
          <Footer navigation={footerNavigation} />
        </div>
      </div>
    </>
  )
}
export default Landing
