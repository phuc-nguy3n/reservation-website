import { useState } from 'react'
import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'

type NavItem = {
  name: string
  path: string
  current?: boolean
}

type Nav = NavItem[]

const Header = () => {
  const navList: Nav = [
    { name: 'Home', path: '#', current: false },
    { name: 'About', path: '#about', current: false },
    { name: 'Blog', path: '#blog', current: true }
  ]

  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  const [navItems, setNavItems] = useState<Nav>(navList)

  const activeNavItem = (item: NavItem) => {
    const updatedNavItems = navItems.map((navItem) => {
      if (navItem === item) {
        return { ...navItem, current: true }
      } else {
        return { ...navItem, current: false }
      }
    })

    setNavItems(updatedNavItems)
  }

  return (
    <>
      <header className='bg-white'>
        <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8' aria-label='Global'>
          <div className='flex lg:flex-1'>
            <a href='/' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <img
                className='h-8 w-auto'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                alt=''
              />
            </a>
          </div>

          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>

          <PopoverGroup className='hidden items-center lg:flex lg:gap-x-12'>
            {navItems.map((item) => (
              <a
                key={'nav-' + item.name}
                href={item.path}
                className={`${item.current ? 'text-gray-500' : 'text-gray-900'} text-sm font-semibold leading-6 hover:text-gray-500`}
                onClick={() => activeNavItem(item)}
              >
                {item.name}
              </a>
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
                    <a
                      key={'nav-' + item.name}
                      href={item.path}
                      className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                    >
                      {item.name}
                    </a>
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
