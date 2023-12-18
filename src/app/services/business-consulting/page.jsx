"use clients"
import React from 'react'
import Head from 'next/head'
import ServicesHero from '@/components/ServicesHero'
import Data4 from '../../../textContent/servicesHeroContent/Business'
import './business.css'
import Image from 'next/image'
import mission from '../../../../public/images/mission.png'
import Timeline from '@/components/Timeline'
import Rocket from '../../../components/Rocket'
import rocket3 from '../../../textContent/rocket/rocket3'

export const metadata = {
  title: "Business Consulting — Wahni IT Solutions",
  description: "Facing tax or accounting issues? Our skilled Chartered Accountants provide expert consultation and ensure seamless tax filings.",
  keyword: "Business Consulting,Business Consulting wahni it,wahni it"

}

const page = () => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keyword} />
      </Head>
      <ServicesHero data={Data4} />
      <div id="ourmission" className="md:flex md:w-full md:pt-[5vw] md:pl-[10vw]">
        <div id="leftmission" className="md:w-[30%] md:p-[0vw] p-[8vw]">
          <p className="text-blue-700 font-semibold md:text-xs text-lg uppercase tracking-widest">Mission</p>
          <h1 className="md:text-4xl text-3xl font-extrabold md:mt-2 mt-[4vw] text-[#292D34] tracking-wider">Our mission</h1>
          <div className="border-2 border-blue-500 rounded-3xl md:w-[5vw] w-[22vw] md:mt-[1vw] mt-[3vw]"></div>
          <p className="md:mt-4 mt-[12vw] opacity-60">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi saepe sed ipsam tenetur cum eaque molestias sequi in tempora quod sunt, nulla dolor rem odio incidunt eos illo corrupti natus culpa voluptates autem iste voluptatum enim? Provident soluta dolor obcaecati aliquid vero ipsam? Commodi.
          </p>
          <p className="md:mt-4 mt-[2vw] opacity-60">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi saepe sed ipsam tenetur cum eaque molestias sequi in tempora quod sunt, nulla dolor rem odio incidunt eos illo corrupti natus culpa voluptates autem iste voluptatum enim? Provident soluta dolor obcaecati aliquid vero ipsam? Commodi.
          </p>
        </div>
        <div id="rightmission" className="md:w-[50%] md:p-[10vw] md:mb-[10vw] md:flex items-center justify-center p-[5vw]">
          <Image src={mission} alt="img" width={1000} height={100} className="md:object-cover shadow-2xl rounded-3xl transition hover:scale-105 duration-500" />
        </div>
      </div><div id="timeline" className='flex flex-col items-center justify-center px-5'>
        <h1 className='md:text-4xl text-2xl font-bold md:pb-28 md:pt-0 pt-20 pb-10 text-center'>Unveiling our blueprint for <br /> successful ERP implementation.</h1>
        <Timeline />
      </div>
      <div id="iconss" className='flex items-center justify-center my-10'>

        <Rocket jsonData={rocket3} />
      </div>
    </>
  )
}

export default page


