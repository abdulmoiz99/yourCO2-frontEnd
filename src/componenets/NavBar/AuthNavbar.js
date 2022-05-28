/*eslint-disable*/
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              to="/"
            >
              Carbon Emissions
            </Link>
          </div>
          <div  className="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none"    >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/#"
                >
                  Docs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
