import React , { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="relative bg-white overflow-hidden font-Roboto">
          <div className="max-w-7xl">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <svg
                className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>
    
              <Popover>
                {({ open }) => (
                  <>
                    <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                      <nav
                        className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                        aria-label="Global"
                      >
                        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                          <div className="flex items-center justify-between w-full md:w-auto">
                            <Link to="#">
                              <span className="sr-only">Workflow</span>
                              <img
                                className="h-8 w-auto sm:h-10"
                                src="https://csi-maghreb.com/media/2020/06/LOGO-MENUE.png"
                                alt="logo"
                              />
                            </Link>
                            <div className="-mr-2 flex items-center md:hidden">
                              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Open main menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                              </Popover.Button>
                            </div>
                          </div>
                        </div>
                      </nav>
                    </div>
    
                    <Transition
                      show={open}
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
                        static
                        className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                      >
                        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="px-5 pt-4 flex items-center justify-between">
                            <div>
                              <img
                                className="h-8 w-auto"
                                src="https://csi-maghreb.com/media/2020/06/LOGO-MENUE.png"
                                alt="Logo"
                              />
                            </div>
                            <div className="-mr-2">
                              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Close main menu</span>
                                <XIcon className="h-6 w-6" aria-hidden="true" />
                              </Popover.Button>
                            </div>
                          </div>
                          <Link
                            to="#"
                            className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                          >
                            Log in
                          </Link>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
    
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">With CSI maghreb for</span>{' '}
                    <span className="block text-csi-second xl:inline">Better business</span>
                  </h1>
                  <p className="text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      We are a North African IT services company at the service of manufacturers around the world to 
                      provide them with expert resources qualified in the implementation, support and TMA of ERP systems. 
                      We have a Focus on the QAD and SAP solution and we put our skills at your service for on-site or off-site 
                      projects (at the customer's site). 
                      We are open for partnerships with IT services companies of any nationality for outsourcing 
                      anywhere in the world at preferential and competitive rates. 
                      Our technical resources also master the development under Progress. Our resources are fluent in French, English and other languages. 
                      Our prestigious references are witnesses of our sustainability and success of projects based on customer satisfaction with the service provided in time and quality.
                  </p>
                  <div className="pt-6 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <Link
                        to="/dashboard"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-csi-primary hover:bg-csi-blue-gray-dark md:py-4 md:text-lg md:px-10"
                      >
                        Dashboard
                      </Link>
                    </div>
                    <div className="mt-1 sm:mt-0 sm:ml-3">
                      <Link
                        to="#"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-csi-second bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                      >
                        App
                      </Link>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="mt-4 lg:absolute lg:inset-y-0 lg:right-0">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              alt="ourimage"
            />
          </div>
        </div>
      );
}

export default Home
