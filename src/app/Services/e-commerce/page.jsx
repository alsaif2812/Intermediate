import React from 'react'
import Head from 'next/head'
import './ecommerce.css'
import Card1Data from '../../../textContent/e-commerce/Card1Data.json'
import Card2Data from '../../../textContent/e-commerce/Card2Data.json'
import VideoTextCard from '@/components/VideoTextCard'
import jsonData2 from '../../../textContent/rocket/rocket2.json';
import Rocket from '../../../components/Rocket'
import ServicesHero from '@/components/ServicesHero'
import Data2 from '../../../textContent/servicesHeroContent/e-commerce'

export const metadata = {

  title: "E-Commerce — Wahni IT Solutions",
  description: "We provide setting up of E-commerce sites and integrating the same with all the payment with all backend operations also integrated with ERPNext",
  keyword: "ECommerce, E-Commerce, ecommerce,wahni it"

}

const page = () => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keyword} />
      </Head>
      <div>
        <div id="mainecommerce" className='w-full py-5 md:pt-6  pt-16 px-6 flex flex-col items-center justify-center '>

          <ServicesHero data={Data2} />
        </div>
        <div className=' px-4 md:pt-20 pt-1'>

          <div className="p-1 md:flex md:items-center md:justify-center md:px-[18vw] mb-5">
            <VideoTextCard data={Card1Data} bgColor="bg-[#D2E0FB] bg-opacity-40" btnColor="bg-[#528ff6]" borderColor="hover:border-b-4 border-[#528ff6]" txtcolor="text-[#528ff6]" />
          </div>
          <div className="p-1 md:flex md:items-center md:justify-center md:px-[18vw] mb-5">
            <VideoTextCard data={Card2Data} bgColor="bg-[#fff2cc] bg-opacity-40" btnColor="bg-[#ffd645]" borderColor="hover:border-b-4 border-[#ffd645]" txtcolor="text-[#ffd645]" />
          </div>
        </div>
        <div id="rocket" className='flex items-center justify-center my-10'>
          <Rocket jsonData={jsonData2} />
        </div>
      </div>
    </>
  )
}

export default page

