import React from 'react'
import { IMGFooter } from '../../assets'

const Features = () => {
  return (
    <div className='container mx-auto xl:px-20 lg:px-10 px-5 py-28'>
      <div className='flex'>
        <div className='w-3/5 pr-20 lg:block hidden'>
          <img src={IMGFooter} alt='features' />
        </div>
        <div>
          <div className='grid sm:grid-cols-2 grid-cols-1 gap-10'>
            <div className='sm:border-0 border-b sm:pb-0 pb-5'>
              <h5 className='font-bold text-2xl mb-2'>Hout</h5>
              <p className='opacity-50'>
                De draagconstructies van EcoCabins bestaan uit hout. Hout is
                duurzaam en.
              </p>
            </div>
            <div className='sm:border-0 border-b sm:pb-0 pb-5'>
              <h5 className='font-bold text-2xl mb-2'>Glaswol isolatie</h5>
              <p className='opacity-50'>
                De combinatie van glaswol met een houtskelet constructie geeft
                een.
              </p>
            </div>
            <div className='sm:border-0 border-b sm:pb-0 pb-5'>
              <h5 className='font-bold text-2xl mb-2'>Afwerking</h5>
              <p className='opacity-50'>
                De draagconstructies van EcoCabins bestaan uit hout. Hout is
                duurzaam en.
              </p>
            </div>
            <div className='sm:border-0 border-b sm:pb-0 pb-5'>
              <h5 className='font-bold text-2xl mb-2'>Triple glas</h5>
              <p className='opacity-50'>
                De draagconstructies van EcoCabins bestaan uit hout. Hout is
                duurzaam en.
              </p>
            </div>
            <div className='sm:border-0 border-b sm:pb-0 pb-5'>
              <h5 className='font-bold text-2xl mb-2'>Stalen onderstel</h5>
              <p className='opacity-50'>
                De draagconstructies van EcoCabins bestaan uit hout. Hout is
                duurzaam en.
              </p>
            </div>
            <div className='sm:border-0 border-b sm:pb-0 pb-5'>
              <h5 className='font-bold text-2xl mb-2'>Infrarood vloer</h5>
              <p className='opacity-50'>
                De draagconstructies van EcoCabins bestaan uit hout. Hout is
                duurzaam en.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
