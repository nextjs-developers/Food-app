import Image from 'next/image'
import React from 'react'

function AboutUs() {
  return (
    <div className='flex flex-col gap-10'>
        <div className='relative'>
        <Image src="/images/aboutus.jpg" width={1440} height={336} alt="aboutus" className=' object-cover w-full md:h-[300px] '/>
        <div className="absolute inset-0 bg-gray-600 opacity-50 flex justify-center items-center"></div>
        <div className='absolute inset-0 flex  justify-center items-center'>
            <p className='text-5xl text-white'>
           Know More About Mehmoni
            </p>
        </div>
        </div>
        <div className='flex md:flex-row flex-col gap-8 justify-center items-center container px-10'>
            <div className='flex flex-col gap-8 md:w-1/2'>
                <h3 className='text-2xl'>About Us</h3>
                <p>
                Mehmoni chain restaurants were established in 1989, and throughout these years, they have always strived to satisfy their customers by offering high-quality food and fast, timely service. During these years, customer satisfaction has been the top priority. In this regard, Mehmoni has consistently worked to maintain the quality of its food at the highest level and, despite fluctuations in the prices of raw materials in the market, has kept its own prices stable.
<br/>
Mehmoni has opened branches that are very stylish and modern, and they are capable of hosting your small and large celebrations with high-quality service. The dining halls of the branches are located on two separate floors, equipped with a modern staircase and an elevator for individuals with limited mobility and the elderly, and are ready to serve you.
<br/>
Vision: In the near future, the banquet halls of the branches will be launched and prepared to host your large events and ceremonies. We hope for the day when all Iranians are healthy and well.
                </p>
            </div>
            <Image src="/images/about-desc.svg" width={600} height={492} alt='about-us desc'/>

        </div>
<div>
    
</div>

      
    </div>
  )
}

export default AboutUs

