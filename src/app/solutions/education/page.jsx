import Hero from '@/components/Hero'
import card1Data from '../../../textContent/education/card1Data.json'
import card2Data from '../../../textContent/education/card2Data.json'
import React from 'react'
import VideoTextCard from '@/components/VideoTextCard'
import Head from 'next/head'


export const metadata = {

  title: "Educational ERP Software for Schools in India - Wahni IT",
  description: "ERPnext is an educational software that streamlines and manages student data effectively. For your school, find the best education ERP system.",
  keyword: "Education,educational erp software india,erpnext"

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

        <VideoTextCard data={card1Data} bgColor="bg-[#E5E0FF] bg-opacity-40" btnColor="bg-[#313bb2]" borderColor="hover:border-b-4 border-[#313bb2]" />

      </div>
      <div className="p-5 md:flex md:items-center md:justify-center md:px-[18vw] mb-5"
      >

        <VideoTextCard data={card2Data} bgColor="bg-[#CDF0EA] bg-opacity-40" btnColor="bg-[#6eccb8]" borderColor="hover:border-b-4 border-[#6eccb8]" />

      </div>

    </>
  )
}

export default page
