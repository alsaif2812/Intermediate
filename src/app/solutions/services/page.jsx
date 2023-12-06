import React from 'react'
import Hero from '@/components/Hero'
import card1Data from '../../../textContent/services/card1Data.json'
import card2Data from '../../../textContent/services/card2Data.json'
import VideoTextCard from '@/components/VideoTextCard'
import Head from 'next/head'

export const metadata = {

  title: "Wahni provides simple-to-use ERP software solutions in India",
  description: "Transform your service business with our comprehensive ERP solutions. Streamline operations, enhance communication, and boost efficiency.",
  keyword: "erp software solutions,wahni it,erpnext"

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

        <VideoTextCard data={card1Data} bgColor="bg-[#CDF0EA] bg-opacity-40" btnColor="bg-[#6eccb8]" borderColor="hover:border-b-4 border-[#6eccb8]" />

      </div>
      <div className="p-5 md:flex md:items-center md:justify-center md:px-[18vw] mb-5"
      >

        <VideoTextCard data={card2Data} bgColor="bg-[#D2E0FB] bg-opacity-40" btnColor="bg-[#528ff6]" borderColor="hover:border-b-4 border-[#528ff6]" />

      </div>

    </>
  )
}

export default page

