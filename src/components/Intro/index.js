import React from 'react'
import { IMGSlider1 } from '../../assets'
import './intro.css'
import RellaxWrapper from 'react-rellax-wrapper'

const Intro = () => {
  return (
    <div className='bg-white h-60 relative'>
      <div className=''>
        <div className='intro-left sm:py-16 lg:py-28 md:pb-40 sm:pb-80 pb-20 sm:pt-32 pt-32 lg:pl-32 sm:px-20 px-10 lg:pr-48  bg-white lg:w-3/5 md:w-full'>
          <h2 className='font-merri text-4xl font-bold mb-5'>
            Durable materials
          </h2>
          <p className='text-gray-600 leading-9'>
            All EcoCabins have a high insulation value and are produced with
            sustainable and / or natural materials if possible as a striking
            external feature the "round corners", possibly made by the specific
            use of materials. The pro's of there are many building with wood:
            wood is light, flexible and insulates well and builds quickly and
            efficiently
          </p>
          <button className='px-4 py-2 rounded-lg border-2 border-gray-400 mt-5 font-500 text-gray-500'>
            Lees meer
          </button>
        </div>
        <RellaxWrapper speed={1}>
          <div className='intro-right'>
            <img src={IMGSlider1} className='' alt='slider1' />
          </div>
        </RellaxWrapper>
      </div>
    </div>
  )
}

export default Intro
