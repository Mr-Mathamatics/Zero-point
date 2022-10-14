import React, { Fragment, useState, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import navigation from './Navigation/navigation'
import NoDp from '../../assets/Images/TopBar/noProfile.webp'

const classNames =(...classes)=>
{
  return classes.filter(Boolean).join(' ')
}

const  Header = () => { 

  const history = useHistory()

  const [token, setToken] = useState("");
  const [profileImage , setProfileImage] = useState("")
  useEffect(() => {

    const token = localStorage.getItem("token");
    const loginDetails = JSON.parse(localStorage.getItem("registeredUsers"))
    console.log(loginDetails)
    if(token){
      setToken(token)
      if(loginDetails && loginDetails.length)
      {
        setProfileImage(loginDetails[0].imageUrl)
        debugger
      }
    }
    }, []);

    //logout and removing token
  const handleLogout = () =>
  {
    localStorage.removeItem("token");
    history.push('/login')
  }

  return (
    <Disclosure as="nav" className="fixed top-0 w-full top-header">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  />
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-5">
                    {navigation.map((item) => (
                      <Link to={item.href} key={item.name}
                      className={classNames(
                        item.current ? 'active' : 'hover:',
                        'nav-link px-3 py-2 rounded-md font-medium'
                      )}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {  token ? 
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      
                      <img
                        className="h-8 w-8 rounded-full"
                        src={profileImage ? profileImage : NoDp}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                  
                    <Menu.Items className="profile-dropdown origin-top-right absolute right-0 mt-4 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div class="user-login py-2.5 px-4">
				    					<h6 class="name mb-0">John Deo</h6>
					    				<p class="profession mb-0">Software Engineer</p>
				    				</div>
                    <div className='user-profile'>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="dashboard"
                            className={classNames(active ? 'bg-gray-100' : '', 'profile-link block px-4 py-2.5 text-sm text-gray-700')}
                          >
                          <i class="fas fa-user"></i>  Profile Setting
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/add-cart"
                            className={classNames(active ? 'bg-gray-100' : '', 'profile-link block px-4 py-2.5 text-sm text-gray-700')}
                          >
                            <i class="fas fa-shopping-cart"></i> Cart
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            onClick={handleLogout}
                            className={classNames(active ? 'bg-gray-100' : '', 'profile-link block px-4 py-2.5 text-sm text-gray-700')}
                          >
                          <i class="fas fa-sign-out-alt"></i>  Sign out
                          </Link>
                        )}
                      </Menu.Item>
            
                    </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
                : <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                      {/* <span className="sr-only">Open user menu</span> */}
                      Account
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="account-dropdown origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="login"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2.5 text-sm text-gray-700')}
                          >
                          <i class="fa fa-sign-in" aria-hidden="true"></i>  Login
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="sign-up"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2.5 text-sm text-gray-700')}
                          >
                          <i class="fa fa-user-plus" aria-hidden="true"></i>  Signup
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                }
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
export default Header