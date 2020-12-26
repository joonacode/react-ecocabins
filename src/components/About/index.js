import React from 'react'

const About = () => {
  return (
    <div className='bg-gray-900 xg:pt-80 md:pt-52 sm:pt-96 pt-96 md:pb-24 sm:pb-36 pb-24'>
      <div className='container mx-auto xl:px-20 lg:px-10 px-5'>
        <h2 className='font-merri lg:mt-60 sm:mt-96 mt-20 text-4xl font-bold text-white mb-5'>
          Innovation
        </h2>
        <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-y-0 gap-y-10 gap-x-10'>
          <div>
            <p className='text-white opacity-60 leading-8'>
              Our goal is to continuously improve the EcoCabins develop and
              innovate, so that the EcoCabins are ultimately 100% are
              sustainable and circular. The condition for this is that the
              EcoCabins remain affordable. Using the sun, the wind and the best
              isolation you enjoy.
            </p>
          </div>
          <div>
            <p className='text-white opacity-60 leading-8'>
              All EcoCabins have a high insulation value and are produced with
              sustainable and / or natural materials where possible and have as
              striking external characteristic the "round corners", made
              possible by the specific use of materials The advantages of
              building.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
