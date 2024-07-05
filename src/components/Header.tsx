import { useState } from 'react'
import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom'

type NavItem = {
  name: string
  path: string
}

type Nav = NavItem[]

const Header = () => {
  const navList: Nav = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' }
  ]

  const location = useLocation()

  const getLinkClass = (path: string) => {
    return location.pathname === path ? 'text-gray-500' : 'text-gray-700'
  }

  const getLinkMobileClass = (path: string) => {
    return location.pathname === path ? 'bg-gray-50 ' : ''
  }

  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  const [navItems, setNavItems] = useState<Nav>(navList)

  return (
    <>
      <header className='bg-white'>
        <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8' aria-label='Global'>
          <div className='flex lg:flex-1'>
            <Link
              onClick={() => {
                setNavItems(navList)
              }}
              to='/'
              className='-m-1.5 p-1.5'
            >
              <span className='sr-only'>Your Company</span>
              <img
                className='h-8 w-auto'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                alt=''
              />
            </Link>
          </div>

          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>

          <PopoverGroup className='hidden items-center lg:flex lg:gap-x-12'>
            {navItems.map((item) => (
              <Link
                key={'nav-' + item.name}
                to={item.path}
                className={`${getLinkClass(item.path)} text-sm font-semibold leading-6 hover:text-gray-500`}
              >
                {item.name}
              </Link>
            ))}
          </PopoverGroup>
        </nav>

        <Dialog className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className='fixed inset-0 z-10' />
          <DialogPanel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-end'>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-2 py-6'>
                  {navItems.map((item) => (
                    <Link
                      key={'nav-' + item.name}
                      to={item.path}
                      className={`${getLinkMobileClass(item.path)}-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </>
  )
}

export default Header
