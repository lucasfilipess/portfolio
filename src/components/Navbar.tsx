import { Fragment, RefObject, useState, useEffect } from 'react'
import Image from 'next/image'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { scrollTo } from 'utils'

export type NavigationProps = {
  name: string
  ref: RefObject<HTMLDivElement>
  duration?: number
}

export type Props = {
  navigation: NavigationProps[]
}

const Navbar = ({ navigation }: Props) => {
  const [fixed, setFixed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setFixed(window.scrollY > 35)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Popover as="header" className="relative">
        <div className="bg-gray-900 pt-6 w-full transition duration-700 ease-in-out md:fixed md:z-10 lg:fixed lg:z-10">
          <nav
            className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span className="sr-only">Lucas Filipe</span>
                  <Image
                    className="h-8 w-auto sm:h-10"
                    width={40}
                    height={40}
                    quality={100}
                    src="/img/logo.png"
                    alt="Logo"
                  />
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="hidden space-x-8 md:flex md:ml-10">
                {navigation.map(({ ref, name, duration }) => (
                  <button
                    key={`${name}-menu`}
                    className="text-base font-medium text-white hover:text-gray-300"
                    onClick={() => scrollTo({ ref, duration })}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>
        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 z-20 inset-x-0 p-2 transition transform origin-top md:hidden"
          >
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <Image
                    height={40}
                    width={40}
                    quality={100}
                    className="h-8 w-auto"
                    src="/img/logo.png"
                    alt="Logo"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="px-2 space-y-1">
                  {navigation.map(({ ref, name, duration }) => (
                    <button
                      key={`${name}-menu`}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                      onClick={() => scrollTo({ ref, duration })}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  )
}

export default Navbar
