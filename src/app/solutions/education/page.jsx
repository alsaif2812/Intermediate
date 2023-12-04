import Hero from '@/components/Hero'
import card1Data from '../../../textContent/education/card1Data.json'
import card2Data from '../../../textContent/education/card2Data.json'
import React from 'react'
import VideoTextCard from '@/components/VideoTextCard'

const page = () => {
  return (
    <>
      <Hero />
      <div className="p-5 md:flex md:items-center md:justify-center md:px-[18vw] mb-5"
      >

        <VideoTextCard data={card1Data} bgColor="bg-[#95BDFF] bg-opacity-40" btnColor="bg-[#7797CC]" borderColor="hover:border-b-4 border-[#7797CC]" />

      </div>
      <div className="p-5 md:flex md:items-center md:justify-center md:px-[18vw] mb-5"
      >

        <VideoTextCard data={card2Data} bgColor="bg-[#95BDFF] bg-opacity-40" btnColor="bg-[#7799CC]" borderColor="hover:border-b-4 border-[#7797CC]" />

      </div>

    </>
  )
}

export default page

export function generateMetadata({ params }) {
  return {
    title: "Education",
    description: "lorem ipsum dolor sit amet, consectetur adip"
  }
}