"use client"
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
        <VideoTextCard data={card3Data} bgColor="bg-[#86C8BC] bg-opacity-40" btnColor= "bg-[#86C8BC]"  />
      </div>

      <div
        id="main"
        className="p-5 md:flex md:items-center md:justify-center md:px-[18vw]"
      >
        <VideoTextCard data={cardData} bgColor="bg-[#F2BED1] bg-opacity-40" btnColor= "bg-[#F2BED1]" borderColor= "hover:border-b-4 border-[#F2BED1]" />
      </div>

      <div
        id="main"
        className="p-5 md:flex md:items-center md:justify-center md:px-[18vw]"
      >
        <VideoTextCard data={card2Data} bgColor="bg-[#95BDFF] bg-opacity-40" btnColor= "bg-[#7797CC]" borderColor= "hover:border-b-4 border-[#7797CC]"  />
      </div>
    </>
  );
};

export default Page;
