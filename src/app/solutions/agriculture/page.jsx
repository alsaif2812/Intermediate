import VideoTextCard from '@/components/VideoTextCard'
import Hero from '@/components/Hero'
import React from 'react'
import card1Data from '../../../textContent/agriculture/card1Data.json'
import card2Data from '../../../textContent/agriculture/card2Data.json'

const page = () => {
    return (
        <>
            <Hero />
            <div className="p-5 md:flex md:items-center md:justify-center md:px-[18vw] mb-5">
                <VideoTextCard data={card1Data} bgColor="bg-[#D2E0FB] bg-opacity-40" btnColor="bg-[#528ff6]" borderColor="hover:border-b-4 border-[#528ff6]" />
            </div>
            <div className="p-5 md:flex md:items-center md:justify-center md:px-[18vw] mb-5">
                <VideoTextCard data={card2Data} bgColor="bg-[#fff2cc] bg-opacity-40" btnColor="bg-[#ffd645]" borderColor="hover:border-b-4 border-[#ffd645]" />
            </div>

        </>
    )
}

export default page



export function generateMetadata({ params }) {
    return {
        title: "Agriculture",
        description: "lorem ipsum dolor sit amet, consectetur adip"
    }
}
