import React from 'react'
import { Disclosure, Menu } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/outline'


const AdminNav = () => {
    return (
        <Disclosure as="nav" className=" font-Roboto">
          {({ open }) => (
            <>
              <div className=" px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-end h-16">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    
                  <div className="flex mr-8">
                    <div className="relative ">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <button type="" className="p-1 focus:outline-none text-gray-300 focus:shadow-outline">
                          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 "><path className="" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </button>
                      </span>
                      <input type="search" name="q" className="py-2 text-sm text-white rounded-md pl-10 bg-csi-blue-gray-dark focus:outline-none focus:bg-csi-primary focus:text-gray-50" placeholder="Search..." autoComplete="off"></input>
                    </div>
                  </div>

                    <button className="bg-csi-primary p-1 rounded-full text-csi-bg-color hover:text-white focus:outline-none  focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
    
                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-8 relative">
                      {({ open }) => (
                        <>
                          <div>
                            <Menu.Button className="bg-gray-800 flex justify-start text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                              <span className="sr-only">Open user menu</span>
                              <img
                                className="h-8 w-8 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                              />
                            </Menu.Button>
                          </div>
                        </>
                      )}
                    </Menu>
                  </div>
                </div>
              </div>
            </>
          )}
        </Disclosure>
      )
}

export default AdminNav
