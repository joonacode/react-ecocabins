import React from 'react'
import { Link } from 'react-scroll'
import './sidebar.css'
import { FaTimes } from 'react-icons/fa'

const Sidebar = ({ toggleSidebar, sidebar }) => {
  return (
    <div
      className={`bg-gray-100 fixed w-full min-h-scree p-10 h-full sidebar top-0 z-50 ${
        sidebar ? ' active' : ''
      }`}
    >
      <span
        className='absolute right-10 cursor-pointer border-2 p-3 rounded-full'
        onClick={toggleSidebar}
      >
        <FaTimes />
      </span>
      <div className='flex flex-col items-center justify-center h-full space-y-5 clearfix'>
        <Link className='mr-7 text-gray-700 text-xl' to='home'>
          Modellen
        </Link>
        <Link className='mr-7 text-gray-700 text-xl' to='home'>
          Kopen
        </Link>
        <Link className='mr-7 text-gray-700 text-xl' to='home'>
          Huren
        </Link>
        <Link className='mr-7 text-gray-700 text-xl' to='home'>
          Nieuws
        </Link>
        <Link className='mr-7 text-gray-700 text-xl' to='home'>
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
