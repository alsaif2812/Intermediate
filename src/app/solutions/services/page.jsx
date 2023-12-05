import React from 'react'
import Hero from '@/components/Hero'
import card1Data from '../../../textContent/services/card1Data.json'
import card2Data from '../../../textContent/services/card2Data.json'
import VideoTextCard from '@/components/VideoTextCard'

const page = () => {
  return (
    <>

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

export function generateMetadata({ params }) {
  return {
    title: "Services",
    description: "lorem ipsum dolor sit amet, consectetur adip"
  }
}
