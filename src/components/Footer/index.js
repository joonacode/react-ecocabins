import React from 'react'
import Logo from '../Logo'

const Footer = () => {
  return (
    <div className='bg-gray-800 text-gray-400 py-8 overflow-hidden'>
      <div className='container mx-auto xl:px-20 lg:px-10 px-5'>
        <div className='flex sm:flex-row flex-col justify-between items-center'>
          <span className='sm:mb-0 mb-4'>info@eco-cabins.com</span>
          <Logo className='h-7 sm:mb-0 mb-4' />
          <div className='flex space-x-5'>
            <span className='sm:mb-0 mb-4'>Cookies</span>
            <span>Privacybeleid</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
