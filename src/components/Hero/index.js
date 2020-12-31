import React from 'react'
import { ICPlay } from '../../assets'
import RellaxWrapper from 'react-rellax-wrapper'
import './hero.css'

const Hero = () => {
  return (
    <>
      <header>
        <div className='container mx-auto xl:px-20 lg:px-10 px-5 md:pt-48 pt-60'>
          <div className='flex justify-between md:flex-row flex-col '>
            <div className='md:w-3/5 w-full'>
              <RellaxWrapper speed={-2}>
                <p className='text-gray-200 mb-5 text-xl font-500 md:text-left text-center'>
                  Duurzame tiny huisjes
                </p>
              </RellaxWrapper>

              <RellaxWrapper speed={-3}>
                <h1 className='text-white font-merri font-bold  lg:text-5xl md:text-4xl sm:text-3xl md:text-left text-3xl md:mb-0 mb-5 text-center header-title'>
                  Een ecologisch tiny huisje is zoveel mogelijk opgebouwd uit
                  duurzame natuurlijke materialen
                </h1>
              </RellaxWrapper>
            </div>
            <div className='flex-grow flex justify-center items-center'>
              <RellaxWrapper speed={-4}>
                <div className='flex justify-center items-center cursor-pointer'>
                  <img src={ICPlay} className='h-11' alt='play' />
                  <span className='text-white' style={{ marginLeft: '-10px' }}>
                    Bekijk de film
                  </span>
                </div>
              </RellaxWrapper>
            </div>
          </div>
          <RellaxWrapper speed={1}>
            <div className='md:flex hidden social-media-rotate'>
              <a href='https://instagram.com' className='mr-10 text-white'>
                Instagram
              </a>
              <a href='https://instagram.com' className='mr-10 text-white'>
                Facebook
              </a>
              <a href='https://instagram.com' className='mr-10 text-white'>
                Linkedin
              </a>
            </div>
          </RellaxWrapper>
        </div>
      </header>
    </>
  )
}

export default Hero
