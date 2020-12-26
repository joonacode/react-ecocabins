import React from 'react'
import { Link } from 'react-scroll'
import { ICMenu } from '../../assets'
import Logo from '../Logo'

const Navbar = () => {
  return (
    <div className='py-5'>
      <div className='container mx-auto xl:px-20 lg:px-10 px-5  '>
        <div className='flex justify-between items-center'>
          <div>
            <Logo />
          </div>
          <div className='items-center md:flex hidden'>
            <Link className='mr-7 text-white' to='home'>
              Models
            </Link>
            <Link className='mr-7 text-white' to='home'>
              To Buy
            </Link>
            <Link className='mr-7 text-white' to='home'>
              Rent
            </Link>
            <Link className='mr-7 text-white' to='home'>
              News
            </Link>
            <button
              type='button'
              className='bg-white text-gray-500 rounded py-2 px-5 font-500'
            >
              Contact
            </button>
          </div>
          <div className='md:hidden block'>
            <button>
              <img src={ICMenu} alt='menu' className='h-7 w-7' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
