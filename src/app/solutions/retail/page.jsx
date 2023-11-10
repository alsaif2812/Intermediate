'use client';
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
        <VideoTextCard data={cardData}  btnColor= "bg-[#4797B1]" borderColor= "hover:border-b-4 border-[#4797B1] border-opacity-60" bgColor= "bg-[#4797B1] bg-opacity-50"  />
      </div>
      <div
        id="main"
        className="p-5 md:flex md:items-center md:justify-center  md:px-[18vw]"
      >
        <VideoTextCard data={card2Data} bgColor="bg-[#900C3F] bg-opacity-30" btnColor= "bg-[#900C3F] bg-opacity-50" borderColor= "border-[#900C3F] border-opacity-50" />
      </div>
      <div
        id="main"
        className="p-5 md:flex md:items-center md:justify-center  md:px-[18vw]"
      >
        <VideoTextCard data={card3Data} bgColor="bg-[#FF8AAE] bg-opacity-20" btnColor= "bg-[#F5BED9]" />
      </div>
    </>
  );
};

export default Page;
