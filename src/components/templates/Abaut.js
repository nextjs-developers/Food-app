import Head from 'next/head';
import Image from 'next/image';
import React from 'react'

 

function About() {
  return (
    <div className="relative min-h-screen">
      <Head>
        <title>Mehmooni Restaurant Chain</title>
        <meta
          name="description"
          content="Hospitality is one of the most important characteristics of Iranians."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <div className="absolute inset-0">
        <Image
          src="/images/about.svg"  
          alt="Restaurant Background"
          layout="fill"
          objectFit="cover"
          className="opacity-100"
        />
       
      </div>

      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between min-h-screen p-8 md:p-16">
        
        <div className="text-white max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Mehmooni Restaurant Chain
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Hospitality Is One Of The Most Important Characteristics Of Iranians
            And It Is Our Honor To Have Been Serving The Honorable People Of Iran
            For More Than 20 Years At Mehmooni Restaurant Chain.
          </h2>
          <p className="text-base md:text-lg mb-6">
            We Have Always Tried To Provide You With Healthy And Appropriate Food
            In An Authentic Environment Based On Modern Architecture And Design
            Along With A Pleasant Nature.
          </p>
          <button className="flex items-center px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors duration-300">
            <span className="mr-2">More Info</span>
            <div>
        <Image
          src="/icons/arrow-right.svg"
          alt="mehmoni-logo"
          width={20}
          height={20}
          className="  my-10px flex justify-center align-center m-auto md:w-[100px] md:h-[60px] "
        />
      </div>
          </button>
        </div>

        
        <div className="grid grid-cols-2 gap-16 mt-10 md:mt-0">
          <div className="flex flex-col items-center text-white">
          
        <Image
          src="/icons/diagram.svg"
          alt="mehmoni-logo"
          width={20}
          height={20}
          className="  my-10px flex justify-center align-center m-auto md:w-[100px] md:h-[60px] "
        />
      
            <span className="text-sm font-semibold">High-Quality Food</span>
          </div>

          <div className="flex flex-col items-center text-white">
          
        <Image
          src="/icons/user_1.svg"
          alt="mehmoni-logo"
          width={20}
          height={20}
          className="  my-10px flex justify-center align-center m-auto md:w-[100px] md:h-[60px] "
        />
      
            <span className="text-sm font-semibold">Professional Staff</span>
          </div>

          <div className="flex flex-col items-center text-white">
          <Image
          src="/icons/menu-board_1.svg"
          alt="mehmoni-logo"
          width={20}
          height={20}
          className="text-white  my-10px flex justify-center align-center m-auto md:w-[100px] md:h-[60px] "
        />
            <span className="text-sm font-semibold">Diverse Menus</span>
          </div>

          <div className="flex flex-col items-center text-white">
          <Image
          src="/icons/home-wifi.svg"
          alt="mehmoni-logo"
          width={20}
          height={20}
          className="  my-10px flex justify-center align-center m-auto md:w-[100px] md:h-[60px] "
        />
            <span className="text-sm font-semibold">Cozy Atmosphere</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About
