import React from 'react'
import { IMGSlider1 } from '../../assets'
import './intro.css'
import RellaxWrapper from 'react-rellax-wrapper'

const Intro = () => {
  return (
    <div className='bg-white h-60 relative'>
      <div className=''>
        <div className='intro-left sm:py-16 xl:py-28 lg:py-16 md:pb-40 sm:pb-80 pb-20 sm:pt-32 pt-32 lg:pl-32 sm:px-20 px-10 lg:pr-48  bg-white lg:w-3/5 md:w-full'>
          <h2 className='font-merri text-4xl font-bold mb-5'>
            Duurzame materialen
          </h2>
          <p className='text-gray-600 leading-9'>
            Alle EcoCabins hebben een hoge isolatiewaarde, worden geproduceerd
            met indien mogelijk duurzame en/of natuurlijke materialen en hebben
            als opvallende uiterlijke kenmerk de ‘ronde hoeken’, mogelijk
            gemaakt door het specifieke materiaalgebruik. De voordelen van
            bouwen met hout zijn legio: hout is licht, flexibel, isoleert goed
            en bouwt snel en efficiënt.
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
