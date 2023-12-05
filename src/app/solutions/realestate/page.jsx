import React from 'react'
import card1Data from '../../../textContent/realestate/card1Data.json'
import card2Data from '../../../textContent/realestate/card2Data.json'
import Hero from '@/components/Hero'
import VideoTextCard from '@/components/VideoTextCard'

const page = () => {
  return (
    <>
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

export function generateMetadata({ params }) {
  return {
    title: "Real-Estate",
    description: "lorem ipsum dolor sit amet, consectetur adip"
  }
}