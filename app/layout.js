"use client";

import "../styles/globals.css";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";

export default function MainLayout({ children }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <html lang="en">
      <head>
        <title>dali.a</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <>
          {/* Page Container */}
          <div
            id="page-container"
            className="flex flex-col mx-auto w-full min-h-screen bg-gray-100"
          >
            {/* Page Header */}
            <header
              id="page-header"
              className="flex flex-none items-center bg-white shadow-sm z-1"
            >
              <div className="container xl:max-w-7xl mx-auto px-4 lg:px-8">
                <div className="flex justify-between py-4">
                  {/* Left Section */}
                  <div className="flex items-center">
                    {/* Logo */}
                    <Link
                      href="/"
                      className="group inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-gray-700 hover:text-purple-600 active:text-gray-700"
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        className="opacity-90 text-purple-600 transform transition group-hover:scale-110 hi-solid hi-cube-transparent inline-block w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>dali.a</span>
                    </Link>
                    {/* END Logo */}
                  </div>
                  {/* END Left Section */}

                  {/* Right Section */}
                  <div className="flex items-center space-x-1 lg:space-x-5">
                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex lg:items-center lg:space-x-2">
                      <a
                        href="/"
                        className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded border border-purple-50 bg-purple-50 text-purple-500"
                      >
                        <svg
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          className="opacity-50 hi-solid hi-home inline-block w-5 h-5"
                        >
                          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                        <span>Home</span>
                      </a>
                      <Link
                        href="/receive"
                        className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-gray-600 border border-transparent hover:text-purple-500 hover:bg-purple-50 hover:border-purple-50 active:bg-purple-100 active:border-purple-100"
                      >
                        <svg
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          className="opacity-50 hi-solid hi-user-circle inline-block w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>Receive</span>
                      </Link>
                      <Link
                        href="/deliver"
                        className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-gray-600 border border-transparent hover:text-purple-500 hover:bg-purple-50 hover:border-purple-50 active:bg-purple-100 active:border-purple-100"
                      >
                        <svg
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          className="opacity-50 hi-solid hi-briefcase inline-block w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                            clipRule="evenodd"
                          />
                          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                        </svg>
                        <span>Deliver</span>
                      </Link>
                      <a
                        href="/jobs"
                        className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-gray-600 border border-transparent hover:text-purple-500 hover:bg-purple-50 hover:border-purple-50 active:bg-purple-100 active:border-purple-100"
                      >
                        <svg
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          className="opacity-50 hi-solid hi-cog inline-block w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>Jobs</span>
                      </a>
                    </nav>
                    {/* END Desktop Navigation */}

                    {/* User Dropdown */}
                    <Menu as="div" className="relative inline-block">
                      {/* Dropdown Toggle Button */}
                      <Menu.Button className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
                        <span>User</span>
                        <svg
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          className="opacity-50 hi-solid hi-chevron-down inline-block w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Menu.Button>
                      {/* END Dropdown Toggle Button */}

                      {/* Dropdown */}
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-150"
                        enterFrom="transform opacity-0 scale-75"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-100"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-75"
                      >
                        <Menu.Items className="absolute right-0 origin-top-right mt-2 w-48 shadow-xl rounded z-1">
                          <div className="bg-white ring-1 ring-black ring-opacity-5 rounded divide-y divide-gray-100">
                            <div className="p-2 space-y-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={`flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 ${
                                      active
                                        ? "text-gray-700 bg-gray-100"
                                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                                    }`}
                                  >
                                    <svg
                                      className="hi-solid hi-lock-closed inline-block w-5 h-5 opacity-50"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                    <span>Sign out</span>
                                  </a>
                                )}
                              </Menu.Item>
                            </div>
                          </div>
                        </Menu.Items>
                      </Transition>
                      {/* END Dropdown */}
                    </Menu>
                    {/* END User Dropdown */}

                    {/* Toggle Mobile Navigation */}
                    <div className="lg:hidden">
                      <button
                        type="button"
                        className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
                        onClick={() => setMobileNavOpen(!mobileNavOpen)}
                      >
                        <svg
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          className="hi-solid hi-menu inline-block w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                    {/* END Toggle Mobile Navigation */}
                  </div>
                  {/* END Right Section */}
                </div>

                {/* Mobile Navigation */}
                <div className={`lg:hidden ${mobileNavOpen ? "" : "hidden"}`}>
                  <nav className="flex flex-col space-y-2 py-4 border-t">
                    <a
                      href="/"
                      className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded border border-purple-50 bg-purple-50 text-purple-500"
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        className="opacity-50 hi-solid hi-home inline-block w-5 h-5"
                      >
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                      <span>Home</span>
                    </a>
                    <a
                      href="/receive"
                      className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-gray-600 border border-transparent hover:text-purple-500 hover:bg-purple-50 hover:border-purple-50 active:bg-purple-100 active:border-purple-100"
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        className="opacity-50 hi-solid hi-user-circle inline-block w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Receive</span>
                    </a>
                    <a
                      href="/deliver"
                      className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-gray-600 border border-transparent hover:text-purple-500 hover:bg-purple-50 hover:border-purple-50 active:bg-purple-100 active:border-purple-100"
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        className="opacity-50 hi-solid hi-briefcase inline-block w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                      </svg>
                      <span>Deliver</span>
                    </a>
                    <a
                      href="/jobs"
                      className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-gray-600 border border-transparent hover:text-purple-500 hover:bg-purple-50 hover:border-purple-50 active:bg-purple-100 active:border-purple-100"
                    >
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        className="opacity-50 hi-solid hi-cog inline-block w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Jobs</span>
                    </a>
                  </nav>
                </div>
                {/* END Mobile Navigation */}
              </div>
            </header>
            {/* END Page Header */}

            {/* Page Content */}
            {children}
            {/* END Page Content */}

            {/* Page Footer */}
            <footer
              id="page-footer"
              className="flex flex-none items-center bg-white"
            >
              <div className="text-center flex flex-col md:text-left md:flex-row md:justify-between text-sm container xl:max-w-7xl mx-auto px-4 lg:px-8">
                <div className="pt-4 pb-1 md:pb-4">
                  <a
                    className="font-medium text-purple-600 hover:text-purple-400"
                    target="_blank"
                  >
                    dali.a
                  </a>
                </div>
                <div className="pb-4 pt-1 md:pt-4 inline-flex items-center justify-center">
                  <span>developed by ralphie</span>
                </div>
              </div>
            </footer>
            {/* END Page Footer */}
          </div>
          {/* END Page Container */}
        </>
      </body>
    </html>
  );
}
