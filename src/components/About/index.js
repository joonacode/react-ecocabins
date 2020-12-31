import React from 'react'

const About = () => {
  return (
    <div className='bg-gray-900 xg:pt-80 md:pt-52 sm:pt-96 pt-96 md:pb-24 sm:pb-36 pb-24'>
      <div className='container mx-auto xl:px-20 lg:px-10 px-5'>
        <h2 className='font-merri lg:mt-60 sm:mt-96 mt-36 text-4xl font-bold text-white mb-5'>
          Innovatie
        </h2>
        <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-y-0 gap-y-10 gap-x-10'>
          <div>
            <p className='text-white opacity-60 leading-8'>
              Wij hebben als doel om de EcoCabins voortdurend verder te
              ontwikkelen en innoveren, zodat de EcoCabins uiteindelijk 100%
              duurzaam en circulair zijn. Voorwaarde hierbij is dat de EcoCabins
              betaalbaar blijven. Met behulp van de zon, de wind en de beste
              isolatie geniet u van.
            </p>
          </div>
          <div>
            <p className='text-white opacity-60 leading-8'>
              Alle EcoCabins hebben een hoge isolatiewaarde, worden geproduceerd
              met indien mogelijk duurzame en/of natuurlijke materialen en
              hebben als opvallende uiterlijke kenmerk de ‘ronde hoeken’,
              mogelijk gemaakt door het specifieke materiaalgebruik De voordelen
              van bouwen.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
