import React from 'react'
import card1Data from '../../../textContent/realestate/card1Data.json'
import card2Data from '../../../textContent/realestate/card2Data.json'
import Hero from '@/components/Hero'
import VideoTextCard from '@/components/VideoTextCard'
import Head from 'next/head'

export const metadata = {
  title: "ERP Solutions For Real Estate Industry in India",
  description: "Streamline property management. Track rentals, vacancies, renewals, and more. Take control of your real estate assets with our ERP solutions.",
  keywords: "best real estate brokerage software,real estate software company"

}

const page = () => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keyword} />
      </Head>
      <Hero />
      <div className="p-5 md:flex md:items-center md:justify-center md:px-[18vw] mb-5"
      >

        <VideoTextCard data={card1Data} bgColor="bg-[#F4DADA] bg-opacity-40" btnColor="bg-[#ca696a]" borderColor="hover:border-b-4 border-[#ca696a]" />

      </div>
      <div className="p-5 md:flex md:items-center md:justify-center md:px-[18vw] mb-5"
      >

        <VideoTextCard data={card2Data} bgColor="bg-[#F6E5F5] bg-opacity-40" btnColor="bg-[#bb44b8]" borderColor="hover:border-b-4 border-[#bb44b8]" />

      </div>

    </>
  )
}

export default page
