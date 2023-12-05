import Hero from '@/components/Hero';
import React from 'react';
import VideoTextCard from '@/components/VideoTextCard';
import cardData from '../../../textContent/retail/cardOne.json';
import card2Data from '../../../textContent/retail/cardTwo.json';
import card3Data from '../../../textContent/retail/cardThree.json';

const Page = () => {
  return (
    <>
      <Hero />
      <div
        id="main"
        className="p-5 md:flex md:items-center md:justify-center md:px-[18vw]"
      >
        <VideoTextCard data={cardData} btnColor="bg-[#bb44b8]" borderColor="hover:border-b-4 border-[#bb44b8] border-opacity-60" bgColor="bg-[#F6E5F5] bg-opacity-50" />
      </div>
      <div
        id="main"
        className="p-5 md:flex md:items-center md:justify-center  md:px-[18vw]"
      >
        <VideoTextCard data={card2Data} bgColor="bg-[#FFF2CC] bg-opacity-30" btnColor="bg-[#ffd645] bg-opacity-50" borderColor="border-[#ffd645] border-opacity-50" />
      </div>
      <div
        id="main"
        className="p-5 md:flex md:items-center md:justify-center  md:px-[18vw]"
      >
        <VideoTextCard data={card3Data} bgColor="bg-[#CDF0EA] bg-opacity-20" btnColor="bg-[#6eccb8]" />
      </div>
    </>
  );
};

export default Page;

export function generateMetadata({ params }) {
  return {
    title: "Retail",
    description: "lorem ipsum dolor sit amet, consectetur adip"
  }
}
