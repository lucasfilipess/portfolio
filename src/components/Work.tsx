import React, { ElementType } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { UserCircleIcon } from '@heroicons/react/outline'
import { LOCALE } from '../../locale'

export type ClientProps = {
  name: string
  comment: string
}

export type PortfolioProps = {
  icon: ElementType
  title: string
  description: string
  href?: string
  client?: ClientProps
  coverImage: string
}

export type Props = {
  portfolio: PortfolioProps[]
}

const Work = ({ portfolio }: Props) => {
  const { locale } = useRouter()
  const { landing } = LOCALE[locale === 'en-US' ? 'en-US' : 'pt-BR']

  return (
    <>
      {portfolio.map(
        ({ icon: Icon, title, description, href, client, coverImage }, index) =>
          index % 2 === 0 ? (
            <div key={`job-${index}`} className="relative">
              <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                  <div>
                    <div>
                      <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-teal-500 to-cyan-600">
                        <Icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <div className="mt-6">
                      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                        {title}
                      </h2>
                      <p className="mt-4 text-lg text-justify text-gray-500">
                        {description}
                      </p>
                      {href && (
                        <div className="mt-6">
                          <a
                            href={href}
                            target="_blank"
                            className="inline-flex bg-gradient-to-r from-teal-500 to-cyan-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-teal-600 hover:to-cyan-700"
                            rel="noreferrer"
                          >
                            {landing.viewButton}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                  {client && (
                    <div className="mt-8 border-t border-gray-200 pt-6">
                      <blockquote>
                        <div>
                          <p className="text-base text-gray-500">
                            {client.comment !== '' &&
                              `&ldquo;${client.comment}&rdquo;`}
                          </p>
                        </div>
                        <footer className="mt-3">
                          <div className="flex items-center space-x-3">
                            <div className="flex-shrink-0">
                              <span>
                                <UserCircleIcon
                                  className="h-6 w-6 text-cyan-600"
                                  aria-hidden="true"
                                />
                              </span>
                            </div>
                            <div className="text-base font-medium text-gray-700">
                              {client.name}
                            </div>
                          </div>
                        </footer>
                      </blockquote>
                    </div>
                  )}
                </div>
                <div className="px-4 mt-12 sm:mt-16 lg:relative lg:mt-0">
                  <div className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:-right-48 lg:absolute lg:left-0 lg:w-auto lg:max-w-none">
                    <Image
                      width={1440}
                      height={900}
                      quality={100}
                      src={coverImage}
                      objectFit="cover"
                      alt="Cover image from project developed by Lucas Filipe"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div key={`job-${index}`} className="mt-24">
              <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                  <div>
                    <div>
                      <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-teal-500 to-cyan-600">
                        <Icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <div className="mt-6">
                      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                        {title}
                      </h2>
                      <p className="mt-4 text-lg text-justify text-gray-500">
                        {description}
                      </p>
                      {href && (
                        <div className="mt-6">
                          <a
                            href={href}
                            target="_blank"
                            className="inline-flex bg-gradient-to-r from-teal-500 to-cyan-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-teal-600 hover:to-cyan-700"
                            rel="noreferrer"
                          >
                            {landing.viewButton}
                          </a>
                        </div>
                      )}
                    </div>
                    {client && (
                      <div className="mt-8 border-t border-gray-200 pt-6">
                        <blockquote>
                          <div>
                            <p className="text-base text-gray-500">
                              &ldquo;{client.comment}&rdquo;
                            </p>
                          </div>
                          <footer className="mt-3">
                            <div className="flex items-center space-x-3">
                              <div className="flex-shrink-0">
                                <span>
                                  <UserCircleIcon
                                    className="h-6 w-6 text-cyan-600"
                                    aria-hidden="true"
                                  />
                                </span>
                              </div>
                              <div className="text-base font-medium text-gray-700">
                                {client.name}
                              </div>
                            </div>
                          </footer>
                        </blockquote>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-12 px-4 sm:mt-16 lg:relative lg:mt-0 lg:col-start-1">
                  <div className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:-left-48 lg:absolute lg:right-0 lg:w-auto lg:max-w-none">
                    <Image
                      width={1440}
                      height={900}
                      quality={100}
                      src={coverImage}
                      objectFit="cover"
                      alt="Cover image from project developed by Lucas Filipe"
                    />
                  </div>
                </div>
              </div>
            </div>
          )
      )}
    </>
  )
}
export default Work
