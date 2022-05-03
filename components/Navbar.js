import React from 'react'
import Image from "next/image"
import Link from "next/link"
const Navbar = () => {
  return (
    <>
     <header>
     <nav
        className="
          flex flex-wrap
          items-center
          justify-between
          max-w-[90%]
          mx-auto
          p-4
          md:py-0
          text-lg text-gray-700
          bg-white
        "
      >
       <div>
          
          <Link href="/"><a >
            Mukund
          </a></Link>
        </div>
       
         <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
       
       <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
          <ul
            className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li>

              <Link href="/">
              <a className="md:p-4 py-2 block hover:text-purple-400" 
                >Home</a
              >
              </Link>
            </li>
            <li>
              <Link href="/">
              <a className="md:p-4 py-2 block hover:text-purple-400" 
                >About</a
              ></Link>
            </li>
            <li>
              <Link href="/">
              <a className="md:p-4 py-2 block hover:text-purple-400" 
                >Contact</a
              ></Link>
            </li>
            <li>
              <Link href="/">
              <a className="md:p-4 py-2 block hover:text-purple-400" 
                >Blog</a
              ></Link>
            </li>
            <li>
              <a
                className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
                href="#"
                >Sign Up</a
              >
            </li>
          </ul>
        </div>
    </nav>
  </header>
    </>
  )
}

export default Navbar