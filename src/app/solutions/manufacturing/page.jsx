import React from 'react';
import VideoTextCard from '@/components/VideoTextCard';
import cardData from '../../../textContent/manufacturing/cardOne.json';
import card2Data from '../../../textContent/manufacturing/cardTwo.json';
import card3Data from '../../../textContent/manufacturing/cardThree.json';
import Hero from '@/components/Hero';

const Page = () => {
  return (
    <>
      <Hero />
      <div
        id="main"
        className="p-5 md:flex md:items-center md:justify-center md:px-[18vw]"
      >
        <VideoTextCard data={card3Data} bgColor="bg-[#ccf4c7] bg-opacity-40" btnColor="bg-[#52d34d]" />
      </div>

      <div
        id="main"
        className="p-5 md:flex md:items-center md:justify-center md:px-[18vw]"
      >
        <VideoTextCard data={cardData} bgColor="bg-[#D2E0FB] bg-opacity-40" btnColor="bg-[#528ff6]" borderColor=" border-[#528ff6]" />
      </div>

      <div
        id="main"
        className="p-5 md:flex md:items-center md:justify-center md:px-[18vw]"
      >
        <VideoTextCard data={card2Data} bgColor="bg-[#E5E0FF] bg-opacity-40" btnColor="bg-[#313bb2]" borderColor=" border-[#313bb2]" />
      </div>
    </>
  );
};

export default Page;


export function generateMetadata({ params }) {
  return {
    title: "Manufacturing",
    description: "lorem ipsum dolor sit amet, consectetur adip"
  }
}
